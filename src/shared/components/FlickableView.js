import React, { Component } from 'react';

// Components
import { SafeAreaView } from 'react-navigation';
import {visibleHeight} from '@shared/libs/layout';
import FlickableOverlay from '@shared/components/FlickableOverlay';

// Data
import { buttons } from '@features/home/content/home.json';

// Styles
import SharedStyles from 'src/styles';

type Props = {};

export default class FlickableView extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            visible: this.props.visible
        };
    }

    render() {
        return (
            <SafeAreaView style={SharedStyles.container}>
                { this.props.children }
                <FlickableOverlay
                    visible={this.state.visible}
                    onRequestClose={() => this.setState({ visible: false })}
                    component={this.props.overlayComponent}
                />
            </SafeAreaView>
        );
    }
}