import {
  StyleSheet,
  useColorScheme,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';
const CustomDarkModeContainerWithKeyboardAvoiding = props => {
  const isDarkMode = useColorScheme() === 'dark';

  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  return (
    <SafeAreaView
      style={{
        ...styles.mainContainer,
        backgroundColor: isDarkMode ? '#121212' : '#fff',
      }}>
      <FocusAwareStatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#121212' : '#fff'}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          {props?.children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CustomDarkModeContainerWithKeyboardAvoiding;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
