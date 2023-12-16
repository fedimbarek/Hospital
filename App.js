import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomScreen from './screens/AccuilScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import useAuth from './user/useAuth';
import ListeScreen from './screens/ListeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const {user} = useAuth();
  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home"  component={HomeScreen} />
         
  
        </Stack.Navigator>
      </NavigationContainer>
    );

  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home"  component={HomeScreen} />
          <Stack.Screen name="Accuil" component={WelcomScreen} />
          <Stack.Screen name="Login"  component={LoginScreen} />
          <Stack.Screen name="SignUp"  component={SignUpScreen} />
          <Stack.Screen name="Liste" component={ListeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );

  }
 
}