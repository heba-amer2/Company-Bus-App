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
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './TripDetailsScreen.styles';

interface StopItem {
  id: string;
  order: number;
  name: string;
  address: string;
  scheduledTime: string;
  isCompleted: boolean;
  isNext?: boolean;
}

const STOPS: StopItem[] = [
  {
    id: '1',
    order: 1,
    name: 'Hosary Mosque Station',
    address: 'Central Axis, 6th of October City',
    scheduledTime: '07:30 AM · Departed',
    isCompleted: true,
  },
  {
    id: '2',
    order: 2,
    name: 'Juhayna Square Hub',
    address: 'Intersection of 26th July & Mehwar',
    scheduledTime: '07:45 AM · Departed',
    isCompleted: true,
  },
  {
    id: '3',
    order: 3,
    name: 'Mall of Arabia Pickup',
    address: 'Gate 5, Mehwar Road',
    scheduledTime: '07:55 AM · Boarding now',
    isCompleted: false,
    isNext: true,
  },
  {
    id: '4',
    order: 4,
    name: 'Smart Village Gate 1 (HQ)',
    address: 'Cairo-Alex Desert Rd, KM 28',
    scheduledTime: '08:15 AM · Estimated arrival',
    isCompleted: false,
  },
];

export default function TripDetailsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute<any>();
  const tripId = route.params?.tripId ?? '101';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) + 8 }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.headerTitleBlock}>
            <Text style={styles.headerEyebrow}>Trip #{tripId}</Text>
            <Text style={styles.headerTitle}>Trip Details</Text>
          </View>
          <View style={styles.headerRightPlaceholder} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Info Card */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.cardTitle}>October Line 1 → Smart Village</Text>
            <View style={[styles.statusBadge, { backgroundColor: '#DCFCE7' }]}>
              <Text style={[styles.statusBadgeText, { color: '#15803D' }]}>
                IN_PROGRESS
              </Text>
            </View>
          </View>
          <Text style={styles.cardSubtitle}>
            To Company HQ · Morning Regular Shift
          </Text>

          <View style={styles.infoGrid}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Scheduled Time</Text>
              <Text style={styles.infoValue}>07:30 AM - 08:15 AM</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Assigned Bus</Text>
              <Text style={styles.infoValue}>BUS-12 (Mercedes Sprinter)</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Driver</Text>
              <Text style={styles.infoValue}>Ahmed Mansour (+20 100 123 4567)</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Occupancy</Text>
              <Text style={styles.infoValue}>22 riders booked / 28 seats</Text>
            </View>
          </View>
        </View>

        {/* Live GPS Tracking */}
        <Text style={styles.sectionLabel}>Live telemetry</Text>
        <View style={styles.liveMapCard}>
          <View style={styles.liveHeader}>
            <View style={styles.livePulse} />
            <Text style={styles.liveTitle}>GPS Tracking Active</Text>
          </View>
          <Text style={styles.liveMeta}>
            Last ping: 30 seconds ago{'\n'}
            Location: 30.0482° N, 31.0125° E{'\n'}
            Speed: 58 km/h · Heading towards Smart Village
          </Text>
        </View>

        {/* Stops order */}
        <Text style={styles.sectionLabel}>Stop itinerary (4 stations)</Text>
        <View style={styles.card}>
          {STOPS.map((stop, index) => {
            const isLast = index === STOPS.length - 1;
            return (
              <View key={stop.id} style={styles.stopItem}>
                <View style={styles.stopLeft}>
                  {stop.isCompleted ? (
                    <View style={styles.stopBulletDone}>
                      <Feather name="check" size={12} color="#15803D" />
                    </View>
                  ) : stop.isNext ? (
                    <View style={styles.stopBulletNext}>
                      <MaterialCommunityIcons name="bus" size={12} color="#2563EB" />
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.stopBulletDone,
                        { backgroundColor: '#F1F5F9' },
                      ]}
                    >
                      <Text style={{ fontSize: 10, fontWeight: '700', color: '#64748B' }}>
                        {stop.order}
                      </Text>
                    </View>
                  )}
                  {!isLast && <View style={styles.stopLine} />}
                </View>
                <View style={styles.stopBody}>
                  <Text style={styles.stopTitle}>{stop.name}</Text>
                  <Text style={styles.stopTime}>{stop.scheduledTime}</Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* Action buttons */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
            <Text style={styles.secondaryButtonText}>Contact driver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>Broadcast update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
