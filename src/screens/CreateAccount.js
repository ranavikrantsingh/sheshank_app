import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../utils/Scaling';
import ButtonComponent from '../components/ButtonComponent';
import {TextInput} from 'react-native-paper';
import CustomDarkModeContainerWithKeyboardAvoiding from '../components/CustomDarkModeContainerWithKeyboardAvoiding';
const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [hasFirstNameError, sethasFirstNameError] = useState(false);
  const [lastName, setLastName] = useState('');
  const [hasLastNameError, sethasLastNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [hasEmailError, sethasEmailError] = useState(false);
  const [error, setError] = useState('');

  const handleValidationforLogin = data => {
    let formIsValid = true;
    if (!data?.firstName) {
      formIsValid = false;
      setError('First Name is Required');
      sethasFirstNameError(true);
    }
    if (!data?.lastName) {
      formIsValid = false;
      setError('Last Name is Required');
      sethasLastNameError(true);
    }
    if (!data?.email) {
      formIsValid = false;
      setError('Email is Required');
      sethasEmailError(true);
    }
    if (typeof data.email !== 'undefined') {
      let lastAtPos = data.email.lastIndexOf('@');
      let lastDotPos = data.email.lastIndexOf('.');
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          data.email.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          data.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        setError('Email is Required');
        sethasEmailError(true);
      }
    }
    return {
      isValid: formIsValid,
    };
  };

// Regex for email validation
// const handleValidationforLogin = data => {
//     const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         let formIsValid = true;
//         if (!data?.firstName) {
//           formIsValid = false;
//           setError('First Name is Required');
//           sethasFirstNameError(true);
//         }
//         if (!data?.lastName) {
//           formIsValid = false;
//           setError('Last Name is Required');
//           sethasLastNameError(true);
//         }
//         if (!data?.email) {
//             formIsValid = false;
//             setError('Email is Required');
//             sethasEmailError(true);
//             }
//         if (typeof data.email !== 'undefined') {
//             if (!data.email.match(regexEmail)) {
//                 formIsValid = false;
//                 setError('Email is Required');
//                 sethasEmailError(true);
//             }
//         }
//         return {
//           isValid: formIsValid,
//         };
//       };
  const handleCreateAccount = () => {
    let data = {
      firstName,
      lastName,
      email,
    };
    let isValid = handleValidationforLogin(data);
    if (isValid.isValid) {
      console.log('Valid');
    } else {
      console.log('Invalid');
    }
  };

  return (
    <CustomDarkModeContainerWithKeyboardAvoiding>
      <View style={styles?.margins}>
        <ScrollView>
          <TextInput
            label="First Name"
            mode="outlined"
            style={styles?.input}
            placeholder="Enter your first name"
            placeholderTextColor="#000"
            onChangeText={text => setFirstName(text)}
            value={firstName}
            error={hasFirstNameError}
            onBlur={() => {
              if (firstName?.length > 0) {
                sethasFirstNameError(false);
                setError('');
              } else {
                sethasFirstNameError(true);
                setError('First Name is Required');
                return false;
              }
            }}
            onSubmitEditing={() => {
              if (firstName?.length > 0) {
                sethasFirstNameError(false);
                return true;
              } else {
                sethasFirstNameError(true);
                setError('First Name is Required');
                return false;
              }
            }}
          />
          {hasFirstNameError && <Text style={styles?.error}>{error}</Text>}
          <TextInput
            label="Last Name"
            mode="outlined"
            style={styles?.input}
            placeholder="Enter your last name"
            placeholderTextColor="#000"
            onChangeText={text => setLastName(text)}
            value={lastName}
            error={hasLastNameError}
            onBlur={() => {
              if (lastName?.length > 0) {
                sethasLastNameError(false);
                setError('');
              } else {
                sethasLastNameError(true);
                setError('Last Name is Required');
                return false;
              }
            }}
            onSubmitEditing={() => {
              if (lastName?.length > 0) {
                sethasLastNameError(false);
                return true;
              } else {
                sethasLastNameError(true);
                setError('Last Name is Required');
                return false;
              }
            }}
          />
          {hasLastNameError && <Text style={styles?.error}>{error}</Text>}
          <TextInput
            label="Email"
            mode="outlined"
            style={styles?.input}
            placeholder="Enter your email"
            placeholderTextColor="#000"
            onChangeText={text => setEmail(text)}
            value={email}
            error={hasEmailError}
            onBlur={() => {
              if (email?.length > 0) {
                sethasEmailError(false);
                setError('');
              } else {
                sethasEmailError(true);
                setError('Email is Required');
                return false;
              }
            }}
            onSubmitEditing={() => {
              if (email?.length > 0) {
                sethasEmailError(false);
                return true;
              } else {
                sethasEmailError(true);
                setError('Email is Required');
                return false;
              }
            }}
          />
          {hasEmailError && <Text style={styles?.error}>{error}</Text>}
        </ScrollView>
        <ButtonComponent
          onPress={handleCreateAccount}
          name={'Create Account'}
        />
      </View>
    </CustomDarkModeContainerWithKeyboardAvoiding>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  margins: {
    marginHorizontal: scale(20),
  },
  body: {
    marginTop: '40%',
  },
  error: {
    color: 'red',
    fontSize: scale(12),
    marginVertical: scale(5),
  },
  input: {
    marginVertical: scale(10),
  },
});
