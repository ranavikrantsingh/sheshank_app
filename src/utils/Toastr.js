import {ToastAndroid as Toast, Platform} from 'react-native';

export const toastr = {
  showToast: message => {
    if (Platform.OS === 'android') {
      Toast.show(message, Toast.SHORT);
    } else {
      alert(message);
    }
  },
};
