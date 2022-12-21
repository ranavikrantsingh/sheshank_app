import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomDarkModeContainerWithKeyboardAvoiding from '../components/CustomDarkModeContainerWithKeyboardAvoiding';
import LottieView from 'lottie-react-native';
import HeaderButton from '../components/HeaderButton';
import {ActivityIndicator} from 'react-native-paper';
const EarningsScreen = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <CustomDarkModeContainerWithKeyboardAvoiding>
      <>
        <HeaderButton
          title="Meetings"
          title1="Join Meeting"
          selectedTab={selectedTab}
          setSelectedTab={setselectedTab}
        />

        {selectedTab == 0 ? (
          <View style={styles?.center}>
            <LottieView
              source={require('../assets/animations/Meetings.json')}
              autoPlay
              loop
              style={styles?.lottie}
            />
          </View>
        ) : selectedTab == 1 ? (
          <View style={styles?.center}>
            <LottieView
              source={require('../assets/animations/lurkingCat.json')}
              autoPlay
              loop
              style={styles?.lottie}
            />
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </>
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
