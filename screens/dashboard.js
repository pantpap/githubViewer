import React from 'react';
import { View, StyleSheet } from 'react-native';




const Dashboard = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text>Dashboard</Text>
   
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
