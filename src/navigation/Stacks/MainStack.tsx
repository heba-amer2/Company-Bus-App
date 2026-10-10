import { View, Text } from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import { EmployeeScreenNames } from '../ScreenNames';
import HomeScreen from '../../screens/employee/Home/HomeScreen';
import ReservationDetailsScreen from '../../screens/employee/reservations/ReservationDetailsScreen/ReservationDetailsScreen';
import { StackNames } from '../StackNames';
import BottomTabs from './BottomTabs';
import EmployeeTripDetailsScreen from '../../screens/employee/trips/TripDetailsScreen';
import DriverTripDetailsScreen from '../../screens/driver/TripDetailsScreen/TripDetailsScreen';
import AdminTripDetailsScreen from '../../screens/admin/TripsScreen/TripDetailsScreen/TripDetailsScreen';
import { MainStackType } from '../RootStack';
import { DriverScreenNames } from '../ScreenNames';

const MyStack = createStackNavigator<MainStackType>();

export default function MainStack() {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name={StackNames.BottomTabs} component={BottomTabs} />
      <MyStack.Screen name="AdminTripDetails" component={AdminTripDetailsScreen} />

      {/* employee screens  */}


      {/* <MyStack.Screen
        name={EmployeeScreenNames.EmployeeReservationDetailsScreen}
        component={ReservationDetailsScreen}
      />
      <MyStack.Screen
        name={EmployeeScreenNames.EmployeeTripDetailsScreen}
        component={EmployeeTripDetailsScreen}
      /> */}


      {/* Driver screens   */}

      {/*   
      <MyStack.Screen
        name={DriverScreenNames.DriverTripDetailsScreen}
        component={DriverTripDetailsScreen}
      /> */}

     






    </MyStack.Navigator>
  );
}
