import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';




const Followers = ({route,navigation}) => {
  const userData = route?.params?.userData;
  
  console.log("Followers");
  console.log(userData);
  return (
    
  <View style={styles.container}>
    <Text>Followers</Text>
    <Text>{userData.followers}</Text>
   
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