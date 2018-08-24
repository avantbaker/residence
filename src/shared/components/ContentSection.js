import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import SharedStyles from 'src/styles';

const ContentSection = ({ content, header, style }) => {
    return (
        <View style={SharedStyles.contentWrapper}>
            <Text style={SharedStyles.header}>{ header }</Text>
            <View style={SharedStyles.contentContainer}>
                <Text style={style ? [SharedStyles.content, style] : SharedStyles.content}>
                    { content }
                </Text>
            </View>
        </View>
    );

};

export default ContentSection;