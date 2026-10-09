import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './HomeHeader.styles';

export default function HomeHeader() {
  const insets = useSafeAreaInsets();
  const [onDuty, setOnDuty] = useState(true);

  return (
    <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) + 12 }]}>
      <StatusBar barStyle="light-content" />

      <View style={styles.headerTop}>
        <View>
          <Text style={styles.headerDate}>Friday, 9 October</Text>
          <Text style={styles.greetingTitle}>Good evening, Ahmed</Text>
        </View>

        <TouchableOpacity style={styles.notificationBtn} activeOpacity={0.75}>
          <Feather name="bell" size={20} color="#FFFFFF" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <View style={styles.dutyRow}>
        <View style={styles.dutyLeft}>
          <View style={[styles.dutyDot, !onDuty && styles.dutyDotOff]} />
          <View>
            <Text style={styles.dutyTitle}>{onDuty ? 'On duty' : 'Off duty'}</Text>
            <Text style={styles.dutySubtitle}>
              {onDuty ? 'Visible to dispatch · BUS-12' : 'You will not receive trip alerts'}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.dutyToggle, !onDuty && styles.dutyToggleOff]}
          activeOpacity={0.85}
          onPress={() => setOnDuty(value => !value)}
        >
          <Text style={styles.dutyToggleText}>{onDuty ? 'ONLINE' : 'GO ONLINE'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
