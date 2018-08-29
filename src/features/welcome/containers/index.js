import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Logo from '@shared/components/Logo';
import BackButton from '@shared/components/BackButton';
import ContentSection from '@shared/components/ContentSection';
import SwipeIndicator from "@shared/components/SwipeIndicator";

const backgroundUrl = require('@assets/images/welcome-girl.jpg');

import WelcomeStyles from '@features/welcome/styles';
import SharedStyles from 'src/styles';

import {
    content,
    header
} from '../content/welcome.json';

type Props = {};

export default class WelcomeContainer extends Component<Props> {
    render() {
        return (
            <SafeAreaView style={WelcomeStyles.container}>
                <View style={WelcomeStyles.logoWrapper}>
                    <Logo />
                </View>
                <ContentSection
                    header={header}
                    content={content}
                />
                <SwipeIndicator />
                <Image
                    style={WelcomeStyles.backgroundImage}
                    source={backgroundUrl}
                />
            </SafeAreaView>
        );
    }
}