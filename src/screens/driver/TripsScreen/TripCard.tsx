import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './TripsScreen.styles';

type TripCardProps = {
  time: string;
  from: string;
  to: string;
  badgeText: string;
  badgeStyle?: StyleProp<ViewStyle>;
  badgeTextStyle?: StyleProp<TextStyle>;
  meta: React.ReactNode;
  footer?: React.ReactNode;
};

export default function TripCard({
  time,
  from,
  to,
  badgeText,
  badgeStyle,
  badgeTextStyle,
  meta,
  footer,
}: TripCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.timeRow}>
          <Feather name="clock" size={14} color="#334155" />
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <View style={[styles.statusBadge, badgeStyle]}>
          <Text style={[styles.statusBadgeText, badgeTextStyle]}>{badgeText}</Text>
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

      <View style={styles.metaRow}>{meta}</View>
      {footer}
    </View>
  );
}
