import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';

import {
    Text,
    Image,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';

const shadeGirl = require('@assets/images/girl-with-shades.jpg');

import { data } from '@features/events/content/events.json';
import { content } from '@features/keyholder/content';

import RsvpStyles from "@features/rsvp/styles";
import KeyholderStyles from '@features/keyholder/styles';
import SharedStyles from 'src/styles';

export default class SignUpContainer extends Component {
    render() {
        return (
            <SafeAreaView style={RsvpStyles.formContainer}>
                <View style={RsvpStyles.backgroundWrapper}>
                    <Image
                        style={KeyholderStyles.shadeGirl}
                        source={shadeGirl}
                    />
                </View>
                <Text style={SharedStyles.header}>becoming a keyholder</Text>
                <Text style={[SharedStyles.content, RsvpStyles.content]}>
                    { content }
                </Text>
                <TextInput
                    placeholder="name"
                    style={[RsvpStyles.input, RsvpStyles.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TextInput
                    placeholder="email"
                    style={[RsvpStyles.input, RsvpStyles.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TextInput
                    placeholder="phone"
                    style={[RsvpStyles.input, RsvpStyles.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TextInput
                    placeholder="d.o.b"
                    style={[RsvpStyles.input, RsvpStyles.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TextInput
                    placeholder="industry"
                    style={[RsvpStyles.input, RsvpStyles.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TouchableOpacity style={RsvpStyles.buttonWrapper}>
                    <Text style={RsvpStyles.submit}>submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
