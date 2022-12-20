import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../components/ButtonComponent.js';
import {scale} from '../utils/Scaling.js';
import {useDispatch} from 'react-redux';
import {setMobileNumber, switchMode} from '../store/actions';
import {toastr} from '../utils/Toastr.js';

const LoginScreen = props => {
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
    <SafeAreaView style={styles?.mainContainer}>
      <View style={styles?.margins}>
        <View style={styles?.body}>
          <Text style={styles.boldText}>Welcome to the app</Text>
          <Text style={styles.mediumText}>Enter your mobile number</Text>
          <TextInput
            placeholder="Enter your mobile number"
            mode="outlined"
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
          />
          {hasMobileError && <Text style={styles?.error}>{error}</Text>}
          <View
            style={{
              marginTop: scale(20),
            }}>
            <ButtonComponent onPress={handleLogin} name={'Login'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
