import React from "react";
import {Text, View, Image, StatusBar,  StyleSheet} from "react-native";

const Avatar = (props) => (
    <View>
        <Image style={styles.avatar}
               source={{uri: props.url}}
        />
    </View>


)

const styles = StyleSheet.create({
    avatar: {
        height: 300,
        marginBottom: 5,
        borderRadius: 4,
        resizeMode: 'cover',
    },
});

export default Avatar;
