import React, { Component } from 'react';

// Components
import { SafeAreaView } from 'react-navigation';
import {
    View,
    Image
} from 'react-native';

import ProfileScreen from '@features/keyholder/containers';

import BackButton from '@shared/components/BackButton';
import Button from '@shared/components/Button';
import Logo from '@shared/components/Logo';
import FlickableView from '@shared/components/FlickableView';


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
        return buttons.map(({ title, endpoint }, i) =>
            <Button
                textStyle={buttons.length - 1 === i && SharedStyles.buttonGreen}
                containerStyle={buttons.length - 1 === i && SharedStyles.buttonGreen}
                title={title}
                onPress={() => this.props.navigation.navigate(endpoint)}
                underlayColor="#fec8c1"
            />
        );
    }

    render() {
        return (
            <FlickableView
                overlayComponent={ProfileScreen}
                visible
            >
                <View style={SharedStyles.headerContainer}>
                    <BackButton
                        style={{ alignSelf: 'flex-start'}}
                        onPress={() => {
                            this.setState({ exiting: true });
                            this.props.navigation.goBack();
                        }}
                    />
                    <Logo />
                </View>
                <View style={[SharedStyles.bodyContainer, KeyholderStyles.bodyContainer]}>
                    <Image
                        source={keyUrl}
                        style={[KeyholderStyles.key]}
                    />
                    <View style={KeyholderStyles.buttonContainer}>{ this.renderButtons() }</View>
                </View>
            </FlickableView>
        );
    }
}