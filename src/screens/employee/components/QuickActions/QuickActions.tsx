import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './QuickActions.styles';

export default function QuickActions() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name="ticket-outline" size={20} color="#2563EB" />
          </View>
          <Text style={styles.actionLabel}>Book Trip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name="bus" size={20} color="#2563EB" />
          </View>
          <Text style={styles.actionLabel}>Track Bus</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name="history" size={20} color="#2563EB" />
          </View>
          <Text style={styles.actionLabel}>My Trips</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
          <View style={styles.iconBox}>
            <Feather name="sliders" size={20} color="#2563EB" />
          </View>
          <Text style={styles.actionLabel}>Preferences</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
