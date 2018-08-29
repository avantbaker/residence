import { Dimensions } from 'react-native';

let layout = {
    get visibleHeight() {
        return Dimensions.get('window').height
    }
};

module.exports = layout;