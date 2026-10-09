import React from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './ProfileScreen.styles';
import { RootStackType } from '../../../navigation/RootStack';

type NavProps = StackNavigationProp<RootStackType>;

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) + 8 }]}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.7}>
            <Feather name="settings" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileHero}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarInitials}>A</Text>
            </View>
            <View style={styles.cameraBadge}>
              <Feather name="camera" size={12} color="#FFFFFF" />
            </View>
          </View>

          <View style={styles.heroDetails}>
            <Text style={styles.heroName}>Ahmed Hassan</Text>
            <Text style={styles.heroRole}>Company driver</Text>
            <View style={styles.employeeBadge}>
              <MaterialCommunityIcons name="card-account-details-outline" size={14} color="#93C5FD" />
              <Text style={styles.employeeBadgeText}>DRV-10428</Text>
            </View>
          </View>
        </View>
      </View>

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
          <View style={styles.infoRow}>
            <View style={styles.infoLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Feather name="mail" size={16} color="#475569" />
              </View>
              <View>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>ahmed.hassan@company.com</Text>
              </View>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Feather name="phone" size={16} color="#475569" />
              </View>
              <View>
                <Text style={styles.infoLabel}>Phone</Text>
                <Text style={styles.infoValue}>+20 100 482 9104</Text>
              </View>
            </View>
          </View>

          <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
            <View style={styles.infoLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Ionicons name="car-outline" size={17} color="#475569" />
              </View>
              <View>
                <Text style={styles.infoLabel}>Assigned vehicle</Text>
                <Text style={styles.infoValue}>BUS-12 · Mercedes Sprinter</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Shift & safety</Text>
        <View style={styles.cardGroup}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#EFF6FF' }]}>
                <Feather name="bell" size={16} color="#2563EB" />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>Trip alerts</Text>
                <Text style={styles.menuItemSubtitle}>New assignments and delays</Text>
              </View>
            </View>
            <View style={styles.menuItemRight}>
              <Text style={styles.badgeTextGreen}>Active</Text>
              <Feather name="chevron-right" size={18} color="#94A3B8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#ECFDF5' }]}>
                <MaterialCommunityIcons name="shield-check-outline" size={18} color="#059669" />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>License & documents</Text>
                <Text style={styles.menuItemSubtitle}>Valid until Dec 2027</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, styles.menuItemLast]} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#FEF3C7' }]}>
                <MaterialCommunityIcons name="history" size={18} color="#D97706" />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>Trip history</Text>
                <Text style={styles.menuItemSubtitle}>Completed routes and reports</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.cardGroup}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Feather name="help-circle" size={16} color="#475569" />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>Help & dispatch</Text>
                <Text style={styles.menuItemSubtitle}>Call operations center</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, styles.menuItemLast]} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Feather name="shield" size={16} color="#475569" />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>Terms & privacy</Text>
                <Text style={styles.menuItemSubtitle}>Company transportation policy</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AuthStack', { screen: 'LoginScreen' })}
        >
          <Feather name="log-out" size={18} color="#EF4444" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
