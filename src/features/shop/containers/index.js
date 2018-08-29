import React, { Component } from 'react';

import { SafeAreaView } from 'react-navigation';

import {
    View,
    Text,
    TouchableHighlight,
    Image
} from 'react-native';

import Logo from '@shared/components/Logo';
import BackButton from '@shared/components/BackButton';
import Button from '@shared/components/Button';

// Images
const palm = require('@assets/images/colored-palm.jpg');

// Data
import { buttons } from '@features/keyholder/content/index.json';

// Styles
import HomeStyles from '@features/home/styles';
import KeyholderStyles from '@features/keyholder/styles';
import ShopStyles from '@features/shop/styles';
import SharedStyles from 'src/styles';

type Props = {};

export default class ShopContainer extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            exiting: false
        }
    }
    renderButton() {
        return (
            <TouchableHighlight
                style={HomeStyles.button}
                onPress={() => this.props.navigation.navigate('OnlineShop')}
            >
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
                {
                    !this.state.exiting &&
                    <Image
                        source={palm}
                        style={ShopStyles.palm1}
                    />
                }
                <View style={HomeStyles.logoWrapper}>
                    <BackButton
                        style={{ alignSelf: 'flex-start'}}
                        onPress={() => {
                            this.setState({ exiting: true });
                            this.props.navigation.goBack();
                        }}
                    />
                    <Logo />
                </View>
                <View style={KeyholderStyles.buttonContainer}>
                    { this.renderButton() }
                    <View style={SharedStyles.positionBottom}>
                        <Button
                            textStyle={SharedStyles.buttonGreen}
                            containerStyle={SharedStyles.buttonGreen}
                            title="Sign In"
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}