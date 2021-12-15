import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Button = ({onPress, label, icon, bgColor}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.btn, {backgroundColor: bgColor}]}>
      <Text style={styles.btnText}>{label}</Text>
      <Ionicons name={icon} size={15} color="white" /> 
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: 'skyblue',
    padding: 10
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    marginRight: 3
  }
});

Button.defaultProps = {
  bgColor: 'skyblue'
};

export default Button;
