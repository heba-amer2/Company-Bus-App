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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './ProfileScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackType } from '../../../navigation/RootStack';
import { StackNavigationProp } from '@react-navigation/stack';

type NavProps =  StackNavigationProp<RootStackType>;
export default function ProfileScreen() {
  const navigation = useNavigation<NavProps>();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.7}>
            <Feather name="settings" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileHero}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarInitials}>T</Text>
            </View>
            <View style={styles.cameraBadge}>
              <Feather name="camera" size={12} color="#FFFFFF" />
            </View>
          </View>

          <View style={styles.heroDetails}>
            <Text style={styles.heroName}>Toka</Text>
            <Text style={styles.heroRole}>Product Designer</Text>
            <View style={styles.employeeBadge}>
              <Feather name="award" size={12} color="#93C5FD" />
              <Text style={styles.employeeBadgeText}>EMP-48291</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
       

        <Text style={styles.sectionTitle}>Employee Information</Text>
        <View style={styles.cardGroup}>
          <View style={styles.infoRow}>
            <View style={styles.infoLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Feather name="mail" size={16} color="#475569" />
              </View>
              <View>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>john.smith@company.com</Text>
              </View>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Feather name="phone" size={16} color="#475569" />
              </View>
              <View>
                <Text style={styles.infoLabel}>Phone Number</Text>
                <Text style={styles.infoValue}>+1 (555) 234-5678</Text>
              </View>
            </View>
          </View>

          <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
            <View style={styles.infoLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Ionicons name="location-outline" size={17} color="#475569" />
              </View>
              <View>
                <Text style={styles.infoLabel}>Default Pickup Station</Text>
                <Text style={styles.infoValue}>Central Station - Gate 2</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Transportation Preferences</Text>
        <View style={styles.cardGroup}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#EFF6FF' }]}>
                <Feather name="bell" size={16} color="#2563EB" />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>Trip Notifications</Text>
                <Text style={styles.menuItemSubtitle}>Arrival alerts, schedule changes</Text>
              </View>
            </View>
            <View style={styles.menuItemRight}>
              <Text style={styles.badgeTextGreen}>Active</Text>
              <Feather name="chevron-right" size={18} color="#94A3B8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#FDF4FF' }]}>
                <MaterialCommunityIcons name="seat-passenger" size={18} color="#C026D3" />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>Seat Preference</Text>
                <Text style={styles.menuItemSubtitle}>Window seat · Forward facing</Text>
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
                <Text style={styles.menuItemTitle}>Trip History</Text>
                <Text style={styles.menuItemSubtitle}>Past rides & attendance reports</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Support & App</Text>
        <View style={styles.cardGroup}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#F1F5F9' }]}>
                <Feather name="help-circle" size={16} color="#475569" />
              </View>
              <View>
                <Text style={styles.menuItemTitle}>Help & Support</Text>
                <Text style={styles.menuItemSubtitle}>Contact transport coordinator</Text>
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
                <Text style={styles.menuItemTitle}>Terms & Privacy</Text>
                <Text style={styles.menuItemSubtitle}>Company transportation policy</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}
        onPress={() => navigation.navigate('AuthStack', { screen: 'LoginScreen' })}
          >
          <Feather name="log-out" size={18} color="#EF4444" />
          <Text
          
          style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        
      </ScrollView>
    </View>
  );
}