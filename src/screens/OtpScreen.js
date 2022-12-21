import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../components/ButtonComponent.js';
import {scale} from '../utils/Scaling.js';
import {toastr} from '../utils/Toastr.js';
import {setIsAuthenticated} from '../store/actions.js';
import {useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';
import ModalPopup from '../components/ModalPopup.js';
import CustomDarkModeContainerWithKeyboardAvoiding from '../components/CustomDarkModeContainerWithKeyboardAvoiding.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
const OtpScreen = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const {mobile} = props.route.params;
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [hasOtpError, sethasOtpError] = useState(false);
  const [showModal, setshowModal] = useState(false);
  var replaced = mobile.replace(/^(.{2}).*(.{3}).*(.{4})$/, `$1****$3`);

  const handleValidationforOtp = data => {
    let formIsValid = true;
    if (!data?.otp) {
      formIsValid = false;
      setError('OTP is Required');
      sethasOtpError(true);
    }
    if (typeof data.otp !== 'undefined') {
      if (!data.otp.match(/^[0-9]{6}$/)) {
        formIsValid = false;
        setError('OTP is Required');
        sethasOtpError(true);
      }
    }

    return {
      isValid: formIsValid,
    };
  };

  const handleOtp = () => {
    let data = {
      otp: otp,
    };
    let isValid = handleValidationforOtp(data);
    if (isValid.isValid) {
      setshowModal(true);

      setTimeout(() => {
        setshowModal(false);

        dispatch(setIsAuthenticated(true));
      }, 2000);
    } else {
      toastr.showToast('Please enter valid OTP');
    }
  };

  return (
    <CustomDarkModeContainerWithKeyboardAvoiding>
      <View style={styles?.margins}>
        <View style={styles?.body}>
          <LottieView
            source={require('../assets/animations/catNoir.json')}
            autoPlay
            loop={false}
            style={{height: scale(100), width: scale(100)}}
          />
          <Text
            style={[styles.boldText, {color: isDarkMode ? '#fff' : '#000'}]}>
            Enter OTP
          </Text>
          <Text
            style={[styles.mediumText, {color: isDarkMode ? '#fff' : '#000'}]}>
            Enter the OTP sent to your mobile {replaced}
          </Text>
          <TextInput
            placeholder="Enter OTP"
            placeholderTextColor={isDarkMode ? '#f2f2f2' : '#000'}
            secureTextEntry={secureTextEntry}
            mode="outlined"
            keyboardType="number-pad"
            value={otp}
            maxLength={6}
            style={{backgroundColor: 'transparent'}}
            onChangeText={text => {
              setOtp(text);
              setError('');
              sethasOtpError(false);
            }}
            right={
              <TextInput.Icon
                name={() => (
                  <TouchableOpacity>
                    <View>
                      {secureTextEntry ? (
                        <Text
                          style={{
                            fontSize: scale(15),
                            color: isDarkMode ? '#f2f2f2' : '#000',
                          }}>
                          Show
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: scale(15),
                            color: isDarkMode ? '#f2f2f2' : '#000',
                          }}>
                          Hide
                        </Text>
                      )}
                    </View>
                  </TouchableOpacity>
                )}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            }
            error={hasOtpError}
            textColor={isDarkMode ? '#f2f2f2' : '#000'}
            theme={{
              colors: {
                text: isDarkMode ? '#f2f2f2' : '#000',
                background: 'transparent',
              },
            }}
          />
          <Text style={styles.error}>{error}</Text>
          <ButtonComponent name="Verify" onPress={handleOtp} />
        </View>
        {showModal && (
          <ModalPopup
            activeTab={2}
            modalVisible={showModal}
            setModalVisible={setshowModal}
          />
        )}
      </View>
    </CustomDarkModeContainerWithKeyboardAvoiding>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  margins: {
    marginHorizontal: scale(20),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    marginTop: '40%',
  },
  error: {
    color: 'red',
    fontSize: scale(12),
    marginVertical: scale(5),
  },
  boldText: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginVertical: scale(5),
  },
  mediumText: {
    fontSize: scale(13),
    fontWeight: 'normal',
    marginVertical: scale(2),
  },
});
