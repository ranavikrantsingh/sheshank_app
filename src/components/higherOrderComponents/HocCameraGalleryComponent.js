import React, {useState} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
export default WrappedComponent => {
  const HocCameraGalleryComponent = ({...props}) => {
    const [details, setdetails] = useState('');
    const requestPermissionForCamera = async () => {
      if (Platform.OS === 'ios') {
        openCameraNew();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'App Camera Permission',
              message: 'App needs access to your camera ',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission given');
            openCameraNew();
          } else {
            console.log('Camera permission denied');
            Alert.alert(
              'Camera Permission denied!',
              'App needs access to your camera please enable the permissions for camera!',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => Linking.openSettings()},
              ],
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    const requestPermissionForGallery = async () => {
      if (Platform.OS === 'ios') {
        openGallery();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'App Gallery Permission',
              message: 'App needs access to your Gallery ',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Gallery permission given');
            openGallery();
          } else {
            console.log('Gallery permission denied');
            Alert.alert(
              'Gallery Permission denied!',
              'App needs access to your Gallery please enable the permissions for Gallery!',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => Linking.openSettings()},
              ],
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    const openCameraNew = () => {
      let options = {
        width: 300,
        height: 400,
        useFrontCamera: true,
        cropping: true,
        compressImageQuality: 0.6,
      };
      ImagePicker.openCamera(options).then(image => {
        updateImage('image', image);
      });
    };
    const openGallery = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        useFrontCamera: true,
        cropping: true,
        compressImageQuality: 0.6,
      }).then(image => {
        updateImage('image', image);
      });
    };
    const updateImage = (field, value) => {
      let localImage = {...details};
      localImage[field] = value;
      setdetails(localImage);
    };

    return (
      <WrappedComponent
        {...props}
        camera={requestPermissionForCamera}
        gallery={requestPermissionForGallery}
        imageObject={details}
      />
    );
  };

  return HocCameraGalleryComponent;
};
