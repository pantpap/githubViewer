import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Button = ({onPress, label, icon, bgColor}) => (
  <TouchableOpacity onPress={onPress} style={styles.touchable}>
    <View style={[styles.btn, {backgroundColor: bgColor}]}>
      <Text style={styles.btnText}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    backgroundColor: 'white'
  },
  btnText: {
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  touchable:{
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  }
});

Button.defaultProps = {
  bgColor: 'white'
};

export default Button;
