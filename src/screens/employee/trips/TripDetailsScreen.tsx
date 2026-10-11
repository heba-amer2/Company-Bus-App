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
import { styles } from './TripDetailsScreen.styles';
import { EmployeeScreenNames } from '../../../navigation/ScreenNames';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackType } from '../../../navigation/RootStack';
import BookingConfirmModal from '../components/BookingConfirmModal/BookingConfirmModal';

type NavProps = StackNavigationProp<MainStackType>;

interface ItineraryStop {
  id: string;
  order: number;
  name: string;
  time: string;
  address: string;
  isPickup?: boolean;
  isDropoff?: boolean;
}

const STOPS: ItineraryStop[] = [
  {
    id: '1',
    order: 1,
    name: 'Hosary Mosque Hub',
    time: '07:30 AM',
    address: 'Central Axis, Gate 2',
    isPickup: true,
  },
  {
    id: '2',
    order: 2,
    name: 'Juhayna Square Station',
    time: '07:42 AM',
    address: 'Mehwar Road junction',
  },
  {
    id: '3',
    order: 3,
    name: 'Mall of Arabia Hub',
    time: '07:54 AM',
    address: 'Gate 5 entrance',
  },
  {
    id: '4',
    order: 4,
    name: 'Smart Village (HQ)',
    time: '08:15 AM',
    address: 'Building B12, Gate 1',
    isDropoff: true,
  },
];

export default function TripDetailsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavProps>();
  const [confirmModal, setConfirmModal] = useState(false);

  const handleConfirmBooking = () => {
    setConfirmModal(false);
    navigation.navigate(EmployeeScreenNames.EmployeeReservationDetailsScreen);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 16) + 8 }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Feather name="chevron-left" size={24} color="#0F172A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trip Details</Text>
        <TouchableOpacity style={styles.headerRight} activeOpacity={0.7}>
          <Feather name="share-2" size={17} color="#2563EB" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Route Card */}
        <View style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <View style={styles.badge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>SCHEDULED</Text>
            </View>
            <View style={styles.durationPill}>
              <Feather name="clock" size={12} color="#64748B" />
              <Text style={styles.durationText}>45 mins</Text>
            </View>
          </View>

          {/* Visual Route */}
          <View style={styles.routeBlock}>
            {/* Origin */}
            <View style={styles.stationRow}>
              <View style={styles.stationRingBlue} />
              <View style={styles.stationContent}>
                <Text style={styles.stationLabel}>Departure · Pickup</Text>
                <Text style={styles.stationName}>Hosary Mosque Station</Text>
                <Text style={styles.stationTime}>07:30 AM</Text>
              </View>
            </View>

            {/* Connecting line with bus icon */}
            <View style={styles.routeLineContainer}>
              <View style={styles.routeLine} />
            </View>

            {/* Destination */}
            <View style={styles.stationRow}>
              <View style={styles.stationRingGreen} />
              <View style={styles.stationContent}>
                <Text style={styles.stationLabel}>Destination · Drop-off</Text>
                <Text style={styles.stationName}>Smart Village Gate 1 (HQ)</Text>
                <Text style={[styles.stationTime, { color: '#0D9488' }]}>08:15 AM</Text>
              </View>
            </View>
          </View>

          <View style={styles.heroDivider} />

          {/* Key Stats */}
          <View style={styles.heroStatsRow}>
            <View style={styles.heroStatItem}>
              <Text style={styles.heroStatLabel}>Bus Number</Text>
              <Text style={styles.heroStatValue}>BUS-12</Text>
            </View>
            <View style={styles.heroStatItem}>
              <Text style={styles.heroStatLabel}>Shift</Text>
              <Text style={styles.heroStatValue}>Morning</Text>
            </View>
            <View style={styles.heroStatItem}>
              <Text style={styles.heroStatLabel}>Seats Left</Text>
              <Text style={[styles.heroStatValue, { color: '#2563EB' }]}>
                12 of 28
              </Text>
            </View>
          </View>
        </View>

        {/* Route Stops Timeline */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Route Itinerary</Text>
            <Text style={styles.cardSubtitle}>4 stations</Text>
          </View>

          {STOPS.map((stop, index) => {
            const isLast = index === STOPS.length - 1;
            return (
              <View key={stop.id} style={styles.stopItem}>
                <View style={styles.stopLeft}>
                  <View style={styles.stopNumberCircle}>
                    <Text style={styles.stopNumberText}>{stop.order}</Text>
                  </View>
                  {!isLast && <View style={styles.stopLine} />}
                </View>

                <View style={styles.stopBody}>
                  <Text style={styles.stopName}>{stop.name}</Text>
                  <Text style={styles.stopAddress}>{stop.address}</Text>
                  <Text style={styles.stopTimeBadge}>{stop.time}</Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* Driver Profile Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Assigned Driver & Bus</Text>
          </View>

          <View style={styles.driverRow}>
            <View style={styles.driverAvatar}>
              <Text style={styles.driverAvatarText}>A</Text>
            </View>
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>Captain Ahmed Mansour</Text>
              <Text style={styles.driverMeta}>
                Mercedes Sprinter 2023 · Plate ق ج د 1234
              </Text>
            </View>
            <TouchableOpacity style={styles.callButton} activeOpacity={0.8}>
              <Feather name="phone" size={18} color="#2563EB" />
            </TouchableOpacity>
          </View>
        </View>

       
      </ScrollView>

      {/* Floating Bottom Booking Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarInfo}>
          <Text style={styles.bottomBarLabel}>Availability</Text>
          <Text style={styles.bottomBarValue}>12 seats remaining</Text>
        </View>

        <TouchableOpacity
          style={styles.reserveButton}
          activeOpacity={0.85}
          onPress={() => setConfirmModal(true)}
        >
          <Text style={styles.reserveButtonText}>Reserve a Seat</Text>
          <Feather name="arrow-right" size={16} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <BookingConfirmModal
        visible={confirmModal}
        onClose={() => setConfirmModal(false)}
        onConfirm={handleConfirmBooking}
        trip={{
          from: 'Hosary Mosque Hub',
          to: 'Smart Village (HQ)',
          time: '07:30 AM',
          bus: 'BUS-12',
          duration: '45 mins',
        }}
      />
    </View>
  );
}