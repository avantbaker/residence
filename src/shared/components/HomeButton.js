import React from 'react';

import {
    View,
    TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import SharedStyles from 'src/styles';

const HomeButton = ({ onPress }) => {
    return (
        <TouchableHighlight
            style={SharedStyles.leftHeaderButton}
            onPress={() => onPress()}
        >
            <View style={SharedStyles.leftHeaderButtonInnerWrapper}>
                <Icon
                    name="bars"
                    size={SharedStyles.backButtonSize}
                    style={SharedStyles.backButton}
                />
            </View>
        </TouchableHighlight>
    )
};

export default HomeButton;