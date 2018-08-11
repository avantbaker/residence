import React from 'react';

import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import EventStyles from '../styles';

const EventButton = ({ date, highlight, content, onPress }) => {
    return (
        <TouchableHighlight
            underlayColor="#fec8c1"
            style={EventStyles.button}
            onPress={onPress}
        >
            <View>
                <View style={EventStyles.buttonMeta}>
                    <Text style={EventStyles.date}>{ date }</Text>
                    <Text style={EventStyles.rsvp}>{ highlight }</Text>
                </View>
                <Text style={EventStyles.buttonContent}>
                    {content}
                </Text>
            </View>
        </TouchableHighlight>
    )
};

export default EventButton;