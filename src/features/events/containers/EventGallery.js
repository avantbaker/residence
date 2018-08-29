import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';

import BackButton from '@shared/components/BackButton';

const logoUrl = require('src/assets/images/logo.png');
const backgroundUrl = require('src/assets/images/palm.png');

import {
    FlatList,
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

import EventSection from "../components/EventSection";
import EventModal from "src/features/events/containers/EventModal";
import EventGalleryModal from "@features/events/containers/EventGalleryModal";
import Logo from '@shared/components/Logo';

import EventStyles from '../styles';
import SharedStyles from 'src/styles';

import { gallery } from '../content/events.json';
import { content } from 'src/features/welcome/content/welcome.json';

type Props = {};

export default class EventGallery extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            event: null,
            exiting: false
        };

        this.renderEvents = this.renderEvents.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);

    }

    keyExtractor = (item, index) => index;

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
    }

    renderEvents({ index }) {
        return (
            <TouchableOpacity onPress={this.setModalVisible}>
                <View style={index % 2 ? [EventStyles.pictureWrapper, EventStyles.imageRight ]: [EventStyles.pictureWrapper, EventStyles.imageLeft ]}>
                    <Image
                        style={EventStyles.responsiveImg}
                        source={require('@assets/images/popup_image.jpg')}
                        resizeMode="stretch"
                    />
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <SafeAreaView style={SharedStyles.container}>
                <View style={SharedStyles.headerContainer}>
                    <BackButton
                        onPress={() => {
                            this.props.navigation.goBack();
                            this.setState({ exiting: true })
                        }}
                    />
                    <Logo />
                </View>
                {
                    !this.state.exiting &&
                    <Image
                        style={EventStyles.backgroundPalms}
                        source={backgroundUrl}
                    />
                }
                <View style={SharedStyles.bodyContainer}>
                    <View style={EventStyles.headerWrapper}>
                        <Text style={[{ textAlign: 'center', marginBottom: 6, fontStyle: 'italic', fontSize: 16, fontWeight: 'bold' }]}>temporary residence pop up 1</Text>
                        <Text style={{ textAlign: 'center', color: '#6d967d', fontWeight: 'bold' }}>05/04/2018</Text>
                    </View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                        numColumns={2}
                        keyExtractor={this.keyExtractor}
                        data={gallery}
                        renderItem={this.renderEvents}
                    />
                </View>
                <EventGalleryModal
                    isVisible={this.state.modalVisible}
                    onHideModal={this.setModalVisible}
                />
            </SafeAreaView>
        );
    }
}