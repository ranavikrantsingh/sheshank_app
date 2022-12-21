import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomDarkModeContainerWithKeyboardAvoiding from '../components/CustomDarkModeContainerWithKeyboardAvoiding';

const EarningsScreen = () => {
  return (
    <CustomDarkModeContainerWithKeyboardAvoiding>
      <View>
        <Text>Earnings Screen</Text>
      </View>
    </CustomDarkModeContainerWithKeyboardAvoiding>
  );
};

export default EarningsScreen;

const styles = StyleSheet.create({});
