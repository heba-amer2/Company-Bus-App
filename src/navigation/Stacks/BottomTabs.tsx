import { View, Text } from 'react-native'
import React from 'react'
import {
  createBottomTabNavigator,
  createBottomTabScreen,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/employee/Home/HomeScreen';
import ProfileScreen from '../../screens/employee/Profile/ProfileScreen';
import { ScreenNames } from '../ScreenNames';
import TripsScreen from '../../screens/employee/trips/TripsScreen';
import ReservationsScreen from '../../screens/employee/reservations/ReservationsScreen';
import TrackingScreen from '../../screens/employee/tracking/TrackingScreen';
import { BottomTabsType } from '../RootStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const MyTabs = createBottomTabNavigator<BottomTabsType>();

export default function BottomTabs() {
  return (
    <MyTabs.Navigator
     screenOptions={{headerShown:false}}>
        <MyTabs.Screen  name={ScreenNames.HomeScreen} component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Feather name="home" size={20} color="#2563EB" />
          ),
        }}
        
        />
        <MyTabs.Screen name={ScreenNames.TripsScreen} component={TripsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="train-car" size={20} color="#94A3B8" />
          ),
        }}
        
        />
        <MyTabs.Screen name={ScreenNames.reservationsScreen} component={ReservationsScreen}
        options={{
          tabBarIcon: () => (
             <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color="#94A3B8" />
          ),
        }}
        
        />
        <MyTabs.Screen name={`trackingScreen`} component={TrackingScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="location-outline" size={20} color="#94A3B8" />
          ),
        }}
        
        />
        <MyTabs.Screen name={ScreenNames.ProfileScreen} component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Feather name="user" size={20} color="#94A3B8" />
          ),
        }}
        
        />
    
    
    </MyTabs.Navigator>
  )
}