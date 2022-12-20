import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ButonComponent from '../components/ButtonComponent.js'
const LoginScreen = (props) => {
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <ButonComponent onPress={()=>props?.navigation.navigate('OtpScreen')} />
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})