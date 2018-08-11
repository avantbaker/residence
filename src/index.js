import React, { Component } from 'react';
import Welcome from './features/welcome/containers';
import Home from './features/home/containers';
import Events from './features/events/containers';

// import AppWithNavigationState from './navigation/index';
// import store from './reducers/root';
// import SplashScreen from 'react-native-splash-screen';

// TODO: Create Navigation index
// TODO: Create root reducer
// TODO: Create Splash Screen

type Props = {};

export default class App extends Component<Props> {
    render() {
        return (
            <Events />
        );
    }
}
