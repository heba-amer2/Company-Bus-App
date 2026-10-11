import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AvailableTrips.styles';
import AvailableTripCard from './AvailableTripCard';
import { EmployeeScreenNames } from '../../../../navigation/ScreenNames';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackType } from '../../../../navigation/RootStack';


type NavProps = StackNavigationProp<MainStackType>;

const TRIPS = [
  {
    time: '07:30 AM',
    from: 'October',
    to: 'Smart Village',
    bus: 'BUS-12',
    seatsLeft: '12 seats left',
  },
  {
    time: '08:15 AM',
    from: 'Maadi',
    to: 'Smart Village',
    bus: 'BUS-08',
    seatsLeft: '5 seats left',
  },
];

export default function AvailableTrips() {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.headerSubtitle}>PLAN YOUR COMMUTE</Text>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Today's available trips</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate('BottomTabs', {
              screen: EmployeeScreenNames.EmployeeTripsScreen,
            })
          }
        >
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {TRIPS.map(trip => (
          <AvailableTripCard key={`${trip.time}-${trip.from}`} {...trip} />
        ))}
      </ScrollView>
    </View>
  );
}
