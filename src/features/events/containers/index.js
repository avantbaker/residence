import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';

const logoUrl = require('src/assets/images/logo.png');
const backgroundUrl = require('src/assets/images/palm.png');

import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import Modal from 'react-native-modal';

import EventSection from "../components/EventSection";

import EventStyles from '../styles';
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
            <SafeAreaView style={EventStyles.container}>
                <Image
                    style={EventStyles.backgroundPalms}
                    source={backgroundUrl}
                />
                <View style={EventStyles.logoWrapper}>
                    <Image
                        style={EventStyles.logo}
                        source={logoUrl}
                    />
                </View>
                <FlatList
                    style={EventStyles.eventsContainer}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderEvents}
                />
                <Modal
                    animationType="slide"
                    animationInTiming={800}
                    animationOutTiming={800}
                    backdropOpacity={0}
                    backdropTransitionInTiming={0}
                    isVisible={this.state.modalVisible}
                    style={EventStyles.modalWrapper}
                >
                    <View style={EventStyles.modal}>
                        <View>
                            <Text style={{
                                color: 'white',
                                fontStyle: 'italic',
                                fontSize: 20
                            }}>
                                Modern Resi
                            </Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 12
                            }}>
                                10/4/2018
                            </Text>
                            <Text style={{
                                color: 'white',
                                fontStyle: 'italic',
                                fontSize: 14
                            }}>
                                Modern Atlanta
                            </Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 12
                            }}>
                                {content}
                            </Text>
                            <TouchableOpacity
                                onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
                            >
                                <Text style={{ color: 'white', padding: 20, backgroundColor: 'green', textAlign: 'center' }}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </SafeAreaView>
        );
    }
}