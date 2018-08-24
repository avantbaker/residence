import { StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: hp('14%'),
        width: wp('85%'),
        padding: hp('2%'),
        marginBottom: hp('2%'),
        backgroundColor: 'white',
        borderRadius: 14,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    header: {
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'flex-start',
        fontStyle: 'italic',
        fontSize: wp('4.5%')
    },
    section: {
        marginBottom: 24,
        padding: wp('1%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    date: {
        fontSize: hp('1.6%'),
        color: '#6d967d',
        fontWeight: 'bold'
    },
    rsvp: {
        fontSize: hp('1.7%'),
        fontWeight: 'bold'
    },
    buttonContent: {
        fontSize: hp('1.8%'),
        textAlign: 'justify'
    },
    modalWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        height: hp('75%'),
        width: wp('85%'),
        backgroundColor: 'rgba(0,0,0,.8)',
        borderRadius: 24,
        padding: wp('5%'),
        flexDirection: 'column'
    },
    backgroundPalms: {
        position: 'absolute',
        bottom: 0,
        left: -wp('50%'),
        height: hp('70%'),
        width: hp('58%'),
        opacity: .3
    },
    hideModalButton: {
        position: 'relative',
        width: wp('30%'),
        height: wp('9%'),
        backgroundColor: '#6d967d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    hideModalText: {
        color: 'white',
        textAlign: 'center',
    },
    modalImageWrapper: {
        height: hp('25%'),
        width: wp('85%') - wp('10%'),
        marginBottom: wp('3%')
    },
    modalHeader: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: wp('6%'),
        marginBottom: wp('2%')
    },
    modalDate: {
        color: 'white',
        fontSize: wp('3.5%'),
        marginBottom: wp('1%')
    },
    modalTitle: {
        color: 'white',
        fontSize: wp('4.8%'),
        marginBottom: wp('2%')
    },
    modalContentWrapper: {
        flex: 1,
        overflow: 'hidden',
        marginBottom: 15
    },
    modalContent: {
        color: 'white',
        textAlign: 'justify',
        fontSize: wp('3.5%')
    },
    responsiveImg: {
        flex: 1,
        height: undefined,
        width: undefined
    }
});