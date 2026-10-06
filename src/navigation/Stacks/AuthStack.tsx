import { View, Text } from 'react-native'
import React from 'react'
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import { AuthStackType } from '../RootStack';

const MyStack = createStackNavigator<AuthStackType>();

export default function AuthStack() {
  return (
    <MyStack.Navigator
    screenOptions={{headerShown:false}}
    > 
        
        <MyStack.Screen name='LoginScreen' component={LoginScreen}/>
    </MyStack.Navigator>
  )
}