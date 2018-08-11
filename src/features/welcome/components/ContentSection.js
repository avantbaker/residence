import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import WelcomeStyles from '../styles';

const ContentSection = ({ content, header }) => {
    return (
        <View style={WelcomeStyles.contentWrapper}>
            <Text style={WelcomeStyles.header}>{ header }</Text>
            <View style={WelcomeStyles.contentContainer}>
                <Text style={WelcomeStyles.content}>
                    { content }
                </Text>
            </View>
        </View>
    );

};

export default ContentSection;