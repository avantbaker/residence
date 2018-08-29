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

const EventGallery = ({ isVisible, onHideModal }) => {
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
            <View style={EventStyles.modal2}>
                <View style={EventStyles.modalContentWrapper}>
                    <ScrollView contentContainerStyle={EventStyles.modalScrollContainer}>
                        <View style={EventStyles.modalImageWrapper}>
                            <Image
                                style={EventStyles.responsiveImg}
                                source={require('@assets/images/popup_image.jpg')}
                                resizeMode="stretch"
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={EventStyles.directionalButtonContainer}>
                    <TouchableOpacity
                        onPress={() => { onHideModal(!isVisible) }}
                    >
                        <Text style={EventStyles.directionalButtons}>{'<'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { onHideModal(!isVisible) }}
                    >
                        <Text style={EventStyles.directionalButtons}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default EventGallery;