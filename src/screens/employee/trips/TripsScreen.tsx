import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './TripsScreen.styles';
import ScreenHeader from '../../../components/layout/ScreenHeader';
import TripCard from './TripCard';

const TRIPS = [
  {
    time: '07:30 AM',
    from: 'October',
    to: 'Smart Village',
    bus: 'BUS-12',
    duration: '45 mins',
    seatsLeft: '12 seats left',
    badgeLabel: 'SCHEDULED',
  },
  {
    time: '08:15 AM',
    from: 'Maadi',
    to: 'Smart Village',
    bus: 'BUS-08',
    duration: '50 mins',
    seatsLeft: '5 seats left',
    badgeLabel: 'SCHEDULED',
  },
  {
    time: '05:00 PM',
    from: 'Smart Village',
    to: 'October',
    bus: 'BUS-12',
    duration: '45 mins',
    seatsLeft: '18 seats left',
    badgeLabel: 'EVENING',
    evening: true,
  },
];

export default function TripsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScreenHeader
        eyebrow="Plan your commute"
        title="Available trips"
        icon={<Feather name="sliders" size={18} color="#FFFFFF" />}
        style={styles.header}
        headerStyles={styles}
      >
        <View style={styles.searchBox}>
          <Feather name="search" size={16} color="#94A3B8" />
          <Text style={styles.searchPlaceholder}>Search station or route</Text>
        </View>
      </ScreenHeader>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateRow}
        >
          <View style={[styles.dateChip, styles.dateChipActive]}>
            <Text style={[styles.dateChipLabel, styles.dateChipLabelActive]}>
              Today
            </Text>
            <Text style={[styles.dateChipSub, styles.dateChipSubActive]}>
              29 Sep
            </Text>
          </View>
          <View style={styles.dateChip}>
            <Text style={styles.dateChipLabel}>Tomorrow</Text>
            <Text style={styles.dateChipSub}>30 Sep</Text>
          </View>
          <View style={styles.dateChip}>
            <Text style={styles.dateChipLabel}>Wednesday</Text>
            <Text style={styles.dateChipSub}>1 Oct</Text>
          </View>
        </ScrollView>

        <View style={styles.filterRow}>
          <View style={[styles.filterChip, styles.filterChipActive]}>
            <MaterialCommunityIcons name="bus" size={14} color="#2563EB" />
            <Text style={[styles.filterChipText, styles.filterChipTextActive]}>
              All routes
            </Text>
          </View>
          <View style={styles.filterChip}>
            <Feather name="sun" size={14} color="#64748B" />
            <Text style={styles.filterChipText}>Morning</Text>
          </View>
          <View style={styles.filterChip}>
            <Feather name="moon" size={14} color="#64748B" />
            <Text style={styles.filterChipText}>Evening</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>3 trips available</Text>

        {TRIPS.map(trip => (
          <TripCard key={`${trip.time}-${trip.from}`} {...trip} />
        ))}
      </ScrollView>
    </View>
  );
}
