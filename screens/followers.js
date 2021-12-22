import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TextInput, Text,FlatList,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import API_SEARCH_USER from '../api';


const Followers = ({route,navigation}) => {
  const userData = route?.params?.userData;
  const [followers, setFollowers] = useState();

  const searchFollowers = async () => {
    try {
      let url = userData.followers_url;
      const response = await fetch(url);
      const data = await response.json();
      setFollowers(data);
    } catch (error) {
      console.log("followers error");
      ToastAndroid.show(error, ToastAndroid.SHORT);
    } finally {
    }
  };

  useEffect(() => {
    searchFollowers();
  });


  const renderItem = ({ item }) => (
   <ScrollView
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          padding: 8
        }}>
        
        <View>
          <View style={{flexDirection:"row"}}>
            <View >
              <Text style={styles.label}>Username: </Text>
            </View>
            <View >
              <Text style={styles.data}>{item.login}</Text>
            </View>
          </View>
          <View style={{flexDirection:"row"}}>
            <View >
              <Text style={styles.label}>Type: </Text>
            </View>
            <View >
              <Text style={styles.data}>{item.type}</Text>
            </View>
          </View>
          <View style={{flexDirection:"row"}}>
            <View >
              <Text style={styles.label}>Admin: </Text>
            </View>
            <View >
              {item.site_admin?
                <Ionicons 
                  name="checkmark-circle-outline"
                  color={'green'}
                  size={25}
                />
              :
                <Ionicons 
                name="close-circle-outline"
                color={'red'}
                size={25}
                />
              }
            </View>
          </View>
          
        </View>
      </ScrollView>
  );
  
  return (
    
  <View style={styles.container}>
      <FlatList
        data={followers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    
   
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6FF',
  },
  label:{
    justifyContent: 'flex-start',
    fontSize: 17,
    fontWeight: 'bold'
  },
  data: {
    justifyContent: 'flex-end',
    fontSize: 17,
    color: 'skyblue'
  }
});

export default Followers;