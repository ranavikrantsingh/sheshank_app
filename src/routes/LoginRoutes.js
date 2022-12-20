import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import CreateAccount from '../screens/CreateAccount';
import {useColorScheme} from 'react-native';
const Stack = createNativeStackNavigator();

export default function LoginRoutes() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{title: 'Sign Up'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
