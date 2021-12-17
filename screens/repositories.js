import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';




const Repositories = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text>Repositories</Text>
   
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Repositories;