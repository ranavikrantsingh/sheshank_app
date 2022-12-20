import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../utils/Scaling';
import MailData from '../constants/MailData';
import {TextInput} from 'react-native-paper';
const HomeScreen = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const [mail, setMail] = useState(MailData);
  return (
    <SafeAreaView
      style={[
        styles?.mainContainer,
        {backgroundColor: isDarkMode ? '#121212' : '#fff'},
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles?.margins}>
            <View>
              <TextInput
                left={
                  <TextInput.Icon
                    name="magnify"
                    onPress={() => props.navigation.toggleDrawer()}
                  />
                }
                style={{backgroundColor: 'transparent'}}
                label="Search by email"
                mode="outlined"
                onChangeText={text => {
                  const filteredMail = MailData.filter(item => {
                    return item?.email?.includes(text);
                  });
                  setMail(filteredMail);
                }}
              />
            </View>
            <FlatList
              data={mail}
              renderItem={({item}) => (
                <View style={styles?.card}>
                  <Text style={styles?.mediumText}>{item?.username}</Text>
                  <Text style={styles?.mediumText}>{item?.email}</Text>
                </View>
              )}
              onEndReachedThreshold={0.5}
              keyExtractor={item => item?.name}
              onEndReached={() => {
                console.log('end reached');
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  margins: {
    marginHorizontal: scale(20),
  },
  mainContainer: {
    flex: 1,
  },
  body: {
    marginTop: '40%',
  },
  error: {
    color: 'red',
    fontSize: scale(12),
    marginVertical: scale(5),
  },
  boldText: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginVertical: scale(5),
  },
  mediumText: {
    fontSize: scale(13),
    fontWeight: 'normal',
    marginVertical: scale(2),
  },
});
