import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ToastAndroid, FlatList, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import ReposList from "../components/ReposList";
import {Touchable} from "react-native-web";

const Repositories = ({route, navigation}) => {
  const userData = route?.params?.userData;
  const {repos_url} = userData;

  const [repos, setRepos] = useState();

  const getUserRepos = async () => {
    try {
      const res = await fetch(repos_url);
      const response = await res.json();
      setRepos (response);
    }catch (e) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  }

  useEffect(() => {
    getUserRepos();
  }, []);


  const renderList = ({ item }) => (
      // <TouchableOpacity onPress={(item) => repoDetails(item)}>
        <ReposList repos={item}/>
      // </TouchableOpacity>
  )

  const repoDetails = ({item}) => {
    return <WebView source={{ uri: item.html_url }}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
          data={repos}
          renderItem={renderList}
          keyExtractor={repos => repos.id}
      />
    </View>
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
