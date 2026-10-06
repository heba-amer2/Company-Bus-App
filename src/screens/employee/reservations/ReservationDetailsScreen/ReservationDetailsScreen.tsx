import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './ReservationDetailsScreen.styles';

export default function ReservationDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <Text style={{ fontSize: 16, color: '#0F172A', fontWeight: 'bold' }}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reservation Details</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statusCard}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>CONFIRMED</Text>
          </View>
          <Text style={styles.bookingId}>#RES-89241</Text>
          <Text style={styles.bookingDate}>Booked for Today, 05 Oct 2026</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Route & Schedule</Text>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDotContainer}>
              <View style={styles.dotGreen} />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTime}>07:30 AM (Pickup)</Text>
              <Text style={styles.timelineStation}>Main Office</Text>
              <Text style={styles.timelineCity}>Building 4, Gate B</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDotContainer}>
              <View style={styles.dotBlue} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTime}>08:15 AM (Drop-off)</Text>
              <Text style={styles.timelineStation}>Smart Village</Text>
              <Text style={styles.timelineCity}>Sector B2, Campus 1</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Trip Information</Text>

          <View style={styles.infoGrid}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Seat Number</Text>
              <Text style={styles.infoValue}>#12</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Bus Number</Text>
              <Text style={styles.infoValue}>A-14</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Bus Model</Text>
              <Text style={styles.infoValue}>Mercedes Sprinter</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Estimated Time</Text>
              <Text style={styles.infoValue}>45 mins</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Driver Details</Text>
          <View style={styles.driverRow}>
            <View style={styles.driverInfo}>
              <View style={styles.driverAvatar}>
                <Text style={styles.driverAvatarText}>M</Text>
              </View>
              <View>
                <Text style={styles.driverName}>Mahmoud Ali</Text>
                <Text style={styles.driverPhone}>+20 102 345 6789</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.callButton} activeOpacity={0.8}>
              <Text style={styles.callButtonText}>Call Driver</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.trackButton} activeOpacity={0.85}>
            <Text style={styles.trackButtonText}>Track Bus Live</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} activeOpacity={0.85}>
            <Text style={styles.cancelButtonText}>Cancel Reservation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
