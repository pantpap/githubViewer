import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';




const Dashboard = ({route, navigation}) => {
  const userData = route?.params?.json;
  //     ?? {
  //   avatar_url: '',
  //   bio: '',
  //   blog: '',
  //   company: '',
  //   created_at: '',
  //   email: '',
  //   events_url: '',
  //   followers: '',
  //   followers_url: '',
  //   following: '',
  //   following_url:'',
  //   gists_url: '',
  //   gravatar_id: '',
  //   hireable: '',
  //   html_url: '',
  //   id: '',
  //   location: '',
  //   login: '',
  //   name: '',
  //   node_id: '',
  //   organizations_url: '',
  //   public_gists: '',
  //   public_repos: '',
  //   received_events_url: '',
  //   repos_url: '',
  //   site_admin: '',
  //   starred_url: '',
  //   subscriptions_url: '',
  //   twitter_username: '',
  //   type: '',
  //   updated_at: '',
  //   url: '',
  //
  // }
  // const [data, setData] = useState(userData)

  const { name } = userData
  return (
  <View style={styles.container}>
    <Text>{name}</Text>
   
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Dashboard;
