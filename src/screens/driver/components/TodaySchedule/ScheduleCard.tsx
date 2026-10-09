import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TodaySchedule.styles';
import RouteRow from '../RouteRow/RouteRow';

export type ScheduleCardProps = {
  time: string;
  period: string;
  from: string;
  to: string;
  meta: string;
  isNext?: boolean;
  onPress: () => void;
};

export default function ScheduleCard({
  time,
  period,
  from,
  to,
  meta,
  isNext,
  onPress,
}: ScheduleCardProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.timeCol}>
        <Text style={styles.timeText}>{time}</Text>
        <Text style={styles.periodText}>{period}</Text>
      </View>

      <View style={styles.cardBody}>
        <RouteRow from={from} to={to} size="sm" />
        <Text style={styles.metaText}>{meta}</Text>
      </View>

      {isNext ? (
        <View style={styles.nextBadge}>
          <Text style={styles.nextBadgeText}>NEXT</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
