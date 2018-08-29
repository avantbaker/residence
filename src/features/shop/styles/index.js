import { StyleSheet } from 'react-native';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    palm1: {
        position: 'absolute',
        left: -wp('27%'),
        bottom: 0,
        height: hp('57%'),
        width: hp('37%')
    },
    palm2: {
        position: 'absolute',
        right: -hp('28%'),
        bottom: -10,
        height: hp('95%'),
        width: hp('50%')
    },
    backButtonContainer: {

    }
});