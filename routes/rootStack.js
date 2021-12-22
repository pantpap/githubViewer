import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  UserIcon  from '../components/UserIcon';

import { HOME_SCREEN, DASHBOARD, PROFILE, REPOSITORIES, REPOSITORY_DETAILS, FOLLOWERS } from '../navigation';

import HomeScreen from '../screens/homeScreen';
import Dashboard from '../screens/dashboard';
import Profile from '../screens/profile';
import Repositories from '../screens/repositories';
import Repository_details from '../screens/repository-details';
import Followers from '../screens/followers';

const Stack = createStackNavigator();

const RootStack = (route) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTintColor: 'white',
    }}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen}
                    options={({navigation, route}) =>({
                        title: 'GitHub Viewer',
                        headerStyle:{
                          backgroundColor: 'white'
                        },
                        headerTitleStyle: {
                          color: '#87CEEB'
                        },
                        headerRight: () => <UserIcon/>
                    })
      }/>
      <Stack.Screen name={DASHBOARD}
                    component={Dashboard}
                    options={({route}) => ({title: `Dashboard of ${route?.params?.json.login}` ,
                    headerRight: () => <UserIcon/>
                  })
                    } />
      <Stack.Screen name={PROFILE}
                    component={Profile}
                    options={({route}) => ({title: `Profile of ${route?.params?.userData.login}`,
                        headerRight: () => <UserIcon/> })}
                    />
      <Stack.Screen name={REPOSITORIES}
                    component={Repositories}
                    options={({route}) => ({title: `Repositories of ${route?.params?.userData.login}`,
                    headerRight: () => <UserIcon/> })}
                    />
      <Stack.Screen name={REPOSITORY_DETAILS}
                    component={Repository_details}
                    />
      <Stack.Screen name={FOLLOWERS}
                    component={Followers}
                    options={({route}) => ({title: `Followers of ${route?.params?.userData.login}`,
                    headerRight: () => <UserIcon/> })} />

  </Stack.Navigator>
);

export default RootStack;
