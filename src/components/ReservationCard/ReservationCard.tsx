import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './ReservationCard.styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../navigation/ScreenNames';

export default function ReservationCard() {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Upcoming Trip</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Confirmed</Text>
        </View>
      </View>

      <View style={styles.routeRow}>
        <View style={styles.stationBlock}>
          <Text style={styles.stationLabel}>From</Text>
          <Text style={styles.stationName}>Main Office</Text>
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

      <TouchableOpacity
        style={styles.cardButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate(ScreenNames.ReservationDetailsScreen)}
      >
        <Text style={styles.cardButtonText}>View Reservation</Text>
      </TouchableOpacity>
    </View>
  );
}
