import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomDarkModeContainerWithKeyboardAvoiding from '../components/CustomDarkModeContainerWithKeyboardAvoiding';
import LottieView from 'lottie-react-native';
const EarningsScreen = () => {
  return (
    <CustomDarkModeContainerWithKeyboardAvoiding>
      <View style={styles?.center}>
        <LottieView
          source={require('../assets/animations/Meetings.json')}
          autoPlay
          loop
          style={styles?.lottie}
        />
      </View>
    </CustomDarkModeContainerWithKeyboardAvoiding>
  );
};

export default EarningsScreen;

const styles = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  center: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
