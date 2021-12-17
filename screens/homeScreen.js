import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { DASHBOARD } from '../src/navigation';
import API_SEARCH_USER from '../api';

import Button from '../components/Button';




const HomeScreen = ({navigation}) => {
  // const item = {username: ""};
  const [user, setUser] = useState('');

  const onChange = (value) => {
    // setUser(() => ({ ...user, [type]: value }));
    setUser(() => (value));
  };

  const searchUser = async () => {
    try {
      console.log("searchUser");
      console.log(user);
      let url = `${API_SEARCH_USER}/${user}`
      const response = await fetch(url);
      const json = await response.json();
      console.log("response");
      console.log(json);
      navigation.navigate('DASHBOARD', {json})



    } catch (error) {
      console.log("searchUser error");
      ToastAndroid.show(error, ToastAndroid.SHORT);
    } finally {
      console.log("finally!");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Search for a Github User</Text>
      <TextInput
          placeholder="Github User"
          onChangeText={(value) => onChange(value)}
          style={styles.input}
          value={user}
        />
      <Button
        testID="searchBtn"
        style={{marginBottom: 8}}
        onPress={searchUser}
        label="Search" 



      />
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

export default HomeScreen;
