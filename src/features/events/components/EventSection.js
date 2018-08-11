import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import EventButton from './EventButton';

import EventStyles from '../styles';

const EventSection = ({ events, header, onItemPress }) => {

    const renderEvents = () => {
        return events.map(({ date, highlight, content }) =>
            <EventButton
                date={date}
                highlight={highlight}
                content={content}
                onPress={() => onItemPress({ date, highlight, content }) }
            />
        );
    };

    return (
        <View style={EventStyles.section}>
            <Text style={EventStyles.header}>{ header }</Text>
            { renderEvents() }
        </View>
    );

};

export default EventSection;