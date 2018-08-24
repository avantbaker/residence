import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

import Welcome from '@features/welcome/containers';
import HomeScreen from '@features/home/containers';
import EventsScreen from '@features/events/containers';
import RsvpFormScreen from '@features/rsvp/containers/RsvpForm';
import ThankYouScreen from '@features/rsvp/containers/ThankYou';
import ProfileScreen from '@features/keyholder/containers';
import EntranceScreen from '@features/keyholder/containers/Entrance';
import SignInScreen from '@features/keyholder/containers/SignIn';
import SignUpScreen from '@features/keyholder/containers/SignUp';
import ShopScreen from '@features/shop/containers';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Events: EventsScreen,
        Rsvp: RsvpFormScreen,
        Thanks: ThankYouScreen,
        KeyHolder: ProfileScreen,
        Entrance: EntranceScreen,
        SignIn: SignInScreen,
        SignUp: SignUpScreen,
        Shop: ShopScreen
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);
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
            <RootStack />
        );
    }
}
