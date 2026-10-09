import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './TripsScreen.styles';
import { DriverScreenNames } from '../../../navigation/ScreenNames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackType } from '../../../navigation/RootStack';

type NavProps = StackNavigationProp<RootStackType>;

type TripTab = 'upcoming' | 'completed';

export default function TripsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavProps>();
  const [tab, setTab] = useState<TripTab>('upcoming');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) + 8 }]}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerEyebrow}>Assigned routes</Text>
            <Text style={styles.headerTitle}>My trips</Text>
          </View>
          <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.7}>
            <Feather name="calendar" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, tab === 'upcoming' && styles.tabActive]}
            onPress={() => setTab('upcoming')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tab === 'upcoming' && styles.tabTextActive]}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, tab === 'completed' && styles.tabActive]}
            onPress={() => setTab('completed')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tab === 'completed' && styles.tabTextActive]}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {tab === 'upcoming' ? (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.dateRow}
            >
              <View style={[styles.dateChip, styles.dateChipActive]}>
                <Text style={[styles.dateChipLabel, styles.dateChipLabelActive]}>Today</Text>
                <Text style={[styles.dateChipSub, styles.dateChipSubActive]}>9 Oct</Text>
              </View>
              <View style={styles.dateChip}>
                <Text style={styles.dateChipLabel}>Tomorrow</Text>
                <Text style={styles.dateChipSub}>10 Oct</Text>
              </View>
              <View style={styles.dateChip}>
                <Text style={styles.dateChipLabel}>Sunday</Text>
                <Text style={styles.dateChipSub}>11 Oct</Text>
              </View>
            </ScrollView>

            <Text style={styles.sectionLabel}>2 assigned trips</Text>

            <View style={styles.card}>
              <View style={styles.topRow}>
                <View style={styles.timeRow}>
                  <Feather name="clock" size={14} color="#334155" />
                  <Text style={styles.timeText}>07:30 AM</Text>
                </View>
                <View style={[styles.statusBadge, styles.statusBadgeActive]}>
                  <Text style={[styles.statusBadgeText, styles.statusBadgeTextActive]}>
                    NEXT
                  </Text>
                </View>
              </View>

              <View style={styles.routeRow}>
                <View style={styles.stationItem}>
                  <View style={styles.ringBlue} />
                  <Text style={styles.stationName}>October</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={styles.stationItem}>
                  <View style={styles.ringGreen} />
                  <Text style={styles.stationName}>Smart Village</Text>
                </View>
              </View>

              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <MaterialCommunityIcons name="bus" size={14} color="#64748B" />
                  <Text style={styles.metaText}>BUS-12</Text>
                </View>
                <View style={styles.metaItem}>
                  <Feather name="users" size={13} color="#64748B" />
                  <Text style={styles.metaText}>12 riders</Text>
                </View>
                <Text style={styles.metaText}>3 stops · 45 min</Text>
              </View>

              <View style={styles.actionsRow}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate('MainStack', { screen: 'DriverTripDetailsScreen' })
                  }
                >
                  <Text style={styles.detailsButtonText}>View details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.primaryButton}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate('MainStack', { screen: 'BottomTabs', params: { screen: 'ActiveTripScreen' } })
                  }
                >
                  <Text style={styles.primaryButtonText}>Go to trip</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.topRow}>
                <View style={styles.timeRow}>
                  <Feather name="clock" size={14} color="#334155" />
                  <Text style={styles.timeText}>05:00 PM</Text>
                </View>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusBadgeText}>SCHEDULED</Text>
                </View>
              </View>

              <View style={styles.routeRow}>
                <View style={styles.stationItem}>
                  <View style={styles.ringBlue} />
                  <Text style={styles.stationName}>Smart Village</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={styles.stationItem}>
                  <View style={styles.ringGreen} />
                  <Text style={styles.stationName}>October</Text>
                </View>
              </View>

              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <MaterialCommunityIcons name="bus" size={14} color="#64748B" />
                  <Text style={styles.metaText}>BUS-12</Text>
                </View>
                <View style={styles.metaItem}>
                  <Feather name="users" size={13} color="#64748B" />
                  <Text style={styles.metaText}>18 riders</Text>
                </View>
                <Text style={styles.metaText}>3 stops · 45 min</Text>
              </View>

              <View style={styles.actionsRow}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate('MainStack', { screen: 'DriverTripDetailsScreen' })
                  }
                >
                  <Text style={styles.detailsButtonText}>View details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
                  <Text style={styles.primaryButtonText}>Prepare</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.sectionLabel}>Yesterday</Text>
            <View style={styles.card}>
              <View style={styles.topRow}>
                <View style={styles.timeRow}>
                  <Feather name="clock" size={14} color="#334155" />
                  <Text style={styles.timeText}>07:30 AM</Text>
                </View>
                <View style={[styles.statusBadge, styles.statusBadgeDone]}>
                  <Text style={[styles.statusBadgeText, styles.statusBadgeTextDone]}>
                    COMPLETED
                  </Text>
                </View>
              </View>
              <View style={styles.routeRow}>
                <View style={styles.stationItem}>
                  <View style={styles.ringBlue} />
                  <Text style={styles.stationName}>October</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={styles.stationItem}>
                  <View style={styles.ringGreen} />
                  <Text style={styles.stationName}>Smart Village</Text>
                </View>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaText}>BUS-12</Text>
                <Text style={styles.metaText}>11 boarded</Text>
                <Text style={styles.metaText}>On time</Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}
