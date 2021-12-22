import React from "react";
import {Text, View} from "react-native";

const ReposList = (props) => {
    return (
        <View style={style.view}>
            <Text>{props.name}</Text>
        </View>
    )
}

export default ReposList;
