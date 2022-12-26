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
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {scale} from '../utils/Scaling';
import MailData from '../constants/MailData';
import {TextInput} from 'react-native-paper';
import {setEmailCount} from '../store/actions';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import axiosCaller from '../utils/axiosCaller';
import callApi from '../utils/apiCaller';
import Preloader from '../components/Preloader';
const HomeScreen = props => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const [mail, setMail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const randomColor = {
    bgColor: ['#E2B43B', '#77708E', '#C76E46', '#BDE0BD', '#f26868', '#0181e3'],
  };
  const randomColorgenerator =
    randomColor?.bgColor[
      Math.floor(Math.random() * randomColor?.bgColor?.length)
    ];

  // const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  // const handleMailData = async () => {
  //   setIsLoading(true)
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await response.json();
  //     setMail(data);
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   finally{
  //     setIsLoading(false)
  //   }
  // };

  // const handleMailData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await callApi('users');
  //     const data = await response;
  //     setMail(data);
  //     setIsLoading(false);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  //   finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleMailData = () => {
    callApi().then(response => {
      if (response?.status === 200) {
        setMail(response?.data);
        setIsLoading(false);
      } else if (response?.status === 404) {
        console.log('404');
      }
    });
  };
  // const handleMailData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axiosCaller('users');
  //     const data = await response;
  //     setMail(data);
  //     setIsLoading(false);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // };

  // const postMailData = async () => {
  //   setIsLoading(true)
  //   try {
  //     const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
  //       name: 'John Doe',
  //       username
  //     });
  //     const data = await response.data;
  //     setMail(data);
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   finally{
  //     setIsLoading(false)
  //   }
  // };
  // const postMailData = async () => {
  //   setIsLoading(true)
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name: 'John Doe',
  //         username
  //       }),
  //     });
  //     const data = await response.json();
  //     setMail(data);
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   finally{
  //     setIsLoading(false)
  //   }
  // };

  const handleNavigation = item => {
    const data = {
      data: item,
    };

    props.navigation.navigate('MailDetailsScreen', data);
  };
  const handleEmailCount = () => {
    dispatch(setEmailCount(mail?.length));
  };
  useEffect(() => {
    handleEmailCount();
    handleMailData();
  }, []);

  console.log('====================================');
  console.log(mail);
  console.log('====================================');

  return (
    <SafeAreaView
      style={[
        styles?.mainContainer,
        {backgroundColor: isDarkMode ? '#121212' : '#fff'},
      ]}>
      {isLoading ? (
        <Preloader />
      ) : (
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
                  placeholder="Search by email or name"
                  placeholderTextColor={isDarkMode ? '#f2f2f2' : '#000'}
                  mode="outlined"
                  onChangeText={text => {
                    const filteredMail = MailData.filter(item => {
                      return (
                        item?.email?.includes(text) &&
                        item?.username?.includes(text)
                      );
                    });
                    setMail(filteredMail);
                  }}
                  textColor={isDarkMode ? '#f2f2f2' : '#000'}
                  theme={{
                    roundness: 40,
                    colors: {
                      text: isDarkMode ? '#f2f2f2' : '#000',
                      background: 'transparent',
                    },
                  }}
                />
              </View>
              <Text style={styles.mediumText}>Inbox</Text>

              <FlatList
                data={mail}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => handleNavigation(item)}>
                    <View style={styles?.card}>
                      <View style={styles?.row}>
                        <View
                          style={[
                            styles?.contactContainer,
                            {backgroundColor: randomColorgenerator},
                          ]}>
                          <Text style={styles?.whiteText}>
                            {item?.name?.slice(0, 1)}
                          </Text>
                        </View>
                        <View style={styles?.col}>
                          <Text style={styles?.boldText}>{item?.name}</Text>
                          <Text style={styles?.mediumText} numberOfLines={2}>
                            {item?.message}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
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
      )}
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
    fontSize: scale(15),
    fontWeight: 'bold',
  },
  mediumText: {
    fontSize: scale(13),
    fontWeight: 'normal',
    marginVertical: scale(5),
  },
  card: {
    marginVertical: scale(8),
  },
  contactContainer: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(25),
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
    fontSize: scale(15),
    fontWeight: 'bold',
  },
  col: {
    flex: 1,
  },
});
