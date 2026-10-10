import React from 'react';
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
import { styles } from './DashboardScreen.styles';
import { AdminScreenNames } from '../../../navigation/ScreenNames';

interface MockTrip {
  id: string;
  from: string;
  to: string;
  time: string;
  status: 'IN_PROGRESS' | 'SCHEDULED' | 'COMPLETED';
  bus: string;
  driver: string;
  bookedSeats: number;
  totalSeats: number;
}

const TODAY_TRIPS: MockTrip[] = [
  {
    id: 'TRIP-101',
    from: '6th October Hub',
    to: 'Smart Village (HQ)',
    time: '07:30 AM · Morning Shift',
    status: 'IN_PROGRESS',
    bus: 'BUS-12',
    driver: 'Ahmed Mansour',
    bookedSeats: 22,
    totalSeats: 28,
  },
  {
    id: 'TRIP-102',
    from: 'Maadi Ring Road',
    to: 'Smart Village (HQ)',
    time: '08:15 AM · Morning Shift',
    status: 'SCHEDULED',
    bus: 'BUS-05',
    driver: 'Mohamed Ali',
    bookedSeats: 25,
    totalSeats: 28,
  },
  {
    id: 'TRIP-103',
    from: 'Smart Village (HQ)',
    to: '6th October Hub',
    time: '04:30 PM · Evening Return',
    status: 'SCHEDULED',
    bus: 'BUS-12',
    driver: 'Ahmed Mansour',
    bookedSeats: 18,
    totalSeats: 28,
  },
  {
    id: 'TRIP-104',
    from: 'Smart Village (HQ)',
    to: 'Nasr City Hub',
    time: '05:00 PM · Evening Return',
    status: 'SCHEDULED',
    bus: 'BUS-08',
    driver: 'Tarek Hassan',
    bookedSeats: 12,
    totalSeats: 14,
  },
];

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const getStatusBadgeStyle = (status: MockTrip['status']) => {
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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) + 12 }]}>
          <Text style={styles.headerDate}>TODAY · 10 OCT 2026</Text>
          <Text style={styles.greetingTitle}>Good day, Nour</Text>
          <Text style={styles.greetingSub}>
            Overview of company Trips, schedules & riders.
          </Text>
        </View>

        <View style={styles.body}>
          <View style={styles.statsGrid}>
            <TouchableOpacity
              style={styles.statCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(AdminScreenNames.AdminTripsScreen)}
            >
              <View style={styles.statIcon}>
                <Feather name="calendar" size={18} color="#2563EB" />
              </View>
              <Text style={styles.statValue}>18</Text>
              <Text style={styles.statLabel}>Trips Today</Text>
              <Text style={styles.statHint}>4 in progress</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.statCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(AdminScreenNames.AdminManagementScreen)}
            >
              <View style={[styles.statIcon, { backgroundColor: '#F0FDFA' }]}>
                <MaterialCommunityIcons name="bus" size={19} color="#0D9488" />
              </View>
              <Text style={styles.statValue}>14</Text>
              <Text style={styles.statLabel}>Fleet Buses</Text>
              <Text style={styles.statHint}>12 active on road</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.statCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(AdminScreenNames.AdminUsersScreen)}
            >
              <View style={[styles.statIcon, { backgroundColor: '#F5F3FF' }]}>
                <Feather name="users" size={17} color="#7C3AED" />
              </View>
              <Text style={styles.statValue}>185</Text>
              <Text style={styles.statLabel}>Users & Staff</Text>
              <Text style={styles.statHint}>14 drivers, 168 riders</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.statCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(AdminScreenNames.AdminProfileScreen)}
            >
              <View style={[styles.statIcon, { backgroundColor: '#FEF3C7' }]}>
                <Feather name="shield" size={17} color="#D97706" />
              </View>
              <Text style={styles.statValue}>98%</Text>
              <Text style={styles.statLabel}>Operations</Text>
              <Text style={styles.statHint}>Dispatch & reports</Text>
            </TouchableOpacity>
          </View>

          {/* Today's Trips Section Header */}
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Today's trips (4)</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(AdminScreenNames.AdminTripsScreen)}
            >
              <Text style={styles.sectionLink}>View all</Text>
            </TouchableOpacity>
          </View>

          {TODAY_TRIPS.map(trip => {
            const badge = getStatusBadgeStyle(trip.status);
            const occupancyRatio = trip.bookedSeats / trip.totalSeats;
            const occupancyPercentage = Math.round(occupancyRatio * 100);

            return (
              <TouchableOpacity
                key={trip.id}
                style={styles.card}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('AdminTripDetails', { tripId: trip.id })}
              >
                {/* Top Row: Time & Status Badge */}
                <View style={styles.cardTop}>
                  <View style={styles.timeRow}>
                    <Feather name="clock" size={14} color="#0F172A" />
                    <Text style={styles.timeText}>{trip.time}</Text>
                  </View>
                  <View style={[styles.statusBadge, { backgroundColor: badge.bg }]}>
                    <Text style={[styles.statusBadgeText, { color: badge.text }]}>
                      {trip.status}
                    </Text>
                  </View>
                </View>

                {/* Route Row: Origin to Destination with rings and dashed divider */}
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

                {/* Meta Row: Bus, Driver, Seat count */}
                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <MaterialCommunityIcons name="bus" size={15} color="#64748B" />
                    <Text style={styles.metaText}>{trip.bus}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Feather name="user" size={14} color="#64748B" />
                    <Text style={styles.metaText}>{trip.driver}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Feather name="users" size={14} color="#64748B" />
                    <Text style={styles.metaText}>
                      {trip.bookedSeats}/{trip.totalSeats} seats
                    </Text>
                  </View>
                </View>

                {/* Visual Occupancy Bar */}
                <View style={styles.occupancyRow}>
                  <View style={styles.occupancyHeader}>
                    <Text style={styles.occupancyLabel}>Occupancy</Text>
                    <Text style={styles.occupancyValue}>
                      {occupancyPercentage}% ({trip.totalSeats - trip.bookedSeats} left)
                    </Text>
                  </View>
                  <View style={styles.occupancyBarBg}>
                    <View
                      style={[
                        styles.occupancyBarFill,
                        {
                          width: `${occupancyPercentage}%`,
                          backgroundColor:
                            occupancyPercentage > 90 ? '#D97706' : '#2563EB',
                        },
                      ]}
                    />
                  </View>
                </View>

                {/* Footer with chevron */}
                <View style={styles.cardFooter}>
                  <Text style={styles.cardFooterText}>View live telemetry & stops</Text>
                  <Feather name="chevron-right" size={16} color="#2563EB" />
                </View>
              </TouchableOpacity>
            );
          })}

          
        </View>
      </ScrollView>
    </View>
  );
}
