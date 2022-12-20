import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import EarningsScereen from '../screens/EarningsScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          tabBarLabel: 'Home',
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
