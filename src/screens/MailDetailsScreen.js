import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MailDetailsScreen = (props) => {
    const {data} = props?.route?.params
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  return (
    <View>
      <Text>MailDetailsScreen</Text>
    </View>
  )
}

export default MailDetailsScreen

const styles = StyleSheet.create({})