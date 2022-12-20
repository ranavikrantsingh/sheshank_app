import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from '../utils/Scaling'
import ButtonComponent from '../components/ButtonComponent'
import { logout } from '../store/actions'
import { useDispatch } from 'react-redux'
const HomeScreen = (props) => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles?.mainContainer}>
      <View style={styles?.margins}>
        <View style={styles?.body}>
          <Text style={styles.boldText}>Home Screen</Text>
          <ButtonComponent
            name="Logout"
            onPress={() => {
            dispatch(logout())
            }}
            
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  margins: {
    marginHorizontal: scale(20),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
})