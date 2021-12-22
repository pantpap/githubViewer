import React from "react";
import {Text, View} from "react-native";
import {REPOSITORY_DETAILS} from "../navigation";

const ReposList = (props, navigation) => {
    const {repos} = props;
    console.log(props);

    return (
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 8
        }}>
            <Text style={[styles.common, styles.repoName]}
                  // onPress={navigation.navigate(REPOSITORY_DETAILS, { repo })}
            >{repos.name}</Text>
            <Text style={[styles.common]}>Stars: {repos.stargazers_count}</Text>
            <Text>{repos.description}</Text>
        </View>
    )
}

const styles = {
    common: {
        color: 'skyblue'
    },
    repoName: {
        fontSize: 22,
    }
}

export default ReposList;
