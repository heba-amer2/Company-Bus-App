import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './TodaySchedule.styles';
import { DriverScreenNames } from '../../../../navigation/ScreenNames';
import ScheduleCard from './ScheduleCard';
import { RootStackType } from '../../../../navigation/RootStack';
import { StackNavigationProp } from '@react-navigation/stack';

type NavProps = StackNavigationProp<RootStackType>;

export default function TodaySchedule() {
  const navigation = useNavigation<NavProps>();

  const trips = [
    {
      id: 'morning',
      time: '07:30',
      period: 'AM',
      from: 'October',
      to: 'Smart Village',
      meta: 'BUS · 12 · 3 STOPS',
      isNext: true,
      onPress: () => navigation.navigate('MainStack', { screen: 'DriverTripDetailsScreen' }),
    },
    {
      id: 'evening',
      time: '05:00',
      period: 'PM',
      from: 'Smart Village',
      to: 'October',
      meta: 'BUS · 12 · 3 STOPS',
      onPress: () =>
        navigation.navigate('MainStack', {
          screen: 'BottomTabs',
          params: { screen: 'ActiveTripScreen' },
        }),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today's schedule</Text>
        <Text style={styles.sectionCount}>{trips.length} trips</Text>
      </View>

      {trips.map(trip => (
        <ScheduleCard key={trip.id} {...trip} />
      ))}
    </View>
  );
}
