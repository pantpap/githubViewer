import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserIcon = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return(
  <View>
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


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
  
});


export default UserIcon;
