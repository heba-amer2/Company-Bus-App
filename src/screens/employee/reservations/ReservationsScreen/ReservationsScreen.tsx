import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './ReservationsScreen.styles';
import ScreenHeader from '../../../../components/layout/ScreenHeader';
import ReservationListCard from './ReservationListCard';

const RESERVATIONS = [
  {
    bookingId: '#RES-89241',
    badgeLabel: 'CONFIRMED',
    from: 'October',
    to: 'Smart Village',
    date: 'Today',
    time: '07:30 AM',
    seat: '#12',
    bus: 'A-14',
  },
  {
    bookingId: '#RES-89102',
    badgeLabel: 'RESERVED',
    from: 'Smart Village',
    to: 'October',
    date: 'Today',
    time: '05:00 PM',
    seat: '#08',
    bus: 'BUS-12',
  },
  {
    bookingId: '#RES-88770',
    badgeLabel: 'COMPLETED',
    from: 'Maadi',
    to: 'Smart Village',
    date: '28 Sep',
    time: '08:15 AM',
    seat: '#04',
    bus: 'BUS-08',
    completed: true,
  },
];

export default function ReservationsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScreenHeader
        eyebrow="Your bookings"
        title="Reservations"
        icon={<Feather name="calendar" size={18} color="#FFFFFF" />}
        style={styles.header}
        headerStyles={styles}
      >
        <View style={styles.tabs}>
          <View style={[styles.tab, styles.tabActive]}>
            <Text style={[styles.tabText, styles.tabTextActive]}>Upcoming</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabText}>Completed</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabText}>Cancelled</Text>
          </View>
        </View>
      </ScreenHeader>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {RESERVATIONS.map(reservation => (
          <ReservationListCard key={reservation.bookingId} {...reservation} />
        ))}
      </ScrollView>
    </View>
  );
}
