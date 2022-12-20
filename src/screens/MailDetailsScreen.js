import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';
import {scale} from '../utils/Scaling';
const MailDetailsScreen = props => {
  const {data} = props?.route?.params;
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <SafeAreaView>
      <View style={styles?.margins}>
        {data && (
          <>
            <Text style={styles?.boldText}>{data?.name}</Text>
            <Text style={styles?.mediumText}>{data?.email}</Text>
            <Text style={styles?.regularText}>{data?.message}</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MailDetailsScreen;

const styles = StyleSheet.create({
  margins: {
    margin: scale(20),
  },
  boldText: {
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  mediumText: {
    fontSize: scale(15),
    fontWeight: '500',
  },
  regularText: {
    fontSize: scale(15),
  },
});
