import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../utils/Scaling';

import CustomDarkModeContainerWithKeyboardAvoiding from '../components/CustomDarkModeContainerWithKeyboardAvoiding';
const HomeScreen = props => {
  return (
    <CustomDarkModeContainerWithKeyboardAvoiding>
      <View style={styles?.margins}>
        <View style={styles?.body}>
          <Text style={styles.boldText}>Home Screen</Text>
        </View>
      </View>
    </CustomDarkModeContainerWithKeyboardAvoiding>
  );
};

export default HomeScreen;

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
