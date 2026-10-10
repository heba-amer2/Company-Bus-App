import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './QuickActions.styles';

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
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.grid}>
        {ACTIONS.map(action => (
          <TouchableOpacity key={action.key} style={styles.actionCard} activeOpacity={0.8}>
            <View style={styles.iconBox}>{action.icon}</View>
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
