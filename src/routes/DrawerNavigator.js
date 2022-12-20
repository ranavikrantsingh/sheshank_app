import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const HiddenScreenOptions = {
    headerShown: false,
  };

  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerShown: false,
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerStyle: {
            backgroundColor: '#2A2E39',
            shadowOpacity: 0,
            opacity: 0.9,
          },
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: Colors.red,
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={HiddenScreenOptions}
        />
      </Drawer.Navigator>
    </>
  );
}
