import React, { Component } from 'react';

// Components
import { SafeAreaView } from 'react-navigation';
import {
    Text,
    Image,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';

// Images
const doorUrl = require('@assets/images/green-door.png');

// CMS
import { data } from '@features/events/content/events.json';
import { content } from '@features/rsvp/content/rsvp.json';

// Styles
import RsvpForm from "@features/rsvp/styles";
import SharedStyles from 'src/styles';
import BackButton from "@shared/components/BackButton";

export default class RsvpFormContainer extends Component {
    render() {
        return (
            <SafeAreaView style={RsvpForm.formContainer}>
                <View style={RsvpForm.backgroundWrapper}>
                    <Image
                        style={RsvpForm.door}
                        source={doorUrl}
                    />
                </View>
                <BackButton onPress={this.props.navigation.goBack.bind(this)} />
                <Text style={SharedStyles.header}>rsvp</Text>
                <Text style={RsvpForm.content}>
                    { content }
                </Text>
                <TextInput
                    placeholder="name"
                    style={[RsvpForm.input, RsvpForm.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TextInput
                    placeholder="email"
                    style={[RsvpForm.input, RsvpForm.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TextInput
                    placeholder="phone"
                    style={[RsvpForm.input, RsvpForm.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TextInput
                    placeholder="d.o.b"
                    style={[RsvpForm.input, RsvpForm.placeholder]}
                    placeholderTextColor={'#fff'}
                />
                <TextInput
                    placeholder="industry"
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
