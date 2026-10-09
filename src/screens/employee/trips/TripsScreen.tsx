import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './TripsScreen.styles';

export default function TripsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerEyebrow}>Plan your commute</Text>
            <Text style={styles.headerTitle}>Available trips</Text>
          </View>
          <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.7}>
            <Feather name="sliders" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <Feather name="search" size={16} color="#94A3B8" />
          <Text style={styles.searchPlaceholder}>Search station or route</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateRow}
        >
          <View style={[styles.dateChip, styles.dateChipActive]}>
            <Text style={[styles.dateChipLabel, styles.dateChipLabelActive]}>
              Today
            </Text>
            <Text style={[styles.dateChipSub, styles.dateChipSubActive]}>
              29 Sep
            </Text>
          </View>
          <View style={styles.dateChip}>
            <Text style={styles.dateChipLabel}>Tomorrow</Text>
            <Text style={styles.dateChipSub}>30 Sep</Text>
          </View>
          <View style={styles.dateChip}>
            <Text style={styles.dateChipLabel}>Wednesday</Text>
            <Text style={styles.dateChipSub}>1 Oct</Text>
          </View>
        </ScrollView>

        <View style={styles.filterRow}>
          <View style={[styles.filterChip, styles.filterChipActive]}>
            <MaterialCommunityIcons name="bus" size={14} color="#2563EB" />
            <Text style={[styles.filterChipText, styles.filterChipTextActive]}>
              All routes
            </Text>
          </View>
          <View style={styles.filterChip}>
            <Feather name="sun" size={14} color="#64748B" />
            <Text style={styles.filterChipText}>Morning</Text>
          </View>
          <View style={styles.filterChip}>
            <Feather name="moon" size={14} color="#64748B" />
            <Text style={styles.filterChipText}>Evening</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>3 trips available</Text>

        <View style={styles.card}>
          <View style={styles.topRow}>
            <View style={styles.timeRow}>
              <Feather name="clock" size={14} color="#334155" />
              <Text style={styles.timeText}>07:30 AM</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>SCHEDULED</Text>
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
            <View style={styles.busInfo}>
              <MaterialCommunityIcons name="bus" size={14} color="#64748B" />
              <Text style={styles.busText}>BUS-12</Text>
            </View>
            <Text style={styles.durationText}>45 mins</Text>
            <Text style={styles.seatsLeftText}>12 seats left</Text>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
              <Text style={styles.detailsButtonText}>View details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reserveButton} activeOpacity={0.8}>
              <Text style={styles.reserveButtonText}>Reserve</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.topRow}>
            <View style={styles.timeRow}>
              <Feather name="clock" size={14} color="#334155" />
              <Text style={styles.timeText}>08:15 AM</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>SCHEDULED</Text>
            </View>
          </View>

          <View style={styles.routeRow}>
            <View style={styles.stationItem}>
              <View style={styles.ringBlue} />
              <Text style={styles.stationName}>Maadi</Text>
            </View>
            <View style={styles.dashedLine} />
            <View style={styles.stationItem}>
              <View style={styles.ringGreen} />
              <Text style={styles.stationName}>Smart Village</Text>
            </View>
          </View>

          <View style={styles.metaRow}>
            <View style={styles.busInfo}>
              <MaterialCommunityIcons name="bus" size={14} color="#64748B" />
              <Text style={styles.busText}>BUS-08</Text>
            </View>
            <Text style={styles.durationText}>50 mins</Text>
            <Text style={styles.seatsLeftText}>5 seats left</Text>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
              <Text style={styles.detailsButtonText}>View details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reserveButton} activeOpacity={0.8}>
              <Text style={styles.reserveButtonText}>Reserve</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.topRow}>
            <View style={styles.timeRow}>
              <Feather name="clock" size={14} color="#334155" />
              <Text style={styles.timeText}>05:00 PM</Text>
            </View>
            <View style={[styles.statusBadge, styles.statusBadgeEvening]}>
              <Text
                style={[styles.statusBadgeText, styles.statusBadgeTextEvening]}
              >
                EVENING
              </Text>
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
            <View style={styles.busInfo}>
              <MaterialCommunityIcons name="bus" size={14} color="#64748B" />
              <Text style={styles.busText}>BUS-12</Text>
            </View>
            <Text style={styles.durationText}>45 mins</Text>
            <Text style={styles.seatsLeftText}>18 seats left</Text>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
              <Text style={styles.detailsButtonText}>View details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reserveButton} activeOpacity={0.8}>
              <Text style={styles.reserveButtonText}>Reserve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
