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

type NavProps =  StackNavigationProp<RootStackType>;
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
       

        <Text style={styles.sectionTitle}>Employee Information</Text>
        <View style={styles.cardGroup}>
          <ProfileInfoRow
            rowStyles={styles}
            icon={<Feather name="mail" size={16} color="#475569" />}
            label="Email"
            value="john.smith@company.com"
          />

          <ProfileInfoRow
            rowStyles={styles}
            icon={<Feather name="phone" size={16} color="#475569" />}
            label="Phone Number"
            value="+1 (555) 234-5678"
          />

          <ProfileInfoRow
            rowStyles={styles}
            icon={<Ionicons name="location-outline" size={17} color="#475569" />}
            label="Default Pickup Station"
            value="Central Station - Gate 2"
            last
          />
        </View>

        <Text style={styles.sectionTitle}>Transportation Preferences</Text>
        <View style={styles.cardGroup}>
          <ProfileMenuItem
            itemStyles={styles}
            icon={<Feather name="bell" size={16} color="#2563EB" />}
            iconBackgroundColor="#EFF6FF"
            title="Trip Notifications"
            subtitle="Arrival alerts, schedule changes"
            showActiveBadge
          />

          <ProfileMenuItem
            itemStyles={styles}
            icon={<MaterialCommunityIcons name="seat-passenger" size={18} color="#C026D3" />}
            iconBackgroundColor="#FDF4FF"
            title="Seat Preference"
            subtitle="Window seat · Forward facing"
          />

          <ProfileMenuItem
            itemStyles={styles}
            icon={<MaterialCommunityIcons name="history" size={18} color="#D97706" />}
            iconBackgroundColor="#FEF3C7"
            title="Trip History"
            subtitle="Past rides & attendance reports"
            last
          />
        </View>

        <Text style={styles.sectionTitle}>Support & App</Text>
        <View style={styles.cardGroup}>
          <ProfileMenuItem
            itemStyles={styles}
            icon={<Feather name="help-circle" size={16} color="#475569" />}
            iconBackgroundColor="#F1F5F9"
            title="Help & Support"
            subtitle="Contact transport coordinator"
          />

          <ProfileMenuItem
            itemStyles={styles}
            icon={<Feather name="shield" size={16} color="#475569" />}
            iconBackgroundColor="#F1F5F9"
            title="Terms & Privacy"
            subtitle="Company transportation policy"
            last
          />
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
