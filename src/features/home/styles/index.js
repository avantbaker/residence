import { StyleSheet } from 'react-native';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 25,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 12,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    signIn: {
      backgroundColor: '#6d967d'
    },
    buttonText: {
      textAlign: 'center'
    },
    logo: {
        height: 100,
        width: 100,
        backgroundColor: 'black',
        marginTop: 40
    },
    buttonContainer: {
        height: hp('70%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoWrapper: {
        paddingTop: hp('2%'),
        height: hp('30%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    peachDoor: {
        position: 'absolute',
        height: hp('73%'),
        width: hp('40%'),
        right: -wp('45%'),
        bottom: -hp('10%')
    },
    pinkDoor: {
        position: 'absolute',
        height: hp('65%'),
        width: hp('30%'),
        left: -wp('34%'),
        bottom: -hp('18%')
    }
});