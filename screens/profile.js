import React from 'react';
import { View, StyleSheet } from 'react-native';




const Profile = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text>Profile</Text>
   
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

export default Profile;