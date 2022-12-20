import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import EarningsScereen from '../screens/EarningsScreen';
import {Platform} from 'react-native';
import {scale} from '../utils/Scaling';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // borderTopWidth: 0,
          height: Platform.OS === 'ios' ? scale(80) : scale(60),
        },
        tabBarLabelStyle: {
          fontSize: 14,
          bottom: Platform.OS === 'ios' ? scale(-2) : scale(5),
        },
        headerShown: false,
        
        tabBarAllowFontScaling: true,
        tabBarHideOnKeyboard: true,
      }}
      backBehavior="none"
      initialRouteName="DrawerNavigator">
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          tabBarLabel: 'Mail',
        }}
      />
      <Tab.Screen
        name="EarningsScereen"
        component={EarningsScereen}
        options={{
          tabBarLabel: 'Earnings',
          tabBarBadge: 2,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
