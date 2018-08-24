import React, { Component } from 'react';

import { SafeAreaView } from 'react-navigation';

import {
    View,
    Text,
    TouchableHighlight,
    Image
} from 'react-native';

import Logo from '@shared/components/Logo';
import BackButton from '@shared/components/BackButton'
// Images
const palm = require('@assets/images/colored-palm.jpg');

// Data
import { buttons } from '@features/keyholder/content/index.json';

// Styles
import HomeStyles from '@features/home/styles';
import KeyholderStyles from '@features/keyholder/styles';
import ShopStyles from '@features/shop/styles';

type Props = {};

export default class ShopContainer extends Component<Props> {

    renderButtons() {
        return (
            <TouchableHighlight style={HomeStyles.button}>
                <Text style={HomeStyles.buttonText}>residence-atl.com</Text>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <SafeAreaView style={HomeStyles.container}>
                <Image
                    source={palm}
                    style={ShopStyles.palm2}
                    transform={[{rotateY: '180deg'}, {rotateZ: '-8deg'}]}
                />
                <Image
                    source={palm}
                    style={ShopStyles.palm1}
                />
                <View style={HomeStyles.logoWrapper}>
                    <BackButton onPress={this.props.navigation.goBack.bind(this)} />
                    <Logo />
                </View>
                <View style={KeyholderStyles.buttonContainer}>
                    { this.renderButtons() }
                </View>
            </SafeAreaView>
        );
    }
}