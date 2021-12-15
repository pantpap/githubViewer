import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';


import Button from '../components/Button';




const HomeScreen = ({navigation}) => {

  const [user, setUser] = useState();

  const onChange = (value, type) => {
    setUser(() => ({ ...user, [type]: value }));
  };

  return (
    <View style={styles.container}>
      <Text>Search for a Github User</Text>
      <TextInput
          placeholder="Github User"
          onChangeText={(value) => onChange(value, 'user')}
          style={styles.input}
          value={user}
        />
      <Button
        testID="searchBtn"
        style={{marginBottom: 8}}
        //onClick={() => navigation.navigate('Screen3')} //search user
        text="Search"
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
