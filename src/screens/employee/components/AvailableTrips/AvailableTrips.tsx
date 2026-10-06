import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './AvailableTrips.styles';

export default function AvailableTrips() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerSubtitle}>PLAN YOUR COMMUTE</Text>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Today's available trips</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
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
            <Text style={styles.seatsLeftText}>12 seats left</Text>
          </View>

          <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
            <Text style={styles.detailsButtonText}>View details</Text>
          </TouchableOpacity>
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
            <Text style={styles.seatsLeftText}>5 seats left</Text>
          </View>

          <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
            <Text style={styles.detailsButtonText}>View details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
