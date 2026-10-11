import React from 'react';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { BottomTabsType } from '../RootStack';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AdminScreenNames } from '../ScreenNames';
import DashboardScreen from '../../screens/admin/DashboardScreen/DashboardScreen';
import FleetScreen from '../../screens/admin/TripsScreen/TripsScreen';
import ManagementScreen from '../../screens/admin/ManagementScreen/ManagementScreen';
import UsersScreen from '../../screens/admin/UsersScreen/UsersScreen';
// import ProfileScreen from '../../screens/admin/ProfileScreen/ProfileScreen';
import { DriverScreenNames } from '../ScreenNames';
import HomeScreen from '../../screens/employee/Home/HomeScreen';
import TripsScreen from '../../screens/employee/trips/TripsScreen';
import { ActiveTripScreen } from '../../screens/driver/ActiveTripScreen/ActiveTripScreen';
import ProfileScreen from '../../screens/employee/Profile/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EmployeeScreenNames } from '../ScreenNames';
import ReservationsScreen from '../../screens/employee/reservations/ReservationsScreen/ReservationsScreen';
import TrackingScreen from '../../screens/employee/tracking/TrackingScreen';

const MyTabs = createBottomTabNavigator<BottomTabsType>();

export default function BottomTabs() {
  return (
    <MyTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarLabelStyle: { fontSize: 10, fontWeight: '700' },
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F1F5F9',
          height: 62,
          paddingTop: 6,
        },
      }}>

        {/* employee screens🙂 */}

        <MyTabs.Screen  name={EmployeeScreenNames.EmployeeHomeScreen} component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={20} color={focused ? '#2563EB' : color} />
          ),
        }}
        
        />
        <MyTabs.Screen name={EmployeeScreenNames.EmployeeTripsScreen} component={TripsScreen}
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bus" size={20} color={color} />
          ),
        }}
        
        />
        <MyTabs.Screen name={EmployeeScreenNames.EmployeeReservationsScreen} component={ReservationsScreen}
        options={{
          tabBarLabel: 'Reservations',
          tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color={color} />
          ),
        }}
        
        />
        <MyTabs.Screen name={EmployeeScreenNames.EmployeeTrackingScreen} component={TrackingScreen}
        options={{
          tabBarLabel: 'Tracking',
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-outline" size={20} color={color} />
          ),
        }}
        
        />
        <MyTabs.Screen name={EmployeeScreenNames.EmployeeProfileScreen} component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="user" size={20} color={focused ? '#2563EB' : color} />
          ),
        }}
        
        />

         {/* driver screens🙂 */}

      {/* <MyTabs.Screen
        name={DriverScreenNames.DriverHomeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={20} color={focused ? '#2563EB' : color} />
          ),
        }}
      /> 

      <MyTabs.Screen
        name={DriverScreenNames.DriverTripsScreen}
        component={TripsScreen}
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bus" size={20} color={color} />
          ),
        }}
      />

      <MyTabs.Screen
        name={DriverScreenNames.DriverActiveTripScreen}
        component={ActiveTripScreen}
        options={{
          tabBarLabel: 'Live',
          tabBarIcon: ({ color }) => (
            <Ionicons name="navigate-outline" size={20} color={color} />
          ),
        }}
      />

      <MyTabs.Screen
        name={DriverScreenNames.DriverProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={20} color={color} />
          ),
        }}
      /> */}

      {/* Admin screens  */}

      {/* <MyTabs.Screen
        name={AdminScreenNames.AdminDashboardScreen}
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={20} color={focused ? '#2563EB' : color} />
          ),
        }}
      />

      <MyTabs.Screen
        name={AdminScreenNames.AdminTripsScreen}
        component={FleetScreen}
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bus" size={20} color={color} />
            ),
            }}
            />
            
            
            
            <MyTabs.Screen
            name={AdminScreenNames.AdminUsersScreen}
            component={UsersScreen}
            options={{
              tabBarLabel: 'Users',
              tabBarIcon: ({ color }) => (
                <Feather name="users" size={20} color={color} />
                ),
                }}
                />
                
                <MyTabs.Screen
                name={AdminScreenNames.AdminProfileScreen}
                component={ProfileScreen}
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color }) => (
                    <Feather name="user" size={20} color={color} />
                    ),
                    }}
                    />
              <MyTabs.Screen
                name={AdminScreenNames.AdminManagementScreen}
                component={ManagementScreen}
                options={{
                  tabBarLabel: 'Manage',
                  tabBarIcon: ({ color }) => (
                    <Feather name="sliders" size={20} color={color} />
                  ),
                }}
              /> */}
    </MyTabs.Navigator>
  );
}
