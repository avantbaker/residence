import React, { Component } from 'react';

// Components
import {
    View,
    Image,
} from 'react-native';

import {visibleHeight} from '@shared/libs/layout';

// Custom components
import Logo from '@shared/components/Logo';
import Button from '@shared/components/Button';
import HomeButton from '@shared/components/HomeButton';
import FlickableView from "@shared/components/FlickableView";
import Welcome from '@features/welcome/containers';

// Images
const peachDoorUrl = require('@assets/images/peach-door.png');
const pinkDoorUrl = require('@assets/images/pink-door.png');

// Data
import { buttons } from '@features/home/content/home.json';

// Styles
import HomeStyles from '@features/home/styles';
import SharedStyles from 'src/styles';


type Props = {};

export default class HomeContainer extends Component<Props> {

    constructor(props) {
        super(props);
        this.navigate = this.props.navigation.navigate.bind(this);
    }

    renderButtons() {
        return buttons.map(({ title, route }, i) =>
            <Button
                underlayColor="#fec8c1"
                textStyle={buttons.length - 1 === i && SharedStyles.buttonGreen}
                containerStyle={buttons.length - 1 === i && SharedStyles.buttonGreen}
                title={title}
                onPress={this.navigate}
                endpoint={route}
            />
        );
    }

    render() {
        return (
            <FlickableView
                overlayComponent={Welcome}
                visible
            >
                <View style={SharedStyles.headerContainer}>
                    <Logo />
                </View>
                <Image
                    source={peachDoorUrl}
                    style={HomeStyles.peachDoor}
                />
                <Image
                    source={pinkDoorUrl}
                    style={HomeStyles.pinkDoor}
                />
                <View style={SharedStyles.bodyContainer}>
                    { this.renderButtons() }
                </View>
            </FlickableView>
        );
    }
}