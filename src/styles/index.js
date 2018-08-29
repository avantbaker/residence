import { StyleSheet } from 'react-native';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export const labelSize = wp('4%');
export const caretSize = wp('5%');
export const contentSize = wp('3.4%');
export const headerSize = wp('7%');

export default StyleSheet.create({
    logo: {
        height: hp('12%'),
        width: hp('9%')
    },
    italicize: {
        fontStyle: 'italic'
    },
    // layout
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        paddingTop: hp('7%'),
        height: hp('25%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyContainer: {
        paddingTop: hp('5%'),
        height: hp('75%'),
        width: wp('88%'),
        alignItems: 'center'
    },
    // Content Section
    contentWrapper: {
        paddingTop: hp('3%'),
    },
    header: {
        marginBottom: hp('1%'),
        fontSize: headerSize,
        fontStyle: 'italic'
    },
    contentContainer: {
        width: wp('78%'),
        borderRightWidth: 3,
        borderRightColor: '#ededed',
    },
    content: {
        textAlign: 'justify',
        fontSize: contentSize,
        width: wp('75%'),
        borderRightWidth: 3,
        borderRightColor: 'black',
    },
    // Swipe Text
    swipeText: {
        position: 'absolute',
        bottom: hp('4%'),
        left: hp('4%'),
    },
    upContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    caret: {
        marginLeft: 6,
        fontSize: caretSize
    },
    // label
    label: {
        fontSize: labelSize
    },
    // Buttons
    buttonText: {
        textAlign: 'center',
        fontSize: wp('4%'),
        fontWeight: '600'
    },
    button: {
        margin: hp('4%'),
        height: wp('8%'),
        width: wp('33%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonGreen: {
        backgroundColor: '#6d967d',
    },
    textWhite: {
        color: 'white'
    },
    leftHeaderButton: {
        position: 'absolute',
        left: wp('6%'),
        top: hp('6%'),
    },
    leftHeaderButtonInnerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton: {
        marginRight: wp('1.5%'),
        fontWeight: 'bold'
    },
    backButtonSize: 25,
    backButtonText: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: wp('4%')
    },
    positionBottom: {
        position: 'absolute',
        bottom: 0
    }
});