import React from 'react';
import { ScrollView } from 'react-native';
import ProfileData from "../components/ProfileData";
import Avatar from "../components/Avatar";


const Profile = ({route}) => {
  const userData = route?.params?.userData;
  return (
    <ScrollView>
      <Avatar url={userData.avatar_url}  name={userData.name} login={userData.login}/>
      <ProfileData label='Company' data={userData.company}/>
      <ProfileData label='Location' data={userData.location}/>
      <ProfileData label='Followers' data={userData.followers}/>
      <ProfileData label='Following' data={userData.following}/>
      <ProfileData label='Email' data={userData.email}/>
      <ProfileData label='Public Repos' data={userData.public_repos}/>
    </ScrollView>
)};

export default Profile;
