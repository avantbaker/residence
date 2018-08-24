import React from 'react';

import {
    TouchableHighlight,
    Text
} from 'react-native';

import SharedStyles from 'src/styles';

const Button = ({ title, style, onPress, endpoint, underlayColor }) => {
    return (
        <TouchableHighlight
            underlayColor={underlayColor}
            style={[SharedStyles.button, style]}
            onPress={() => onPress(endpoint)}
        >
            <Text style={style ? [SharedStyles.textWhite, SharedStyles.buttonText] :SharedStyles.buttonText}>{title}</Text>
        </TouchableHighlight>
    )
};

export default Button;