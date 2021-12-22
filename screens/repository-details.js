import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import {WebView} from "react-native-webview";

const Repository_details = ({route, navigation}) => {
  const repo = route?.params?.repo;
  console.log('paramas', route?.params.repo)
  return (
  <View style={styles.container}>
    <WebView source={{uri: repo.html_url}}/>
   
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

export default Repository_details;
