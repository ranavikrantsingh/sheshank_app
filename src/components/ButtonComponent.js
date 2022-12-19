import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from '../utils/Scaling';
const ButtonComponent = props => {
  return (
    <TouchableOpacity onPress={props?.onPress}>
      <View style={[styles?.button, props?.buttonStyle]}>
        <Text style={[styles?.buttonText, props?.textStyle]}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    height: scale(50),
    borderRadius: scale(10),
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: 'bold',
  },
});
