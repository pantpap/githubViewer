import React from "react";
import {StyleSheet, Text, View} from "react-native";

const ProfileData = (props) => {
    const {data, label} = props
    return (
        <View style={styles.container}>
            <Text style={[{color: 'skyblue'}]}>{label} </Text>
            <Text style={styles.data}>{data}</Text>
        </View>
    )};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 8
    },
    data: {
        fontSize: 18
    }
});
export default ProfileData;
