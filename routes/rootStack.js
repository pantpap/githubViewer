import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { HOME_SCREEN, DASHBOARD, PROFILE, REPOSITORIES, REPOSITORY_DETAILS, FOLLOWERS } from '../navigation';

import HomeScreen from '../screens/homeScreen';
import Dashboard from '../screens/dashboard';
import Profile from '../screens/profile';
import Repositories from '../screens/repositories';
import Repository_details from '../screens/repository-details';
import Followers from '../screens/followers';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTintColor: 'white',
    }}>
          <Stack.Screen name="{HOME_SCREEN}" component={HomeScreen} />
          <Stack.Screen name="{DASHBOARD}" component={Dashboard} />
          <Stack.Screen name="{PROFILE}" component={Profile} />
          <Stack.Screen name="{REPOSITORIES}" component={Repositories} />
          <Stack.Screen name="{REPOSITORY_DETAILS}" component={Repository_details} />
          <Stack.Screen name="{FOLLOWERS}" component={Followers} />
    
  </Stack.Navigator>
);

export default RootStack;
