import React from "react";
import {Text, View} from "react-native";

const ReposList = (props) => {
    const {repos} = props;

    return (
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 8
        }}>
            {/*<View style={{flexDirection:"row"}}>*/}
                <Text style={[styles.common, styles.repoName]}>{repos.name}</Text>
            {/*</View>*/}
            {/*<View style={{flexDirection:"row"}}>*/}
                <Text style={[styles.common]}>Stars: {repos.stargazers_count}</Text>
            {/*</View>*/}
            {/*<View style={{flexDirection:"row"}}>*/}
                <Text>{repos.description}</Text>
            {/*</View>*/}
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
