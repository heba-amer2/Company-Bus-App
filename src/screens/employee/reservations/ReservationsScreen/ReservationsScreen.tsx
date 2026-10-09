import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './ReservationsScreen.styles';

export default function ReservationsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerEyebrow}>Your bookings</Text>
            <Text style={styles.headerTitle}>Reservations</Text>
          </View>
          <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.7}>
            <Feather name="calendar" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

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
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.bookingId}>#RES-89241</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>CONFIRMED</Text>
            </View>
          </View>

          <View style={styles.routeRow}>
            <View style={styles.stationBlock}>
              <Text style={styles.stationLabel}>From</Text>
              <Text style={styles.stationName}>October</Text>
            </View>
            <View style={styles.routeArrow}>
              <Feather name="arrow-right" size={14} color="#3B82F6" />
            </View>
            <View style={styles.stationBlock}>
              <Text style={styles.stationLabel}>To</Text>
              <Text style={styles.stationName}>Smart Village</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Date</Text>
              <Text style={styles.infoValue}>Today</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Time</Text>
              <Text style={styles.infoValue}>07:30 AM</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Seat</Text>
              <Text style={styles.infoValue}>#12</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Bus</Text>
              <Text style={styles.infoValue}>A-14</Text>
            </View>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
              <Text style={styles.detailsButtonText}>View details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trackButton} activeOpacity={0.8}>
              <Text style={styles.trackButtonText}>Track bus</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.bookingId}>#RES-89102</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>RESERVED</Text>
            </View>
          </View>

          <View style={styles.routeRow}>
            <View style={styles.stationBlock}>
              <Text style={styles.stationLabel}>From</Text>
              <Text style={styles.stationName}>Smart Village</Text>
            </View>
            <View style={styles.routeArrow}>
              <Feather name="arrow-right" size={14} color="#3B82F6" />
            </View>
            <View style={styles.stationBlock}>
              <Text style={styles.stationLabel}>To</Text>
              <Text style={styles.stationName}>October</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Date</Text>
              <Text style={styles.infoValue}>Today</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Time</Text>
              <Text style={styles.infoValue}>05:00 PM</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Seat</Text>
              <Text style={styles.infoValue}>#08</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Bus</Text>
              <Text style={styles.infoValue}>BUS-12</Text>
            </View>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
              <Text style={styles.detailsButtonText}>View details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trackButton} activeOpacity={0.8}>
              <Text style={styles.trackButtonText}>Track bus</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.bookingId}>#RES-88770</Text>
            <View style={[styles.badge, styles.badgeCompleted]}>
              <Text style={[styles.badgeText, styles.badgeTextCompleted]}>
                COMPLETED
              </Text>
            </View>
          </View>

          <View style={styles.routeRow}>
            <View style={styles.stationBlock}>
              <Text style={styles.stationLabel}>From</Text>
              <Text style={styles.stationName}>Maadi</Text>
            </View>
            <View style={styles.routeArrow}>
              <Feather name="arrow-right" size={14} color="#3B82F6" />
            </View>
            <View style={styles.stationBlock}>
              <Text style={styles.stationLabel}>To</Text>
              <Text style={styles.stationName}>Smart Village</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Date</Text>
              <Text style={styles.infoValue}>28 Sep</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Time</Text>
              <Text style={styles.infoValue}>08:15 AM</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Seat</Text>
              <Text style={styles.infoValue}>#04</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Bus</Text>
              <Text style={styles.infoValue}>BUS-08</Text>
            </View>
          </View>

          <Text style={styles.completedNote}>Trip completed successfully</Text>
        </View>
      </ScrollView>
    </View>
  );
}
