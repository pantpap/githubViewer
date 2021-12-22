import React from "react";
import {Text, View, Image, StatusBar,  StyleSheet} from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Avatar = (props) => (
    
    <View style={styles.container}>
        <Image style={styles.avatar}
               source={{uri: props.url}}
        /> 
        <View style={styles.centered}>
            <Text style={styles.text}>{props.name} </Text>
            <Text style={styles.text}>{props.login}</Text>
        </View>
    </View>


)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87CEEB',
        color: 'white',
        height: 380,
        justifyContent: 'center',
      },avatar: {
        height: 300,
        marginBottom: 5,
        borderRadius: 4,
        resizeMode: 'cover',
    },
    centered: {
        alignItems: 'center'
    },
    text:{
        color: 'white',
        fontSize:18,
        margin:5
      },
});

export default Avatar;
