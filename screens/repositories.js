import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Text, ToastAndroid, FlatList} from 'react-native';
import ReposList from "../components/ReposList";

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


  const renderList = ({item}) => {
    <ReposList repos={item}/>
  }

  return (
    <FlatList
              data={data}
              renderItem={renderList}
              keyExtractor={data => data.id}
    />
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  view: {
    flex: 1,
    backgroundColor: '#87CEEB',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Repositories;
