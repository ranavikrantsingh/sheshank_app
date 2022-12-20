import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
const OtpScreen = (props) => {
  return (
    <View>
      <Text>OtpScreen</Text>
        <ButtonComponent
        onPress={() => props?.navigation.navigate('HomeScreen')}
        />
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
