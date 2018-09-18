import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';

import {
    View,
    Image
} from 'react-native';

import Logo from '@shared/components/Logo';
import BackButton from '@shared/components/BackButton';

import SharedStyles from 'src/styles';
import EventStyles from '@features/events/styles';

import { data } from '@features/events/content/events.json';
import { content } from '@features/welcome/content/welcome.json';

const backgroundUrl = require('src/assets/images/palm.png');

type Props = {};

export default class RsvpPaymentContainer extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            exiting: false
        };

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.setState({ exiting: true });
        this.props.navigation.goBack()
    }

    renderImage() {
        return !this.state.exiting && (
            <Image
                style={EventStyles.backgroundPalms}
                source={backgroundUrl}
            />
        );
    }

    render() {
        const BackgroundImage = this.renderImage;

        return (
            <SafeAreaView style={SharedStyles.container}>
                <BackgroundImage />
                <View style={SharedStyles.headerContainer}>
                    <BackButton onPress={this.goBack} />
                    <Logo />
                </View>
                <View style={SharedStyles.bodyContainer}>
                </View>
            </SafeAreaView>
        );
    }
}