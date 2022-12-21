import {View, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {scale} from '../../utils/Scaling';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../../constants/Colors';
import {logout} from '../../store/actions';
import {useDispatch} from 'react-redux';
const CustomDrawerComponent = props => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => dispatch(logout())},
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}>
        <View></View>
        {/* <DrawerItemList {...props} /> */}
        <View style={{marginTop: scale(10)}}>
          <DrawerItem
            label="Inbox"
            activeTintColor={Colors.red}
            activeBackgroundColor="white"
            inactiveTintColor="white"
            inactiveBackgroundColor="#000"
            style={{backgroundColor: 'transparent', marginTop: '0%'}}
          />
          <DrawerItem
            label="Sent"
            activeTintColor={Colors.red}
            activeBackgroundColor="white"
            inactiveTintColor="white"
            inactiveBackgroundColor="transparent"
            style={{backgroundColor: 'transparent', marginTop: '0%'}}
          />
        </View>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          label="Logout"
          activeTintColor={Colors.accent}
          activeBackgroundColor="white"
          inactiveTintColor="white"
          labelStyle={[{color: '#fff'}]}
          inactiveBackgroundColor="transparent"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

export default CustomDrawerComponent;

const styles = StyleSheet.create({
  profileImage: {
    width: scale(60),
    height: scale(60),
    marginRight: scale(5),
    marginLeft: scale(10),
    marginTop: scale(10),
    marginBottom: scale(10),
    borderColor: '#fFF',
    borderWidth: scale(1),
    borderRadius: scale(100),
  },
  bg: {
    height: scale(95),
    resizeMode: 'cover',
    top: scale(-5),
  },
  label: {
    fontSize: scale(16),
    color: '#fff',
  },
});
