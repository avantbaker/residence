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
import EventGallery from "@features/events/containers/EventGalleryModal";
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
            event: null,
            exiting: false
        };

        this.renderEvents = this.renderEvents.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
        this.setModal2Visible = this.setModal2Visible.bind(this);
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
    }

    setModal2Visible(visible) {
        this.setState({
            modal2Visible: visible
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
                onItemPress2={(event) => {
                    this.props.navigation.navigate('EventGallery')
                }}
            />
        );
    }

    render() {
        return (
            <SafeAreaView style={SharedStyles.container}>
                <View style={SharedStyles.headerContainer}>
                    <BackButton onPress={() => {
                        this.setState({ exiting: true });
                        this.props.navigation.goBack()
                    }} />
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