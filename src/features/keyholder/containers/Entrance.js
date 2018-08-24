import React, { Component } from 'react';

// Components
import { SafeAreaView } from 'react-navigation';
import {
    View,
    Image
} from 'react-native';
import Button from '@shared/components/Button';
import Logo from '@shared/components/Logo';

// Images
const keyUrl = require('@assets/images/golden-key.png');

// Data
import { buttons } from '@features/keyholder/content/index.json';

// Styles
import KeyholderStyles from '@features/keyholder/styles';
import SharedStyles from 'src/styles';

type Props = {};

export default class EntranceContainer extends Component<Props> {

    renderButtons() {
        return buttons.map(({ title }, i) =>
            <Button
                style={buttons.length - 1 === i && SharedStyles.buttonGreen}
                title={title}
            />
        );
    }

    render() {
        return (
            <SafeAreaView style={SharedStyles.container}>
                <View style={SharedStyles.headerContainer}>
                    <Logo />
                </View>
                <View style={[SharedStyles.bodyContainer, KeyholderStyles.bodyContainer]}>
                    <Image
                        source={keyUrl}
                        style={[KeyholderStyles.key]}
                    />
                    <View style={KeyholderStyles.buttonContainer}>{ this.renderButtons() }</View>
                </View>
            </SafeAreaView>
        );
    }
}