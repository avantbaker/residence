import React, { Component } from 'react';

// Components
import {
    WebView,
    SafeAreaView,
    Text,
    View
} from 'react-native';

import BackButton from '@shared/components/BackButton';

import OnlineShopStyles from '@features/shop/styles';

type Props = {};

export default class OnlineShop extends Component<Props> {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <WebView
                    automaticallyAdjjustContentInsets={false}
                    source={{ uri: 'https://www.residence-atl.com/shop/'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
                <View style={OnlineShopStyles.backButtonContainer}>
                    <BackButton  />
                </View>
            </SafeAreaView>
        );
    }
}