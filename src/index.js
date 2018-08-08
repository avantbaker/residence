import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
// import AppWithNavigationState from './navigation/index';
// import store from './reducers/root';
// import SplashScreen from 'react-native-splash-screen';

// TODO: Create Navigation index
// TODO: Create root reducer
// TODO: Create Splash Screen

type Props = {};

export default class App extends Component<Props> {
    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
