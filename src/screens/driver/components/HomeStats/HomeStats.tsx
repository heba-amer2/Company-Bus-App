import React from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './HomeStats.styles';

const STATS = [
  {
    key: 'trips',
    value: '2',
    label: 'Trips today',
    icon: <MaterialCommunityIcons name="bus-clock" size={18} color="#2563EB" />,
  },
  {
    key: 'passengers',
    value: '18',
    label: 'Passengers',
    icon: <Feather name="users" size={18} color="#0D9488" />,
  },
  {
    key: 'next',
    value: '07:30',
    label: 'Next start',
    icon: <Feather name="clock" size={18} color="#D97706" />,
  },
];

export default function HomeStats() {
  return (
    <View style={styles.statsRow}>
      {STATS.map(stat => (
        <View key={stat.key} style={styles.statCard}>
          {stat.icon}
          <Text style={styles.statValue}>{stat.value}</Text>
          <Text style={styles.statLabel}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}
