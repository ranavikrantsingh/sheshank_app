import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {scale} from '../utils/Scaling';
const Preloader = () => {
  return (
    <View style={styles?.center}>
      <LottieView
        source={require('../assets/animations/Preloader.json')}
        autoPlay
        loop
        style={styles?.lottie}
      />
    </View>
  );
};

export default Preloader;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: scale(30),
    height: scale(30),
  },
});
