import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import EventButton from './EventButton';

import EventStyles from '../styles';

const EventSection = ({ events, header, onItemPress, onItemPress2 }) => {

    const renderEvents = () => {
        return events.map(({ date, highlight, content, isPast }) =>
            <EventButton
                date={date}
                highlight={highlight}
                content={content}
                onPress={() => isPast ? onItemPress2() : onItemPress({ date, highlight, content })}
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