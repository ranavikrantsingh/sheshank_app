import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {scale} from '../utils/Scaling';
import ButtonComponent from './ButtonComponent';
const ModalPopup = props => {
  const renderView = () => {
    if (props?.activeTab === 0) {
      return (
        <View style={styles?.margins}>
          <Text style={{fontSize: scale(20), fontWeight: 'bold'}}>
            Modal Popup
          </Text>

          <Image
            source={require('../assets/images/IMG_1427.jpeg')}
            style={{width: scale(100), height: scale(100)}}
          />

          <ButtonComponent
            name={'Close'}
            onPress={() => props.setModalVisible(false)}
          />
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
            <View style={styles.modalView}>{renderView()}</View>
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
});

export default ModalPopup;
