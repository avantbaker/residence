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
        padding: 16,
        marginBottom: 15,
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
        fontSize: 19
    },
    eventsContainer: {
        height: hp('80%'),
        width: wp('87%'),
        paddingTop: 20,
    },
    logoWrapper: {
        paddingTop: hp('2%'),
        height: hp('20%'),
        width: wp('70%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: hp('11%'),
        width: hp('8%')
    },
    section: {
        marginBottom: 24,
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        height: hp('65%'),
        width: wp('85%'),
        backgroundColor: 'rgba(0,0,0,.8)',
        borderRadius: 24,
        padding: 20,
        top: 40
    },
    backgroundPalms: {
        position: 'absolute',
        bottom: 0,
        left: -(wp('55%')),
        height: hp('75%'),
        width: wp('140%'),
        opacity: .3
    }
});