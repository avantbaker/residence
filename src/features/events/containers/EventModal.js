import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import Modal from 'react-native-modal';

// Data
import { data } from '../content/events.json';
import { content } from '@features/welcome/content/welcome.json';

// Styles
import EventStyles from '../styles';

const EventModal = ({ isVisible, onHideModal }) => {
    return (
        <Modal
            animationType="slide"
            animationInTiming={800}
            animationOutTiming={800}
            onBackdropPress={() => { onHideModal(!isVisible) }}
            backdropOpacity={0}
            backdropTransitionInTiming={0}
            isVisible={isVisible}
            style={EventStyles.modalWrapper}
        >
            <View style={EventStyles.modal}>
                <View style={EventStyles.modalContentWrapper}>
                    <Text style={EventStyles.modalHeader}>
                        Modern Resi
                    </Text>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={EventStyles.modalImageWrapper}>
                            <Image
                                style={EventStyles.responsiveImg}
                                source={require('@assets/images/popup_image.jpg')}
                                resizeMode="stretch"
                            />
                        </View>
                        <Text style={EventStyles.modalDate}>
                            10/4/2018
                        </Text>
                        <Text style={EventStyles.modalTitle}>
                            Modern Atlanta
                        </Text>
                        <Text style={EventStyles.modalContent}>
                            {content}
                        </Text>
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={EventStyles.hideModalButton}
                        onPress={() => { onHideModal(!isVisible) }}
                    >
                        <Text style={EventStyles.hideModalText}>rsvp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default EventModal;