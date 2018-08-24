import { StyleSheet } from 'react-native';

import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: hp('4%')
    },
    logoWrapper: {
        marginTop: hp('3%')
    },
    swipeText: {
        position: 'absolute',
        bottom: hp('4%'),
        left: hp('4%'),
    },
    backgroundImage: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: hp('45%'),
        width: hp('30%')
    },
    upContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    caret: {
        marginLeft: 6
    }
});