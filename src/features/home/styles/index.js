import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoWrapper: {
        marginBottom: 30,
        bottom: 24
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
});