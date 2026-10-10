import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './ProfileScreen.styles';
import { RootStackType } from '../../../navigation/RootStack';
import ProfileHeader from '../../../components/profile/ProfileHeader';
import ProfileInfoRow from '../../../components/profile/ProfileInfoRow';
import ProfileMenuItem from '../../../components/profile/ProfileMenuItem';
import ProfileLogoutButton from '../../../components/profile/ProfileLogoutButton';

type NavProps = StackNavigationProp<RootStackType>;

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ProfileHeader
        headerStyle={[styles.header, { paddingTop: Math.max(insets.top, 18) + 8 }]}
        headerStyles={styles}
        initials="N"
        name="Nour El-Sayed"
        role="Transport admin"
        badgeIcon={<Feather name="shield" size={12} color="#93C5FD" />}
        badgeText="ADM-20014"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        <Text style={styles.sectionTitle}>Admin information</Text>
        <View style={styles.cardGroup}>
          <ProfileInfoRow
            rowStyles={styles}
            icon={<Feather name="mail" size={16} color="#475569" />}
            label="Email"
            value="nour.elsayed@company.com"
          />
          <ProfileInfoRow
            rowStyles={styles}
            icon={<Feather name="phone" size={16} color="#475569" />}
            label="Phone"
            value="+20 122 540 1188"
          />
          <ProfileInfoRow
            rowStyles={styles}
            icon={<MaterialCommunityIcons name="office-building-outline" size={17} color="#475569" />}
            label="Department"
            value="Transportation operations"
            last
          />
        </View>

        <Text style={styles.sectionTitle}>Operations</Text>
        <View style={styles.cardGroup}>
          <ProfileMenuItem
            itemStyles={styles}
            icon={<Feather name="bell" size={16} color="#2563EB" />}
            iconBackgroundColor="#EFF6FF"
            title="Dispatch alerts"
            subtitle="Delays, waitlists, unassigned trips"
            showActiveBadge
          />
          <ProfileMenuItem
            itemStyles={styles}
            icon={<Feather name="bar-chart-2" size={16} color="#0D9488" />}
            iconBackgroundColor="#F0FDFA"
            title="Weekly reports"
            subtitle="Occupancy and on-time performance"
          />
          <ProfileMenuItem
            itemStyles={styles}
            icon={<MaterialCommunityIcons name="wrench-outline" size={18} color="#D97706" />}
            iconBackgroundColor="#FEF3C7"
            title="Fleet maintenance"
            subtitle="BUS-03 scheduled this weekend"
            last
          />
        </View>

        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.cardGroup}>
          <ProfileMenuItem
            itemStyles={styles}
            icon={<Feather name="help-circle" size={16} color="#475569" />}
            iconBackgroundColor="#F1F5F9"
            title="Help center"
            subtitle="Admin playbooks and policies"
          />
          <ProfileMenuItem
            itemStyles={styles}
            icon={<Feather name="shield" size={16} color="#475569" />}
            iconBackgroundColor="#F1F5F9"
            title="Terms & privacy"
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
