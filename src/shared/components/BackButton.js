import React from 'react';

import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import SharedStyles from 'src/styles';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={SharedStyles.leftHeaderButton}
            onPress={() => onPress()}
        >
            <View style={SharedStyles.leftHeaderButtonInnerWrapper}>
                <Icon
                    name="angle-double-left"
                    size={SharedStyles.backButtonSize}
                    style={SharedStyles.backButton}
                />
                <Text style={SharedStyles.backButtonText}>back</Text>
            </View>
        </TouchableOpacity>
    )
};

export default BackButton;