import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ButtonComponent from './src/components/ButtonComponent';
import {scale} from './src/utils/Scaling';
import ModalPopup from './src/components/ModalPopup';
const App = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <SafeAreaView style={styles?.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles?.margins}>
        <ButtonComponent name="Button"  onPress={()=>setshowModal(true)}/>
        {showModal ? <ModalPopup visible={true} activeTab={0}
        modalVisible={showModal}
        setModalVisible={setshowModal}
        
        /> : null}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  margins: {
    marginHorizontal: scale(15),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
