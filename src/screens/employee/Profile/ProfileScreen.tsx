import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './ProfileScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackType } from '../../../navigation/RootStack';
import { StackNavigationProp } from '@react-navigation/stack';
import ProfileHeader from '../../../components/profile/ProfileHeader';
import ProfileInfoRow from '../../../components/profile/ProfileInfoRow';
import ProfileMenuItem from '../../../components/profile/ProfileMenuItem';
import ProfileLogoutButton from '../../../components/profile/ProfileLogoutButton';

type NavProps = StackNavigationProp<RootStackType>;

const EMPLOYEE_INFO = [
  {
    id: 'email',
    icon: <Feather name="mail" size={16} color="#475569" />,
    label: 'Email',
    value: 'john.smith@company.com',
  },
  {
    id: 'phone',
    icon: <Feather name="phone" size={16} color="#475569" />,
    label: 'Phone Number',
    value: '+1 (555) 234-5678',
  },
  {
    id: 'station',
    icon: <Ionicons name="location-outline" size={17} color="#475569" />,
    label: 'Default Pickup Station',
    value: 'Central Station - Gate 2',
  },
];

const PREFERENCE_ITEMS = [
  {
    id: 'notifications',
    icon: <Feather name="bell" size={16} color="#2563EB" />,
    iconBackgroundColor: '#EFF6FF',
    title: 'Trip Notifications',
    subtitle: 'Arrival alerts, schedule changes',
    showActiveBadge: true,
  },
  {
    id: 'seat',
    icon: <MaterialCommunityIcons name="seat-passenger" size={18} color="#C026D3" />,
    iconBackgroundColor: '#FDF4FF',
    title: 'Seat Preference',
    subtitle: 'Window seat · Forward facing',
  },
  {
    id: 'history',
    icon: <MaterialCommunityIcons name="history" size={18} color="#D97706" />,
    iconBackgroundColor: '#FEF3C7',
    title: 'Trip History',
    subtitle: 'Past rides & attendance reports',
  },
];

const SUPPORT_ITEMS = [
  {
    id: 'help',
    icon: <Feather name="help-circle" size={16} color="#475569" />,
    iconBackgroundColor: '#F1F5F9',
    title: 'Help & Support',
    subtitle: 'Contact transport coordinator',
  },
  {
    id: 'terms',
    icon: <Feather name="shield" size={16} color="#475569" />,
    iconBackgroundColor: '#F1F5F9',
    title: 'Terms & Privacy',
    subtitle: 'Company transportation policy',
  },
];

export default function ProfileScreen() {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ProfileHeader
        headerStyles={styles}
        initials="T"
        name="Toka"
        role="Product Designer"
        badgeIcon={<Feather name="award" size={12} color="#93C5FD" />}
        badgeText="EMP-48291"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Employee Info Section */}
        <Text style={styles.sectionTitle}>Employee Information</Text>
        <View style={styles.cardGroup}>
          {EMPLOYEE_INFO.map((item, index) => (
            <ProfileInfoRow
              key={item.id}
              rowStyles={styles}
              icon={item.icon}
              label={item.label}
              value={item.value}
              last={index === EMPLOYEE_INFO.length - 1}
            />
          ))}
        </View>

        {/* Transportation Preferences Section */}
        <Text style={styles.sectionTitle}>Transportation Preferences</Text>
        <View style={styles.cardGroup}>
          {PREFERENCE_ITEMS.map((item, index) => (
            <ProfileMenuItem
              key={item.id}
              itemStyles={styles}
              icon={item.icon}
              iconBackgroundColor={item.iconBackgroundColor}
              title={item.title}
              subtitle={item.subtitle}
              showActiveBadge={item.showActiveBadge}
              last={index === PREFERENCE_ITEMS.length - 1}
            />
          ))}
        </View>

        {/* Support & App Section */}
        <Text style={styles.sectionTitle}>Support & App</Text>
        <View style={styles.cardGroup}>
          {SUPPORT_ITEMS.map((item, index) => (
            <ProfileMenuItem
              key={item.id}
              itemStyles={styles}
              icon={item.icon}
              iconBackgroundColor={item.iconBackgroundColor}
              title={item.title}
              subtitle={item.subtitle}
              last={index === SUPPORT_ITEMS.length - 1}
            />
          ))}
        </View>

        <ProfileLogoutButton
          buttonStyle={styles.logoutButton}
          textStyle={styles.logoutText}
          onPress={() => navigation.navigate('AuthStack', { screen: 'LoginScreen' })}
        />
      </ScrollView>
    </View>
  );
}
