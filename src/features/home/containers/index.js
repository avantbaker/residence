import React, { Component } from 'react';

// Components
import { SafeAreaView } from 'react-navigation';
import {
    View,
    Image,
    TouchableHighlight
} from 'react-native';

// Custom components
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '@shared/components/Logo';
import Button from '@shared/components/Button';
import HomeButton from '@shared/components/HomeButton';

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
                style={buttons.length - 1 === i && SharedStyles.buttonGreen}
                title={title}
                onPress={this.navigate}
                endpoint={route}
            />
        );
    }

    render() {
        return (
            <SafeAreaView style={SharedStyles.container}>
                <View style={SharedStyles.headerContainer}>
                    <HomeButton />
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
            </SafeAreaView>
        );
    }
}