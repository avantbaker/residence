import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import {
    View,
    Text,
    TouchableHighlight,
    Image
} from 'react-native';

import Logo from '@shared/components/Logo';

import { buttons } from '../content/home.json';

import HomeStyles from '../styles';

type Props = {};

export default class HomeContainer extends Component<Props> {

    buttonStyle(iteration) {
        return buttons.length - 1 === iteration ?
            [HomeStyles.button, HomeStyles.signIn] :
            HomeStyles.button;
    }

    renderButtons() {
        return buttons.map((button, i) =>
            <TouchableHighlight style={this.buttonStyle(i)}>
                <Text style={HomeStyles.buttonText}>{button.title}</Text>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <SafeAreaView style={HomeStyles.container}>
                <View style={HomeStyles.logoWrapper}>
                    <Logo />
                </View>
                <View>{ this.renderButtons() }</View>
            </SafeAreaView>
        );
    }
}