import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import {PROFILE, REPOSITORIES, FOLLOWERS} from "../navigation";


const Dashboard = ({route, navigation}) => {
  const userData = route?.params?.json;

  const { name } = userData;

  const navigate = (page) =>{
    navigation.navigate(page)
  }

  return (
  <View style={styles.container}>
    <Text>{name}</Text>
    <Text style={[styles.buttons, {backgroundColor: '#5cd9ff'}]} onPress={()=>navigate(PROFILE)}>View Profile</Text>
    <Text style={[styles.buttons, {backgroundColor: '#ff6060'}]} onPress={()=>navigate(REPOSITORIES)}>View Repos</Text>
    <Text style={[styles.buttons, {backgroundColor: '#7579f3'}]} onPress={()=>navigate(FOLLOWERS)}>View Followers</Text>

  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    width: '100%',
    color: '#fff',
    padding: 15,
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default Dashboard;
