import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';

import BackButton from '@shared/components/BackButton';

const logoUrl = require('src/assets/images/logo.png');
const backgroundUrl = require('src/assets/images/palm.png');

import {
    FlatList,
    View,
    Image
} from 'react-native';

import EventSection from "../components/EventSection";
import EventModal from "src/features/events/containers/EventModal";
import Logo from '@shared/components/Logo';

import EventStyles from '../styles';
import SharedStyles from 'src/styles';

import { data } from '../content/events.json';
import { content } from 'src/features/welcome/content/welcome.json';

type Props = {};

export default class EventContainer extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            event: null
        };

        this.renderEvents = this.renderEvents.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);

    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
    }

    renderEvents({ item: { events, header } }) {
        return (
            <EventSection
                header={header}
                events={events}
                onItemPress={(event) => {
                    this.setState({
                        modalVisible: true,
                        content: event
                    });
                }}
            />
        );
    }

    render() {
        return (
            <SafeAreaView style={SharedStyles.container}>
                <View style={SharedStyles.headerContainer}>
                    <BackButton onPress={this.props.navigation.goBack.bind(this)} />
                    <Logo />
                </View>
                <Image
                    style={EventStyles.backgroundPalms}
                    source={backgroundUrl}
                />
                <View style={SharedStyles.bodyContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={this.renderEvents}
                    />
                </View>
                <EventModal
                    isVisible={this.state.modalVisible}
                    onHideModal={this.setModalVisible}
                />
            </SafeAreaView>
        );
    }
}