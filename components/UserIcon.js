import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Modal, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Button from '../components/Button';

const UserIcon = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [token, setToken] = useState('');
  let isLoggedIn = false;
  let isHome = false;
  //const [isLoggedIn, setIsLoggedIn] = useState();

  const logout = () => {
    console.log("logout!");
  };

  const onChange = (value) => {
    setToken(() => (value));
  };

  return(
  <View>
    {isHome ?
    <View>
    <TouchableOpacity >
      <View style={[styles.btnHome]}>
        <Ionicons 
          name="md-person"
          color={'#FF0000'}
          size={40}
          onPress={() => navigation.popToTop()}
          />
          
      </View>
    </TouchableOpacity>
    </View>
    :
      <View> 
      
      </View>
    
    }
    <TouchableOpacity >
      <View style={[styles.btn]}>
        <Ionicons 
          name="md-person"
          color={'#FF0000'}
          size={40}
          onPress={() => setModalVisible(true)}
          />
          
      </View>
    </TouchableOpacity>


    <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle = 'fullScreen'
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Ionicons 
            name="close-circle-outline"
            color={'grey'}
            size={40}
            style={styles.btnClose}
            onPress={() => setModalVisible(false)}
            /> 
        {!isLoggedIn ?
        <View>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            />
          <Text style={styles.text}>Add Credentials</Text>
          <TextInput
              placeholder="Token"
              onChangeText={(value) => onChange(value)}
              style={styles.textInput}
              value={token}
            />
          <Button
            testID="searchBtn"
            style={{marginBottom: 8}}
            //onPress={searchUser}
            label="Login" 
          />
         </View>
        :
          
            <Button
            testID="searchBtn"
            style={{marginBottom: 8}}
            onPress={logout}
            label="Logout" 
          />
        }
      </View>
      </Modal>
        
  </View>
)};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    padding: 1,
    margin: 2,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: 'red',

  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    marginRight: 3
  },
  btnClose: {
    alignSelf: 'flex-end'
  },
  btnLogin: {},
  btnLogout: {},
  modalContainer: {
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


export default UserIcon;
