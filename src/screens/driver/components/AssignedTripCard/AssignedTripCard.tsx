import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AssignedTripCard.styles';
import { DriverScreenNames } from '../../../../navigation/ScreenNames';
import RouteRow from '../RouteRow/RouteRow';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackType} from '../../../../navigation/RootStack';



const TRIP_META = [
  {
    key: 'departure',
    label: 'Departure',
    value: '07:30 AM',
    icon: <Feather name="clock" size={18} color="#0D9488" />,
  },
  {
    key: 'vehicle',
    label: 'Vehicle',
    value: 'BUS-12',
    icon: <MaterialCommunityIcons name="bus-side" size={20} color="#0D9488" />,
  },
  {
    key: 'riders',
    label: 'Riders',
    value: '12 / 18',
    icon: <Feather name="users" size={18} color="#0D9488" />,
  },
];

type NavProps = StackNavigationProp<RootStackType>;

export default function AssignedTripCard() {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.cardTag}>Next assigned trip</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusBadgeText}>Scheduled</Text>
          </View>
        </View>

        <View style={styles.routeWrap}>
          <RouteRow from="October" to="Smart Village" />
        </View>

        <View style={styles.infoRow}>
          {TRIP_META.map(item => (
            <View key={item.key} style={styles.infoCol}>
              {item.icon}
              <View style={styles.infoColText}>
                <Text style={styles.infoLabel}>{item.label}</Text>
                <Text style={styles.infoValue}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.secondaryBtn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('MainStack', { screen: 'DriverTripDetailsScreen' })}
          >
            <Text style={styles.secondaryBtnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewTripBtn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('MainStack', { screen: 'BottomTabs', params: { screen: 'ActiveTripScreen' } })}
          >
            <Text style={styles.viewTripBtnText}>Start trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
