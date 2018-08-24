import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import SharedStyles from 'src/styles';

const SwipeIndicator = ({ direction, icon, style }) => {
    return (
        <View style={style || SharedStyles.swipeText}>
            <Text style={SharedStyles.label}>Swipe</Text>
            <View style={SharedStyles.upContainer}>
                <Text style={SharedStyles.label}>{direction}</Text>
                <Text style={SharedStyles.caret}>{icon}</Text>
            </View>
        </View>
    );
};

SwipeIndicator.defaultProps = {
    direction: 'Up',
    icon: '^'
};

export default SwipeIndicator;