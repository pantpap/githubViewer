import React from 'react';
import { ScrollView } from 'react-native';
import ProfileData from "../components/ProfileData";


const Profile = ({route}) => {
  const userData = route?.params?.userData;
  return (
    <ScrollView>
      <ProfileData label='Company' data={userData.company}></ProfileData>
      <ProfileData label='Location' data={userData.location}></ProfileData>
      <ProfileData label='Followers' data={userData.followers}></ProfileData>
      <ProfileData label='Following' data={userData.following}></ProfileData>
      <ProfileData label='Email' data={userData.email}></ProfileData>
      <ProfileData label='Public Repos' data={userData.public_repos}></ProfileData>
    </ScrollView>
)};

export default Profile;
