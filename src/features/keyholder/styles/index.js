import { StyleSheet } from 'react-native';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
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
    contentWrapper: {
        paddingTop: hp('3%'),
    },
    header: {
        marginBottom: hp('1%'),
        fontSize: hp('3%'),
        fontStyle: 'italic'
    },
    content: {
        textAlign: 'justify',
        fontSize: hp('1.75%'),
        width: wp('75%'),
        borderRightWidth: 3,
        borderRightColor: 'black',
    },
    contentContainer: {
        width: wp('78%'),
        borderRightWidth: 3,
        borderRightColor: '#ededed',
    },
    swipeText: {
        position: 'absolute',
        bottom: hp('4%'),
        right: hp('4%'),
        fontStyle: 'italic'
    },
    backgroundImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: hp('45%'),
        width: hp('30%')
    },
    upContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    caret: {
        marginLeft: 6,
        fontSize: hp('2%')
    },
    buttonContainer: {
        height: hp('70%'),
        justifyContent: 'center',
        alignItems: 'center',
        top: -hp('9%')
    },
    key: {
        position: 'absolute',
        height: hp('48%'),
        width: hp('18%'),
        top: hp('6%')
    },
    yellowShirt: {
        position: 'absolute',
        bottom: -hp('3%'),
        right: -hp('2%'),
        height: hp('58%'),
        width: hp('34%')
    },
    shadeGirl: {
        position: 'absolute',
        bottom: -hp('3%'),
        height: hp('60%'),
        width: hp('36%')
    },
    bodyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});