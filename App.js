import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from './src/utils/Scaling';
import {toastr} from './src/utils/Toastr';
import Colors from './src/constants/Colors';
const App = () => {
  const [image, setimage] = useState('https://picsum.photos/200/300');
  const handleButtonPressed = () => {
    toastr.showToast('ButtonPressed');
  };
  return (
    <SafeAreaView style={styles?.body}>
      <View style={{marginHorizontal: scale(20)}}>
        <Text style={{fontSize: scale(20), color: Colors?.red}}>
          Hello World
        </Text>
        {image ? (
          <Image
            source={{uri: image}}
            style={{width: scale(200), height: scale(300),marginVertical:scale(10)}}
          />
        ) : (
          <ActivityIndicator color={Colors.red} animating={true} size={20} />
        )}

        <TouchableOpacity onPress={() => toastr.showToast('ButtonPressed')}>
          <View style={styles?.buttonStyle}>
            <Text style={{fontSize: scale(20)}}>Hello World</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={handleButtonPressed}>
          <View style={styles?.buttonStyle}>
            <Text style={{fontSize: scale(20)}}>Hello World</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonStyle: {
    backgroundColor: '#f26868',
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
    marginVertical: scale(10),
  },
});
