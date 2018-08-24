import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';

import {
    Text,
    Image,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';

const yellowShirt = require('@assets/images/yellow-shirt.jpg');

import { data } from '@features/events/content/events.json';
import { content } from '@features/keyholder/content';

import RsvpForm from "@features/rsvp/styles";
import KeyholderStyles from '@features/keyholder/styles';
import SharedStyles from 'src/styles';

export default class SignInContainer extends Component {
    render() {
        return (
            <SafeAreaView style={RsvpForm.formContainer}>
                <View style={RsvpForm.backgroundWrapper}>
                    <Image
                        style={KeyholderStyles.yellowShirt}
                        source={yellowShirt}
                    />
                </View>
                <Text style={SharedStyles.header}>welcome back keyholder</Text>
                <Text style={[SharedStyles.content, RsvpForm.content ]}>
                    { content }
                </Text>
                <TextInput
                    placeholder="username"
                    style={[RsvpForm.input, RsvpForm.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TextInput
                    placeholder="password"
                    style={[RsvpForm.input, RsvpForm.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TouchableOpacity style={RsvpForm.buttonWrapper}>
                    <Text style={RsvpForm.submit}>submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
