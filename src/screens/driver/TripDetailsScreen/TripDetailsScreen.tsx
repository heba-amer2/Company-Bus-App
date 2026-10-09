import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { styles } from './TripDetailsScreen.styles';
import { DriverScreenNames } from '../../../navigation/ScreenNames';
import { StackNames } from '../../../navigation/StackNames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackType } from '../../../navigation/RootStack';

type NavProps = StackNavigationProp<RootStackType>;

const passengers = [
  { name: 'Toka Adel', stop: 'October Gate 2', seat: 'A12' },
  { name: 'Mahmoud Ali', stop: 'Sheikh Zayed', seat: 'B04' },
  { name: 'Sara Nabil', stop: 'October Gate 2', seat: 'A07' },
];

export default function TripDetailsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 12) + 8 }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Feather name="chevron-left" size={22} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trip details</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statusCard}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>SCHEDULED</Text>
          </View>
          <Text style={styles.bookingId}>Morning commute</Text>
          <Text style={styles.bookingDate}>Today, 9 Oct · 07:30 AM · BUS-12</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Stops</Text>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDotContainer}>
              <View style={styles.dotBlue} />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTime}>07:30 AM · Pickup</Text>
              <Text style={styles.timelineStation}>October</Text>
              <Text style={styles.timelineCity}>Gate 2 · 8 passengers</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDotContainer}>
              <View style={styles.dotBlue} />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTime}>07:48 AM · Stop</Text>
              <Text style={styles.timelineStation}>Sheikh Zayed Gate</Text>
              <Text style={styles.timelineCity}>4 passengers waiting</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDotContainer}>
              <View style={styles.dotTeal} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTime}>08:15 AM · Drop-off</Text>
              <Text style={styles.timelineStation}>Smart Village</Text>
              <Text style={styles.timelineCity}>Campus 1, Sector B2</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Vehicle</Text>
          <View style={styles.infoGrid}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Bus</Text>
              <Text style={styles.infoValue}>BUS-12</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Model</Text>
              <Text style={styles.infoValue}>Sprinter</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Capacity</Text>
              <Text style={styles.infoValue}>18 seats</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Duration</Text>
              <Text style={styles.infoValue}>45 mins</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Passengers · 12 reserved</Text>
          {passengers.map(passenger => (
            <View key={passenger.seat} style={styles.passengerRow}>
              <View style={styles.passengerLeft}>
                <View style={styles.passengerAvatar}>
                  <Text style={styles.passengerAvatarText}>{passenger.name[0]}</Text>
                </View>
                <View>
                  <Text style={styles.passengerName}>{passenger.name}</Text>
                  <Text style={styles.passengerStop}>{passenger.stop}</Text>
                </View>
              </View>
              <View style={styles.seatChip}>
                <Text style={styles.seatChipText}>{passenger.seat}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.startButton}
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate('MainStack', {
              screen: 'BottomTabs',
              params: { screen: 'ActiveTripScreen' },
            })
          }
        >
          <Text style={styles.startButtonText}>Start live tracking</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
