import React from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import SharedStyles from 'src/styles';

const SwipeIndicator = ({ direction, icon, style, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style || SharedStyles.swipeText}
        >
            <Text style={SharedStyles.label}>Swipe</Text>
            <View style={SharedStyles.upContainer}>
                <Text style={SharedStyles.label}>{direction}</Text>
                <Text style={SharedStyles.caret}>{icon}</Text>
            </View>
        </TouchableOpacity>
    );
};

SwipeIndicator.defaultProps = {
    direction: 'Up',
    icon: '^'
};

export default SwipeIndicator;