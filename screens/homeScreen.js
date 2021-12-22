import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { DASHBOARD } from '../src/navigation';
import API_SEARCH_USER from '../api';

import Button from '../components/Button';




const HomeScreen = ({navigation}) => {
  // const item = {username: ""};
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  const onChange = (value) => {
    // setUser(() => ({ ...user, [type]: value }));
    setUser(() => (value));
  };

  const searchUser = async () => {
    try {
      // console.log("searchUser");
      // console.log(user);
      let url = `${API_SEARCH_USER}/${user}`
      const response = await fetch(url);
      const json = await response.json();
        console.log("response");
       console.log(json);
       console.log(json?.message);
      // if(json?.message.localeCompare('Not Found') == 0){
      //   console.log("error");
      //   console.log(error);
      //   setError();
      //   console.log(error);
     // }else{
        navigation.navigate('DASHBOARD', {json})
        setError(false);
        console.log(error);
     // }
    } catch (error) {
      console.log("searchUser error");
      //ToastAndroid.show(error, ToastAndroid.SHORT);
    } finally {
      // console.log("finally!");

    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search for a Github User</Text>
      <TextInput
          placeholder="Github User"
          onChangeText={(value) => onChange(value)}
          style={styles.textInput}
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
    backgroundColor: '#87CEEB',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: 'white',
    fontSize:18
  },
  error:{
    color: 'red',
    fontSize:18
  },
  textInput:{
    width: 200,
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'white',
    padding: 10,
    backgroundColor: 'skyblue',
    color:'white'
  }
});

export default HomeScreen;
