import { View, Text } from 'react-native'
import React from 'react'
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import { ScreenNames } from '../ScreenNames';
import HomeScreen from '../../screens/employee/Home/HomeScreen';
import ReservationDetailsScreen from '../../screens/employee/reservations/ReservationDetailsScreen/ReservationDetailsScreen';
import { StackNames } from '../StackNames';
import BottomTabs from './BottomTabs';
import TripDetailsScreen from '../../screens/employee/trips/TripDetailsScreen';
import { MainStackType } from '../RootStack';


const MyStack = createStackNavigator<MainStackType>();

export default function MainStack() {
  return (
    <MyStack.Navigator
     screenOptions={{headerShown:false}}>
      <MyStack.Screen name={StackNames.BottomTabs} component={BottomTabs}/>
      <MyStack.Screen name={ScreenNames.HomeScreen} component={HomeScreen}/>
      <MyStack.Screen name={ScreenNames.ReservationDetailsScreen} component={ReservationDetailsScreen}/>
      <MyStack.Screen name={ScreenNames.TripDetailsScreen} component={TripDetailsScreen}/>

      
    </MyStack.Navigator>
    
  )
}