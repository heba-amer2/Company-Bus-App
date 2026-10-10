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
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackType } from '../../../navigation/RootStack';
import ScreenHeader from '../../../components/layout/ScreenHeader';
import TripCard from './TripCard';

type NavProps = StackNavigationProp<RootStackType>;

type TripTab = 'upcoming' | 'completed';

export default function TripsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavProps>();
  const [tab, setTab] = useState<TripTab>('upcoming');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScreenHeader
        eyebrow="Assigned routes"
        title="My trips"
        icon={<Feather name="calendar" size={18} color="#FFFFFF" />}
        style={[styles.header, { paddingTop: Math.max(insets.top, 18) + 8 }]}
        headerStyles={styles}
      >
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
      </ScreenHeader>

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

            <TripCard
              time="07:30 AM"
              from="October"
              to="Smart Village"
              badgeText="NEXT"
              badgeStyle={styles.statusBadgeActive}
              badgeTextStyle={styles.statusBadgeTextActive}
              meta={
                <>
                  <View style={styles.metaItem}>
                    <MaterialCommunityIcons name="bus" size={14} color="#64748B" />
                    <Text style={styles.metaText}>BUS-12</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Feather name="users" size={13} color="#64748B" />
                    <Text style={styles.metaText}>12 riders</Text>
                  </View>
                  <Text style={styles.metaText}>3 stops · 45 min</Text>
                </>
              }
              footer={
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
              }
            />

            <TripCard
              time="05:00 PM"
              from="Smart Village"
              to="October"
              badgeText="SCHEDULED"
              meta={
                <>
                  <View style={styles.metaItem}>
                    <MaterialCommunityIcons name="bus" size={14} color="#64748B" />
                    <Text style={styles.metaText}>BUS-12</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Feather name="users" size={13} color="#64748B" />
                    <Text style={styles.metaText}>18 riders</Text>
                  </View>
                  <Text style={styles.metaText}>3 stops · 45 min</Text>
                </>
              }
              footer={
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
              }
            />
          </>
        ) : (
          <>
            <Text style={styles.sectionLabel}>Yesterday</Text>
            <TripCard
              time="07:30 AM"
              from="October"
              to="Smart Village"
              badgeText="COMPLETED"
              badgeStyle={styles.statusBadgeDone}
              badgeTextStyle={styles.statusBadgeTextDone}
              meta={
                <>
                  <Text style={styles.metaText}>BUS-12</Text>
                  <Text style={styles.metaText}>11 boarded</Text>
                  <Text style={styles.metaText}>On time</Text>
                </>
              }
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}
