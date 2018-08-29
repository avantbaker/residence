import React from 'react';

import {
    TouchableHighlight,
    Text
} from 'react-native';

import SharedStyles from 'src/styles';

const Button = ({ title, containerStyle, textStyle, onPress, endpoint, underlayColor }) => {
    return (
        <TouchableHighlight
            underlayColor={underlayColor}
            style={[SharedStyles.button, containerStyle]}
            onPress={() => onPress(endpoint)}
        >
            <Text style={textStyle ? [SharedStyles.textWhite, SharedStyles.buttonText, textStyle] : SharedStyles.buttonText}>{title}</Text>
        </TouchableHighlight>
    )
};

export default Button;