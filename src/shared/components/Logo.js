import React from 'react';

import {
    Image
} from 'react-native';

const logoUrl = require('../../assets/images/logo.png');

import SharedStyles from '../../styles';

const Logo = (props) => {
    return (
        <Image
            style={SharedStyles.logo}
            source={logoUrl}
        />
    )
};

export default Logo;