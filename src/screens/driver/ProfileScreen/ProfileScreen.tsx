import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
        initials="A"
        name="Ahmed Hassan"
        role="Company driver"
        badgeIcon={
          <MaterialCommunityIcons name="card-account-details-outline" size={14} color="#93C5FD" />
        }
        badgeText="DRV-10428"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Trips this week</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>98%</Text>
            <Text style={styles.statLabel}>On-time</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>4.9</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Driver information</Text>
        <View style={styles.cardGroup}>
          <ProfileInfoRow
            rowStyles={styles}
            icon={<Feather name="mail" size={16} color="#475569" />}
            label="Email"
            value="ahmed.hassan@company.com"
          />

          <ProfileInfoRow
            rowStyles={styles}
            icon={<Feather name="phone" size={16} color="#475569" />}
            label="Phone"
            value="+20 100 482 9104"
          />

          <ProfileInfoRow
            rowStyles={styles}
            icon={<Ionicons name="car-outline" size={17} color="#475569" />}
            label="Assigned vehicle"
            value="BUS-12 · Mercedes Sprinter"
            last
          />
        </View>

        <Text style={styles.sectionTitle}>Shift & safety</Text>
        <View style={styles.cardGroup}>
          <ProfileMenuItem
            itemStyles={styles}
            icon={<Feather name="bell" size={16} color="#2563EB" />}
            iconBackgroundColor="#EFF6FF"
            title="Trip alerts"
            subtitle="New assignments and delays"
            showActiveBadge
          />

          <ProfileMenuItem
            itemStyles={styles}
            icon={<MaterialCommunityIcons name="shield-check-outline" size={18} color="#059669" />}
            iconBackgroundColor="#ECFDF5"
            title="License & documents"
            subtitle="Valid until Dec 2027"
          />

          <ProfileMenuItem
            itemStyles={styles}
            icon={<MaterialCommunityIcons name="history" size={18} color="#D97706" />}
            iconBackgroundColor="#FEF3C7"
            title="Trip history"
            subtitle="Completed routes and reports"
            last
          />
        </View>

        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.cardGroup}>
          <ProfileMenuItem
            itemStyles={styles}
            icon={<Feather name="help-circle" size={16} color="#475569" />}
            iconBackgroundColor="#F1F5F9"
            title="Help & dispatch"
            subtitle="Call operations center"
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
