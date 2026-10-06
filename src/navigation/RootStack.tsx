import { View, Text } from 'react-native'
import React from 'react'
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import HomeScreen from '../screens/employee/Home/HomeScreen';
import {ScreenNames} from './ScreenNames';
import ReservationDetailsScreen from '../screens/employee/reservations/ReservationDetailsScreen/ReservationDetailsScreen';
import TripDetailsScreen from '../screens/employee/trips/TripDetailsScreen';
import AuthStack from './Stacks/AuthStack';
import BottomTabs from './Stacks/BottomTabs';
import { StackNames } from './StackNames';
import MainStack from './Stacks/MainStack';


const MyStack = createStackNavigator<RootStackType>();


export default function RootStack() {
  return (
    <MyStack.Navigator
     screenOptions={{headerShown:false}}>
      
      <MyStack.Screen name={StackNames.AuthStack} component={AuthStack} />
     <MyStack.Screen name={StackNames.MainStack} component={MainStack} />
    </MyStack.Navigator>
  )
}
type RootStackType={
  AuthStack:AuthStackType;
  MainStack:MainStackType;
}
export type AuthStackType={
  LoginScreen:undefined;
}
export type MainStackType={
  BottomTabs:BottomTabsType;
  HomeScreen:undefined;
  ReservationDetailsScreen:undefined;
  TripDetailsScreen:undefined;

}
export type BottomTabsType={
  HomeScreen:undefined;
  TripsScreen:undefined;  
  ReservationsScreen:undefined;
  trackingScreen:undefined;
  ProfileScreen:undefined;
}