import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, StatusBar, FlatList} from 'react-native';
import {PROFILE, REPOSITORIES, FOLLOWERS} from "../navigation";


const Dashboard = ({route, navigation}) => {
  const userData = route?.params?.json;
  const { avatar_url } = userData;

  const navigate = (page) =>{
    navigation.navigate(page, {userData})
  }

  return (
  <View style={styles.container}>
    <Image
        style={styles.avatar}
        source={{uri: avatar_url}}
    />
    <Text style={[styles.buttons, {backgroundColor: '#5cd9ff'}]} onPress={()=>navigate(PROFILE)}>View Profile</Text>
    <Text style={[styles.buttons, {backgroundColor: '#ff6060'}]} onPress={()=>navigate(REPOSITORIES)}>View Repos</Text>
    <Text style={[styles.buttons, {backgroundColor: '#7579f3'}]} onPress={()=>navigate(FOLLOWERS)}>View Followers</Text>

  </View >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight
  },
  buttons: {
    width: '100%',
    color: '#fff',
    padding: 15,
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  avatar: {
    height: 300,
    marginBottom: 5,
    borderRadius: 4,
    resizeMode: 'cover',
  },
});

export default Dashboard;
