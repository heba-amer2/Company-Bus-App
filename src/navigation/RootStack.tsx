import { View, Text } from 'react-native';
import React from 'react';
import {
  createStackNavigator,
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
import { useSelector } from 'react-redux';
import { RootState } from '../store/appStore';




const MyStack = createStackNavigator<RootStackType>();

export default function RootStack() {
  const accessToken = useSelector(
      (state: RootState) => state.auth.accessToken,
    );
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
     {accessToken ? (
        <MyStack.Screen
          name={StackNames.MainStack}
          component={MainStack}
        />
      ) : (
        <MyStack.Screen
          name={StackNames.AuthStack}
          component={AuthStack}
        />
      )}
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
  //Employee
  EmployeeReservationDetailsScreen: undefined;
  EmployeeTripDetailsScreen: undefined;
  //Driver
  DriverTripDetailsScreen: undefined;
  //Admin
  AdminTripDetailsScreen: { tripId?: string | number } | undefined;
};
export type BottomTabsType = {
  // employee screens
  EmployeeHomeScreen: undefined;
  EmployeeTripsScreen:undefined;
  EmployeeReservationsScreen: undefined;
  EmployeeTrackingScreen: undefined;
  EmployeeProfileScreen:undefined;

  // driver screens
  DriverHomeSCreen:undefined;
  DriverTripsScreen:undefined;
  DriverActiveTripScreen: undefined;
  DriverProfileScreen:undefined;

  // admin screens
  AdminDashboardScreen: undefined;
  AdminManagementScreen: undefined;
  AdminUsersScreen: undefined;
  AdminProfileScreen:undefined;
  AdminTripsScreen:undefined;
};
