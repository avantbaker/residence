import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import {
    View,
    Image
} from 'react-native';

const logoUrl = require('@assets/images/logo.png');
const backgroundUrl = require('@assets/images/afro-chick.jpg');

import ContentSection from '@shared/components/ContentSection';
import BackButton from '@shared/components/BackButton';

import SharedStyles from 'src/styles';
import ProfileStyles from '../styles';

import {
    content,
} from '@features/welcome/content/welcome.json';

import {
    header,
} from '@features/keyholder/content/index.json';

import SwipeIndicator from "@shared/components/SwipeIndicator";

type Props = {};

export default class WelcomeContainer extends Component<Props> {
    render() {
        return (
            <SafeAreaView style={ProfileStyles.container}>
                <View style={ProfileStyles.logoWrapper}>
                    <Image
                        style={SharedStyles.logo}
                        source={logoUrl}
                    />
                </View>
                <ContentSection
                    style={ProfileStyles.content}
                    header={header}
                    content={content}
                />
                <SwipeIndicator
                    style={ProfileStyles.swipeText}
                    onPress={() => this.props.navigation.navigate('Entrance')}
                />
                <Image
                    style={ProfileStyles.backgroundImage}
                    source={backgroundUrl}
                    transform={[{rotateY: '180deg'}]}
                />
            </SafeAreaView>
        );
    }
}