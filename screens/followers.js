import React from 'react';
import { View, StyleSheet } from 'react-native';




const Followers = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text>Followers</Text>
   
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

export default Followers;