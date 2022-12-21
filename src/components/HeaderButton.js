import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {scale} from '../utils/Scaling';
const HeaderButton = props => {
  return (
    <View style={styles?.row}>
      <TouchableOpacity
        onPress={() => {
          props.setSelectedTab(0);
        }}>
        <View
          style={
            props?.selectedTab == 0 ? styles?.activeTab : styles?.inactiveTab
          }>
          <Text
            style={
              props?.selectedTab == 0
                ? styles?.activeText
                : styles?.inactiveText
            }>
            {props?.title}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.setSelectedTab(1);
        }}>
        <View
          style={
            props?.selectedTab == 1 ? styles?.activeTab : styles?.inactiveTab
          }>
          <Text
            style={
              props?.selectedTab == 1
                ? styles?.activeText
                : styles?.inactiveText
            }>
            {props?.title1}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: '#0181e3',
    paddingVertical: scale(5),
    paddingHorizontal: scale(25),
    borderRadius: scale(20),
    borderWidth: scale(1),
    marginRight: scale(10),
    borderColor: '#0181e3',
  },
  inactiveTab: {
    backgroundColor: '#fff',
    paddingVertical: scale(5),
    paddingHorizontal: scale(25),
    borderRadius: scale(20),
    marginRight: scale(10),
    borderWidth: scale(1),

  },
  activeText: {
    color: '#fff',
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  inactiveText: {
    color: '#000',
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(18),
  },
});
export default HeaderButton;
