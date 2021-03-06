import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Animated, PanResponder, Platform} from 'react-native';

import clamp from 'clamp';

import FlickAnimation from '@shared/libs/FlickAnimation';
import {visibleHeight} from '@shared/libs/layout';
import styles from '@shared/libs/styles';

const deprecated = (condition, message) => condition && console.warn(message);

const MINIMUM_VELOCITY_THRESHOLD = 0.1;

const MINIMUM_DISTANCE_THRESHOLD = 0.24;

const DEFAULT_SLIDING_DURATION = 240;


// current top: visibleHeight or 812,
// desired top: visibleHeight * 2 or 1624,
// current Bottom: 0,
// desired bottom: 812,

// start collapsed true

class FlickableOverlay extends Component {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        draggableRange: PropTypes.shape({
            top: PropTypes.number,
            bottom: PropTypes.number
        }),
        height: PropTypes.number,
        onDrag: PropTypes.func,
        onDragStart: PropTypes.func,
        onDragEnd: PropTypes.func,
        onRequestClose: PropTypes.func,
        startCollapsed: PropTypes.bool,
        allowMomentum: PropTypes.bool,
        allowDragging: PropTypes.bool,
        showBackdrop: PropTypes.bool,
        contentStyle: PropTypes.any,
        children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    };

    static defaultProps = {
        height: visibleHeight,
        draggableRange: {top: visibleHeight * 2, bottom: visibleHeight},
        onDrag: () => {},
        onDragStart: () => {},
        onDragEnd: () => {},
        onRequestClose: () => {},
        allowMomentum: true,
        allowDragging: true,
        showBackdrop: true,
        startCollapsed: false
    };

    constructor(props) {
        super(props);

        this._onDrag = this._onDrag.bind(this);
        this._renderContent = this._renderContent.bind(this);
        this._renderBackdrop = this._renderBackdrop.bind(this);
        this._isInsideDraggableRange = this._isInsideDraggableRange.bind(this);
        this._triggerAnimation = this._triggerAnimation.bind(this);

        this.transitionTo = this.transitionTo.bind(this);

        this.state = {
            visible: props.visible
        };

        const {top, bottom} = props.draggableRange;
        const collapsedPosition = this.props.startCollapsed ? -top : -bottom;

        this._animatedValueY = this.state.visible ? collapsedPosition : -top;
        this._translateYAnimation = new Animated.Value(this._animatedValueY);
        this._flick = new FlickAnimation(this._translateYAnimation, -top, -bottom);

        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: this._onMoveShouldSetPanResponder.bind(this),
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
            onPanResponderMove: this._onPanResponderMove.bind(this),
            onPanResponderRelease: this._onPanResponderRelease.bind(this),
            onPanResponderTerminate: this._onPanResponderTerminate.bind(this),
            onPanResponderTerminationRequest: () => false
        });

        this._backdrop = null;
        this._isAtBottom = !props.startCollapsed;
        this._requestCloseTriggered = false;

        this._translateYAnimation.addListener(this._onDrag);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible && !this.props.visible) {
            this._requestCloseTriggered = false;

            this.setState({visible: true}, () => {
                this.transitionTo(-this.props.draggableRange.top)
            });
            return
        }

        const {bottom} = this.props.draggableRange;

        if (
            !nextProps.visible &&
            this.props.visible &&
            -this._animatedValueY > bottom
        ) {
            this._requestCloseTriggered = true;

            this.transitionTo({
                toValue: -bottom,
                onAnimationEnd: () => this.setState({visible: false})
            });
            return
        }

        if (
            nextProps.draggableRange.top !== this.props.draggableRange.top ||
            nextProps.draggableRange.bottom !== this.props.draggableRange.bottom
        ) {
            const {top, bottom} = nextProps.draggableRange;
            this._flick = new FlickAnimation(this._translateYAnimation, -top, -bottom)
        }
    }

    _onMoveShouldSetPanResponder(evt, gestureState) {
        return (
            this.props.allowDragging &&
            this._isInsideDraggableRange() &&
            Math.abs(gestureState.dy) > MINIMUM_DISTANCE_THRESHOLD
        )
    }

    // eslint-disable-next-line no-unused-vars
    _onPanResponderGrant(evt, gestureState) {
        console.log('FIRED on pan Responder Grant');
        console.log('animated Y value: ', this._animatedValueY);
        this._flick.stop();
        this._translateYAnimation.setOffset(this._animatedValueY);
        this._translateYAnimation.setValue(0);
        console.log('animated Y value: ', this._animatedValueY);
        this.props.onDragStart(-this._animatedValueY)
    }

    _onPanResponderMove(evt, gestureState) {
        if (!this._isInsideDraggableRange()) {
            return
        }
        console.log(gestureState.dy);
        this._translateYAnimation.setValue(gestureState.dy)
    }

    // Trigger when you release your finger
    _onPanResponderRelease(evt, gestureState) {
        if (!this._isInsideDraggableRange()) {
            return
        }

        console.log('translateYAnimation : ', this._translateYAnimation);
        this._translateYAnimation.flattenOffset()
        console.log('translateYAnimation : ', this._translateYAnimation);

        const cancelFlick = this.props.onDragEnd(-this._animatedValueY)
        console.log('cancel flick: ', cancelFlick);
        if (!this.props.allowMomentum || cancelFlick) {
            return
        }

        if (Math.abs(gestureState.vy) > MINIMUM_VELOCITY_THRESHOLD) {
            console.log('Gets here?');
            this._flick.start({
                velocity: gestureState.vy,
                fromValue: this._animatedValueY
            })
        }

        return
    }

    // eslint-disable-next-line no-unused-vars
    _onPanResponderTerminate(evt, gestureState) {
        //
    }

    _isInsideDraggableRange() {
        const {top, bottom} = this.props.draggableRange
        return this._animatedValueY >= -top && this._animatedValueY <= -bottom
    }

    _onDrag({value}) {
        const {top, bottom} = this.props.draggableRange

        if (value >= -bottom) {
            this._isAtBottom = false;

            if (this._backdrop != null) {
                this._backdrop.setNativeProps({pointerEvents: 'none'})
            }

            if (!this._requestCloseTriggered) {
                this.props.onRequestClose()
            }
            return
        }

        if (this._isAtBottom) {
            this._isAtBottom = true;

            if (this._backdrop != null) {
                this._backdrop.setNativeProps({pointerEvents: 'box-only'})
            }
        }

        this._animatedValueY = clamp(value, -top, -bottom);
        this.props.onDrag(-this._animatedValueY)
    }

    transitionTo(mayBeValueOrOptions) {
        if (typeof mayBeValueOrOptions === 'object') {
            return this._triggerAnimation(mayBeValueOrOptions)
        }

        return this._triggerAnimation({toValue: mayBeValueOrOptions})
    }

    _triggerAnimation(options = {}) {
        const {
            toValue,
            easing,
            onAnimationEnd = () => {},
            duration = DEFAULT_SLIDING_DURATION
        } = options

        const animationConfig = {
            duration,
            easing,
            toValue: -Math.abs(toValue),
            delay: Platform.OS === 'android' ? 166.67 : undefined // to make it looks smooth on android
        }

        const animation = Animated.timing(
            this._translateYAnimation,
            animationConfig
        )

        animation.start(onAnimationEnd)
    }

    _renderBackdrop() {
        if (!this.props.showBackdrop) {
            return null
        }

        const {top, bottom} = this.props.draggableRange

        const backdropOpacity = this._translateYAnimation.interpolate({
            inputRange: [-top, -bottom],
            outputRange: [0, 0.75],
            extrapolate: 'clamp'
        })

        return (
            <Animated.View
                key="backdrop"
                pointerEvents="box-only"
                ref={c => (this._backdrop = c)}
                onTouchStart={() => this._flick.stop()}
                onTouchEnd={() => this.props.onRequestClose()}
                style={[styles.backdrop, {opacity: backdropOpacity}]}
            />
        )
    }

    _renderContent() {
        const {top, bottom} = this.props.draggableRange
        const height = this.props.height

        const translateY = this._translateYAnimation.interpolate({
            inputRange: [-top, -bottom],
            outputRange: [-top, -bottom],
            extrapolate: 'clamp'
        });

        const transform = {transform: [{translateY}]}

        const animatedContainerStyles = [
            styles.animatedContainer,
            transform,
            {height, top: visibleHeight, bottom: 0}
        ]

        if (typeof this.props.children === 'function') {
            return (
                <Animated.View
                    key="content"
                    pointerEvents="box-none"
                    style={animatedContainerStyles}>
                    {this.props.children(this._panResponder.panHandlers)}
                </Animated.View>
            )
        }

        const Component = this.props.component;
        return (
            <Animated.View
                key="content"
                pointerEvents="box-none"
                style={animatedContainerStyles}
                {...this._panResponder.panHandlers}>
                {this.props.children || <Component />}
            </Animated.View>
        )
    }

    render() {
        if (!this.state.visible) {
            return null
        }

        return [this._renderBackdrop(), this._renderContent()]
    }
}

export default FlickableOverlay;