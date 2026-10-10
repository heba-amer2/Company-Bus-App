import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './TripsScreen.styles';


type TripTab = 'today' | 'upcoming' | 'completed';
type ShiftFilter = 'all' | 'morning' | 'evening';

interface AdminTripItem {
  id: string;
  time: string;
  from: string;
  to: string;
  status: 'IN_PROGRESS' | 'SCHEDULED' | 'COMPLETED';
  bus: string;
  driver: string;
  seats: string;
  shift: 'morning' | 'evening';
}

const TRIPS_DATA: Record<TripTab, AdminTripItem[]> = {
  today: [
    {
      id: 'TRIP-101',
      time: '07:30 AM · 45 min',
      from: '6th October',
      to: 'Smart Village',
      status: 'IN_PROGRESS',
      bus: 'BUS-12',
      driver: 'Ahmed Mansour',
      seats: '22 / 28 seats',
      shift: 'morning',
    },
    {
      id: 'TRIP-102',
      time: '08:15 AM · 50 min',
      from: 'Maadi Ring Rd',
      to: 'Smart Village',
      status: 'SCHEDULED',
      bus: 'BUS-05',
      driver: 'Mohamed Ali',
      seats: '25 / 28 seats',
      shift: 'morning',
    },
    {
      id: 'TRIP-103',
      time: '04:30 PM · 40 min',
      from: 'Smart Village',
      to: '6th October',
      status: 'SCHEDULED',
      bus: 'BUS-12',
      driver: 'Ahmed Mansour',
      seats: '18 / 28 seats',
      shift: 'evening',
    },
    {
      id: 'TRIP-104',
      time: '05:00 PM · 55 min',
      from: 'Smart Village',
      to: 'Nasr City',
      status: 'SCHEDULED',
      bus: 'BUS-08',
      driver: 'Tarek Hassan',
      seats: '14 / 28 seats',
      shift: 'evening',
    },
  ],
  upcoming: [
    {
      id: 'TRIP-201',
      time: 'Tomorrow, 07:30 AM',
      from: '6th October',
      to: 'Smart Village',
      status: 'SCHEDULED',
      bus: 'BUS-12',
      driver: 'Ahmed Mansour',
      seats: '19 / 28 seats',
      shift: 'morning',
    },
    {
      id: 'TRIP-202',
      time: 'Tomorrow, 08:00 AM',
      from: 'Zayed Gate 4',
      to: 'Smart Village',
      status: 'SCHEDULED',
      bus: 'BUS-03',
      driver: 'Youssef Nabil',
      seats: '24 / 28 seats',
      shift: 'morning',
    },
    {
      id: 'TRIP-203',
      time: 'Tomorrow, 04:30 PM',
      from: 'Smart Village',
      to: 'Maadi',
      status: 'SCHEDULED',
      bus: 'BUS-05',
      driver: 'Mohamed Ali',
      seats: '16 / 28 seats',
      shift: 'evening',
    },
  ],
  completed: [
    {
      id: 'TRIP-091',
      time: 'Yesterday, 05:00 PM',
      from: 'Smart Village',
      to: '6th October',
      status: 'COMPLETED',
      bus: 'BUS-12',
      driver: 'Ahmed Mansour',
      seats: '28 / 28 seats',
      shift: 'evening',
    },
    {
      id: 'TRIP-092',
      time: 'Yesterday, 04:30 PM',
      from: 'Smart Village',
      to: 'Maadi',
      status: 'COMPLETED',
      bus: 'BUS-05',
      driver: 'Mohamed Ali',
      seats: '26 / 28 seats',
      shift: 'evening',
    },
  ],
};

export default function TripsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<TripTab>('today');
  const [shiftFilter, setShiftFilter] = useState<ShiftFilter>('all');

  const filteredTrips = TRIPS_DATA[activeTab].filter(item => {
    if (shiftFilter === 'all') return true;
    return item.shift === shiftFilter;
  });

  const getStatusBadgeColors = (status: AdminTripItem['status']) => {
    switch (status) {
      case 'IN_PROGRESS':
        return { bg: '#DCFCE7', text: '#15803D' };
      case 'SCHEDULED':
        return { bg: '#EFF6FF', text: '#2563EB' };
      case 'COMPLETED':
        return { bg: '#F1F5F9', text: '#475569' };
      default:
        return { bg: '#F1F5F9', text: '#64748B' };
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) + 8 }]}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerEyebrow}>Schedules</Text>
            <Text style={styles.headerTitle}>Trips</Text>
          </View>
          <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.8}>
            <Feather name="plus" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'today' && styles.tabActive]}
            onPress={() => setActiveTab('today')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'today' && styles.tabTextActive]}>
              Today (4)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'upcoming' && styles.tabActive]}
            onPress={() => setActiveTab('upcoming')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'upcoming' && styles.tabTextActive]}>
              Upcoming (3)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'completed' && styles.tabActive]}
            onPress={() => setActiveTab('completed')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'completed' && styles.tabTextActive]}>
              Past (2)
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Shift Filter Chips */}
        <View style={styles.filterRow}>
          <TouchableOpacity
            style={[styles.filterChip, shiftFilter === 'all' && styles.filterChipActive]}
            onPress={() => setShiftFilter('all')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.filterChipText,
                shiftFilter === 'all' && styles.filterChipTextActive,
              ]}
            >
              All Shifts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterChip, shiftFilter === 'morning' && styles.filterChipActive]}
            onPress={() => setShiftFilter('morning')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.filterChipText,
                shiftFilter === 'morning' && styles.filterChipTextActive,
              ]}
            >
              Morning
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterChip, shiftFilter === 'evening' && styles.filterChipActive]}
            onPress={() => setShiftFilter('evening')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.filterChipText,
                shiftFilter === 'evening' && styles.filterChipTextActive,
              ]}
            >
              Evening
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionLabel}>
          {filteredTrips.length} {activeTab} trips
        </Text>

        {filteredTrips.map(trip => {
          const badge = getStatusBadgeColors(trip.status);
          return (
            <View key={trip.id} style={styles.card}>
              <View style={styles.topRow}>
                <View style={styles.timeRow}>
                  <Feather name="clock" size={15} color="#0F172A" />
                  <Text style={styles.timeText}>{trip.time}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: badge.bg }]}>
                  <Text style={[styles.statusBadgeText, { color: badge.text }]}>
                    {trip.status}
                  </Text>
                </View>
              </View>

              <View style={styles.routeRow}>
                <View style={styles.stationItem}>
                  <View style={styles.ringBlue} />
                  <Text style={styles.stationName}>{trip.from}</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={styles.stationItem}>
                  <View style={styles.ringGreen} />
                  <Text style={styles.stationName}>{trip.to}</Text>
                </View>
              </View>

              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <MaterialCommunityIcons name="bus" size={15} color="#64748B" />
                  <Text style={styles.metaText}>{trip.bus}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Feather name="users" size={14} color="#64748B" />
                  <Text style={styles.metaText}>{trip.seats}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Feather name="user" size={14} color="#64748B" />
                  <Text style={styles.metaText}>{trip.driver}</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.primaryButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('AdminTripDetails', { tripId: trip.id })}
              >
                <Text style={styles.primaryButtonText}>View Trip Details</Text>
                <Feather name="arrow-right" size={15} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
