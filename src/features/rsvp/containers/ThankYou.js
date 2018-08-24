import React from 'react';

// Components
import {
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

// Images
const mazeUrl = require('@assets/images/maze-2.png');
const logoUrl = require('@assets/images/logo.png');

// Styles
import ThankYouStyles from '@features/rsvp/styles';
import GlobalStyles from 'src/styles';

const ThankYou = () => {
    return (
        <SafeAreaView style={ThankYouStyles.container}>
            <Image
                style={ThankYouStyles.mazeRight}
                source={mazeUrl}
            />
            <Image
                style={ThankYouStyles.mazeLeft}
                source={mazeUrl}
            />
            <Image
                style={[GlobalStyles.logo, ThankYouStyles.logo ]}
                source={logoUrl}
            />
            <Text style={ThankYouStyles.headline}>thanks for your</Text>
            <Text style={ThankYouStyles.headline}>submission!</Text>
            <TouchableOpacity style={[GlobalStyles.button, ThankYouStyles.button ]}>
                <Text>home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ThankYou;