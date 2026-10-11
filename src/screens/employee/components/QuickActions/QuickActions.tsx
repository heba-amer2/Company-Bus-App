import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { styles } from './QuickActions.styles';
import { EmployeeScreenNames } from '../../../../navigation/ScreenNames';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackType } from '../../../../navigation/RootStack';


type NavProps = StackNavigationProp<MainStackType>;

const ACTIONS = [
  {
    key: 'book',
    label: 'Book Trip',
    icon: <MaterialCommunityIcons name="ticket-outline" size={20} color="#2563EB" />,
  },
  {
    key: 'track',
    label: 'Track Bus',
    icon: <MaterialCommunityIcons name="bus" size={20} color="#2563EB" />,
  },
  {
    key: 'trips',
    label: 'My Trips',
    icon: <MaterialCommunityIcons name="history" size={20} color="#2563EB" />,
  },
  {
    key: 'preferences',
    label: 'Preferences',
    icon: <Feather name="sliders" size={20} color="#2563EB" />,
  },
];

export default function QuickActions() {
  const navigation = useNavigation<any>();

  const handlePress = (key: string) => {
    switch (key) {
      case 'book':
        navigation.navigate(EmployeeScreenNames.EmployeeTripsScreen);
        break;
      case 'track':
        navigation.navigate(EmployeeScreenNames.EmployeeTrackingScreen);
        break;
      case 'trips':
        navigation.navigate(EmployeeScreenNames.EmployeeReservationsScreen);
        break;
      case 'preferences':
        navigation.navigate(EmployeeScreenNames.EmployeeProfileScreen);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.grid}>
        {ACTIONS.map(action => (
          <TouchableOpacity
            key={action.key}
            style={styles.actionCard}
            activeOpacity={0.8}
            onPress={() => handlePress(action.key)}
          >
            <View style={styles.iconBox}>{action.icon}</View>
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
