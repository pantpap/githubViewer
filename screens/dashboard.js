import React from 'react';
import { View, StyleSheet, Text } from 'react-native';




const Dashboard = ({route, navigation}) => {
  const userData = route?.params?.json;

  const { name } = userData;

  return (
  <View style={styles.container}>
    <Text>{name}</Text>
   
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Dashboard;
