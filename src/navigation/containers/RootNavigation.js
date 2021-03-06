import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

import HomeScreen from '@features/home/containers';
import EventsScreen from '@features/events/containers';
import EventGalleryScreen from '@features/events/containers/EventGallery';
import RsvpFormScreen from '@features/rsvp/containers/RsvpForm';
import ThankYouScreen from '@features/rsvp/containers/ThankYou';
import OnlineShopScreen from '@features/shop/containers/OnlineShop';
import EntranceScreen from '@features/keyholder/containers/Entrance';
import SignInScreen from '@features/keyholder/containers/SignIn';
import SignUpScreen from '@features/keyholder/containers/SignUp';
import ShopScreen from '@features/shop/containers';
import RsvpPayment from '@features/rsvp/containers/'
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Events: EventsScreen,
        Rsvp: RsvpFormScreen,
        Thanks: ThankYouScreen,
        Entrance: EntranceScreen,
        SignIn: SignInScreen,
        SignUp: SignUpScreen,
        EventGallery: EventGalleryScreen,
        OnlineShop: OnlineShopScreen,
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

export default RootStack;