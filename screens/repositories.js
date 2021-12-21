import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Text, ToastAndroid} from 'react-native';

const Repositories = ({route, navigation}) => {
  const userData = route?.params?.userData;
  const {repos_url} = userData;

  const [data, setData] = useState('');

  const getUserRepos = async () => {
    console.log('repos', userData);
    try {
      const res = await fetch(repos_url);
      const response = await res.json();
      setData (() => response);
      console.log(response)
    }catch (e) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  }

  useEffect(() => {
    getUserRepos();
  }, []);

  return (
  <View style={styles.container}>
    <Text>{data.name}</Text>
   
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
