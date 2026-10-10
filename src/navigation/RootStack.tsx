import { View, Text } from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import HomeScreen from '../screens/employee/Home/HomeScreen';
import { EmployeeScreenNames } from './ScreenNames';
import ReservationDetailsScreen from '../screens/employee/reservations/ReservationDetailsScreen/ReservationDetailsScreen';
import TripDetailsScreen from '../screens/employee/trips/TripDetailsScreen';
import AuthStack from './Stacks/AuthStack';
import BottomTabs from './Stacks/BottomTabs';
import { StackNames } from './StackNames';
import MainStack from './Stacks/MainStack';
import { NavigatorScreenParams } from '@react-navigation/native';

const MyStack = createStackNavigator<RootStackType>();

export default function RootStack() {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name={StackNames.AuthStack} component={AuthStack} />
      <MyStack.Screen name={StackNames.MainStack} component={MainStack} />
    </MyStack.Navigator>
  );
}
export type RootStackType = {
  AuthStack: NavigatorScreenParams<AuthStackType>;
  MainStack: NavigatorScreenParams<MainStackType>;
};
export type AuthStackType = {
  LoginScreen: undefined;
};
export type MainStackType = {
  BottomTabs: NavigatorScreenParams<BottomTabsType>;
  ReservationDetailsScreen: undefined;
  EmployeeTripDetailsScreen: undefined;
  DriverTripDetailsScreen: undefined;
  AdminTripDetails: { tripId?: string | number } | undefined;
};
export type BottomTabsType = {
  // employee screens
  HomeScreen: undefined;
  ReservationsScreen: undefined;
  trackingScreen: undefined;

  // driver screens
  ActiveTripScreen: undefined;

  // admin screens
  DashboardScreen: undefined;
  TripsScreen: undefined;
  ManagementScreen: undefined;
  UsersScreen: undefined;
  ProfileScreen: undefined;
};
