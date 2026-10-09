import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './RouteRow.styles';

type RouteRowProps = {
  from: string;
  to: string;
  size?: 'sm' | 'md';
};

export default function RouteRow({ from, to, size = 'md' }: RouteRowProps) {
  const compact = size === 'sm';

  return (
    <View style={[styles.row, compact && styles.rowCompact]}>
      <View style={styles.station}>
        <View style={[styles.ring, styles.ringBlue, compact && styles.ringSm]} />
        <Text style={[styles.stationName, compact && styles.stationNameSm]}>{from}</Text>
      </View>

      <View style={[styles.line, compact && styles.lineSm]} />

      <View style={styles.station}>
        <View style={[styles.ring, styles.ringTeal, compact && styles.ringSm]} />
        <Text style={[styles.stationName, compact && styles.stationNameSm]}>{to}</Text>
      </View>
    </View>
  );
}
