import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import MeetScreen from '../screens/MeetScreen';
import {Platform} from 'react-native';
import {scale} from '../utils/Scaling';
import {connect} from 'react-redux';
const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
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
          tabBarBadge: props?.emailCount
        }}
      />
      <Tab.Screen
        name="MeetScreen"
        component={MeetScreen}
        options={{
          tabBarLabel: 'Meet',
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    emailCount: state.appReducer.emailCount,
  };
};

export default connect(mapStateToProps)(TabNavigator);
