import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import {
    View,
    Text,
    Image
} from 'react-native';

const logoUrl = require('../../../assets/images/logo.png');
const backgroundUrl = require('../../../assets/images/welcome-girl.jpg');

import ContentSection from '../components/ContentSection';

import SharedStyles from '../../../styles';
import WelcomeStyles from '../styles';
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
                    <Image
                        style={SharedStyles.logo}
                        source={logoUrl}
                    />
                </View>
                <ContentSection
                    header={header}
                    content={content}
                />
                <View style={WelcomeStyles.swipeText}>
                    <Text>Swipe</Text>
                    <View style={WelcomeStyles.upContainer}>
                        <Text>Up</Text>
                        <Text style={WelcomeStyles.caret}>^</Text>
                    </View>
                </View>
                <Image
                    style={WelcomeStyles.backgroundImage}
                    source={backgroundUrl}
                />
            </SafeAreaView>
        );
    }
}