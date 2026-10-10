import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './ReservationsScreen.styles';

type ReservationListCardProps = {
  bookingId: string;
  badgeLabel: string;
  from: string;
  to: string;
  date: string;
  time: string;
  seat: string;
  bus: string;
  completed?: boolean;
};

export default function ReservationListCard({
  bookingId,
  badgeLabel,
  from,
  to,
  date,
  time,
  seat,
  bus,
  completed,
}: ReservationListCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.bookingId}>{bookingId}</Text>
        <View style={[styles.badge, completed ? styles.badgeCompleted : null]}>
          <Text style={[styles.badgeText, completed ? styles.badgeTextCompleted : null]}>
            {badgeLabel}
          </Text>
        </View>
      </View>

      <View style={styles.routeRow}>
        <View style={styles.stationBlock}>
          <Text style={styles.stationLabel}>From</Text>
          <Text style={styles.stationName}>{from}</Text>
        </View>
        <View style={styles.routeArrow}>
          <Feather name="arrow-right" size={14} color="#3B82F6" />
        </View>
        <View style={styles.stationBlock}>
          <Text style={styles.stationLabel}>To</Text>
          <Text style={styles.stationName}>{to}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Date</Text>
          <Text style={styles.infoValue}>{date}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Time</Text>
          <Text style={styles.infoValue}>{time}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Seat</Text>
          <Text style={styles.infoValue}>{seat}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Bus</Text>
          <Text style={styles.infoValue}>{bus}</Text>
        </View>
      </View>

      {completed ? (
        <Text style={styles.completedNote}>Trip completed successfully</Text>
      ) : (
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
            <Text style={styles.detailsButtonText}>View details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trackButton} activeOpacity={0.8}>
            <Text style={styles.trackButtonText}>Track bus</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
