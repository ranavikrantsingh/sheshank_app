import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import TabNavigator from './TabNavigator';
import MailDetailsScreen from '../screens/MailDetailsScreen';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MailDetailsScreen"
          component={MailDetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
