import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './AvailableTrips.styles';

type AvailableTripCardProps = {
  time: string;
  from: string;
  to: string;
  bus: string;
  seatsLeft: string;
};

export default function AvailableTripCard({
  time,
  from,
  to,
  bus,
  seatsLeft,
}: AvailableTripCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.timeRow}>
          <Feather name="clock" size={14} color="#334155" />
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusBadgeText}>SCHEDULED</Text>
        </View>
      </View>

      <View style={styles.routeRow}>
        <View style={styles.stationItem}>
          <View style={styles.ringBlue} />
          <Text style={styles.stationName}>{from}</Text>
        </View>
        <View style={styles.dashedLine} />
        <View style={styles.stationItem}>
          <View style={styles.ringGreen} />
          <Text style={styles.stationName}>{to}</Text>
        </View>
      </View>

      <View style={styles.metaRow}>
        <View style={styles.busInfo}>
          <MaterialCommunityIcons name="bus" size={14} color="#64748B" />
          <Text style={styles.busText}>{bus}</Text>
        </View>
        <Text style={styles.seatsLeftText}>{seatsLeft}</Text>
      </View>

      <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
        <Text style={styles.detailsButtonText}>View details</Text>
      </TouchableOpacity>
    </View>
  );
}
