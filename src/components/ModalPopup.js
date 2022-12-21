import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {scale} from '../utils/Scaling';
import LottieView from 'lottie-react-native';
const ModalPopup = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const renderView = () => {
    if (props?.activeTab === 0) {
      return (
        <View style={styles?.margins}>
          <LottieView
            source={require('../assets/animations/otp.json')}
            autoPlay
            loop
            style={styles?.lottie}
          />
          <Text
            style={{
              fontSize: scale(20),
              fontWeight: 'bold',
              color: isDarkMode ? '#fff' : '#000',
              textAlign: 'center',
              marginVertical: scale(5),
            }}>
            OTP has been sent to your mobile number
          </Text>
        </View>
      );
    }
    if (props?.activeTab === 1) {
      return (
        <View style={styles?.margins}>
          <LottieView
            source={require('../assets/animations/lurkingCat.json')}
            autoPlay
            loop
            style={styles?.lottie}
          />
          <Text
            style={{
              fontSize: scale(20),
              fontWeight: 'bold',
              color: isDarkMode ? '#fff' : '#000',
              textAlign: 'center',
              marginVertical: scale(5),
            }}>
            Account Created successfully
          </Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.centeredView}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={'rgba(0, 0, 0, 0.8)'}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        useNativeDriver={true}
        onDismiss={() => props.setModalVisible(false)}
        onSwipeComplete={() => props.setModalVisible(false)}
        onBackButtonPress={() => props.setModalVisible(false)}
        onBackdropPress={() => props.setModalVisible(false)}
        onSwipeCancel={() => props.setModalVisible(false)}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}>
        <TouchableWithoutFeedback onPress={() => props.setModalVisible(false)}>
          <View style={styles.centeredView_2}>
            <View>
              <TouchableOpacity onPress={() => props.setModalVisible(false)}>
                <View
                  style={{
                    backgroundColor: '#00000080',
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: scale(10),
                    borderRadius: 45 / 2,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                    }}>
                    X
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.modalView,
                {backgroundColor: isDarkMode ? '#121212' : '#fff'},
              ]}>
              {renderView()}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centeredView_2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  margins: {
    margin: scale(15),
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: scale(20),
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(16),
  },
  seperator: {
    borderColor: '#707070',
    borderWidth: 0.5,
  },
  checkBoxContainer: {
    width: '40%',
    backgroundColor: '#F4FBFF',
  },
  lottie: {
    width: scale(200),
    height: scale(150),
    alignSelf: 'center',
  },
});

export default ModalPopup;
