import {StyleSheet, Text, SafeAreaView,View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../components/ButtonComponent.js';
import {scale} from '../utils/Scaling.js';
import {toastr} from '../utils/Toastr.js';
import { setIsAuthenticated } from '../store/actions.js';
import { useDispatch } from 'react-redux';
const OtpScreen = (props) => {
  const dispatch = useDispatch();
  const {mobile} = props.route.params;
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [hasOtpError, sethasOtpError] = useState(false);

  const handleValidationforOtp = (data) => {  
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
      dispatch(setIsAuthenticated(true));

    } else {
      toastr.showToast('Please enter valid OTP');
    }
  };

  

  return (
    <SafeAreaView style={styles?.mainContainer}>
      <View style={styles?.margins}>
        <View style={styles?.body}>
          <Text style={styles.boldText}>Enter OTP</Text>
          <Text style={styles.mediumText}>Enter the OTP sent to your mobile {mobile}</Text>
          <TextInput
            placeholder="Enter OTP"
            mode="outlined"
            keyboardType="number-pad"
            value={otp}
            maxLength={6}
            onChangeText={(text) => {
              setOtp(text);
              setError('');
              sethasOtpError(false);
            }}
            error={hasOtpError}
          />
          <Text style={styles.error}>{error}</Text>
          <ButtonComponent
            name="Verify"
            onPress={handleOtp}
          />
        </View>
      </View>
    </SafeAreaView>
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
