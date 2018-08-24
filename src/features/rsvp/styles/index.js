import { StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import {
    contentSize
} from "src/styles";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mazeRight: {
        position: 'absolute',
        height: hp('45%'),
        width: hp('45%'),
        right: -wp('36%'),
        top: -hp('6%'),
        opacity: .1
    },
    mazeLeft: {
        position: 'absolute',
        height: hp('55%'),
        width: hp('45%'),
        left: -wp('50%'),
        bottom: -hp('12%'),
        opacity: .1
    },
    logo: {
        marginBottom: hp('3%')
    },
    headline: {
        fontSize: hp('2.2%'),
        fontStyle: 'italic'
    },
    button: {
        marginTop: hp('12%'),
        paddingLeft: wp('8%'),
        paddingRight: wp('8%')
    },
    formContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: hp('10%'),
        paddingBottom: hp('8%'),
        paddingLeft: wp('8%'),
        paddingRight: wp('8%'),
    },
    header: {
        marginBottom: hp('2%'),
        fontSize: hp('2.8%'),
        fontStyle: 'italic'
    },
    content: {
        marginBottom: hp('4%'),
        width: wp('70%'),
        textAlign: 'justify',
        fontSize: contentSize,
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: wp('80%'),
        marginBottom: hp('3%'),
        borderRadius: 12,
    },
    placeholder: {
        paddingTop: hp('.8%'),
        paddingLeft: hp('1%'),
        paddingBottom: hp('3.6%'),
        fontSize: hp('2.185%'),
        fontStyle: 'italic'
    },
    submit: {
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%'),
        paddingLeft: hp('3.5%'),
        paddingRight: hp('3.5%'),
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        fontStyle: 'italic',
        fontSize: hp('2.185%')
    },
    backgroundWrapper: {
        position: 'absolute',
        height: hp('100%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        marginTop: hp('1%')
    },
    door: {
        top: hp('2%'),
        left: wp('1%'),
        height: hp('48%'),
        width: hp('24%')
    }
});