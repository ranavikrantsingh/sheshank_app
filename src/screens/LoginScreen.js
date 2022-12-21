import {StyleSheet, View, Text, useColorScheme, Platform} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../components/ButtonComponent.js';
import {scale} from '../utils/Scaling.js';
import {useDispatch} from 'react-redux';
import {setMobileNumber} from '../store/actions';
import {toastr} from '../utils/Toastr.js';
import Colors from '../constants/Colors.js';
import LottieView from 'lottie-react-native';
import CustomDarkModeContainerWithKeyboardAvoiding from '../components/CustomDarkModeContainerWithKeyboardAvoiding.js';
const LoginScreen = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useDispatch();
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [hasMobileError, sethasMobileError] = useState(false);

  const handleValidationforLogin = data => {
    let formIsValid = true;
    if (!data?.phoneNumber) {
      formIsValid = false;
      setError('Mobile Number is Required');
      sethasMobileError(true);
    }
    if (typeof data.phoneNumber !== 'undefined') {
      if (!data.phoneNumber.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        setError('Mobile Number is Required');
        sethasMobileError(true);
      }
    }

    return {
      isValid: formIsValid,
    };
  };

  const handleLogin = () => {
    let data = {
      phoneNumber: mobile,
    };
    let isValid = handleValidationforLogin(data);
    if (isValid.isValid) {
      dispatch(setMobileNumber(mobile));
      props.navigation.navigate({
        name: 'OtpScreen',
        params: {mobile},
      });
    } else {
      toastr.showToast('Please enter valid mobile number');
    }
  };

  return (
    <CustomDarkModeContainerWithKeyboardAvoiding>
      <View style={styles?.margins}>
        <View style={styles?.body}>
          <LottieView
            source={require('../assets/animations/mail.json')}
            autoPlay
            loop
            style={{
              width: scale(100),
              height: scale(100),
              alignSelf: 'center',
            }}
          />
          <Text
            style={[styles.boldText, {color: isDarkMode ? '#f2f2f2' : '#000'}]}>
            Welcome to the app
          </Text>
          <Text
            style={[
              styles.mediumText,
              {color: isDarkMode ? '#f2f2f2' : '#6d6d6d'},
            ]}>
            Enter your mobile number
          </Text>
          <TextInput
            placeholder="Enter your mobile number"
            placeholderTextColor={ isDarkMode ? '#f2f2f2' : '#000'}
            mode="outlined"
            style={{backgroundColor: 'transparent'}}
            keyboardType="number-pad"
            value={mobile}
            maxLength={10}
            error={hasMobileError}
            onChangeText={text => {
              setMobile(text);
              if (text?.length === 10) {
                sethasMobileError(false);
                setError('');
              }
            }}
            onBlur={() => {
              if (mobile?.length === 10) {
                sethasMobileError(false);
                return true;
              } else {
                sethasMobileError(true);
                setError('Mobile Number is Required');
                return false;
              }
            }}
            onSubmitEditing={() => {
              if (mobile?.length === 10) {
                sethasMobileError(false);
                return true;
              } else {
                sethasMobileError(true);
                setError('Mobile Number is Required');
                return false;
              }
            }}
            textColor={ isDarkMode ? '#f2f2f2' : '#000'}
            theme={{
              colors: {
                text: isDarkMode ? '#f2f2f2' : '#000',
                background: 'transparent',
              },
            }}
            


          />
          {hasMobileError && <Text style={styles?.error}>{error}</Text>}
          <View
            style={{
              marginTop: scale(20),
            }}>
            <ButtonComponent onPress={handleLogin} name={'Login'} />
          </View>
          <View
            style={{
              marginTop: scale(20),
            }}>
            <ButtonComponent
              onPress={() => {
                props.navigation.navigate({
                  name: 'CreateAccount',
                });
              }}
              name={'Sign Up'}
              buttonStyle={styles?.signUpButton}
              textStyle={styles?.singupButtonText}
            />
          </View>
        </View>
      </View>
    </CustomDarkModeContainerWithKeyboardAvoiding>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  margins: {
    marginHorizontal: scale(20),
  },
  mainContainer: {
    flex: 1,
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
  signUpButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  singupButtonText: {
    color: '#000',
  },
});
