import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './UsersScreen.styles';

type RoleTab = 'all' | 'drivers' | 'employees' | 'admins';

interface MockUser {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  role: 'driver' | 'employee' | 'admin';
  roleDisplay: string;
  email: string;
  details: string;
  status: 'ACTIVE' | 'ON TRIP' | 'OFF DUTY';
  statusColor: string;
}

const USERS_LIST: MockUser[] = [
  {
    id: '1',
    name: 'Ahmed Mansour',
    initials: 'AM',
    avatarBg: '#2563EB',
    role: 'driver',
    roleDisplay: 'Driver',
    email: 'ahmed.mansour@company.com',
    details: 'BUS-12 · October Line 1',
    status: 'ON TRIP',
    statusColor: '#10B981',
  },
  {
    id: '2',
    name: 'Nour El-Sayed',
    initials: 'NE',
    avatarBg: '#7C3AED',
    role: 'admin',
    roleDisplay: 'Lead Admin',
    email: 'nour.elsayed@company.com',
    details: 'Transport Operations · ADM-20014',
    status: 'ACTIVE',
    statusColor: '#10B981',
  },
  {
    id: '3',
    name: 'Mohamed Ali',
    initials: 'MA',
    avatarBg: '#2563EB',
    role: 'driver',
    roleDisplay: 'Driver',
    email: 'mohamed.ali@company.com',
    details: 'BUS-05 · Maadi Express',
    status: 'ACTIVE',
    statusColor: '#10B981',
  },
  {
    id: '4',
    name: 'Sara Ibrahim',
    initials: 'SI',
    avatarBg: '#0D9488',
    role: 'employee',
    roleDisplay: 'Employee',
    email: 'sara.ibrahim@company.com',
    details: 'Product Design · Seat #14A',
    status: 'ACTIVE',
    statusColor: '#10B981',
  },
  {
    id: '5',
    name: 'Tarek Hassan',
    initials: 'TH',
    avatarBg: '#2563EB',
    role: 'driver',
    roleDisplay: 'Driver',
    email: 'tarek.hassan@company.com',
    details: 'BUS-08 · Nasr City Direct',
    status: 'OFF DUTY',
    statusColor: '#94A3B8',
  },
  {
    id: '6',
    name: 'Karim Adel',
    initials: 'KA',
    avatarBg: '#0D9488',
    role: 'employee',
    roleDisplay: 'Employee',
    email: 'karim.adel@company.com',
    details: 'Engineering Team · Seat #08B',
    status: 'ACTIVE',
    statusColor: '#10B981',
  },
  {
    id: '7',
    name: 'Youssef Nabil',
    initials: 'YN',
    avatarBg: '#2563EB',
    role: 'driver',
    roleDisplay: 'Driver',
    email: 'youssef.nabil@company.com',
    details: 'BUS-03 · Maintenance standby',
    status: 'OFF DUTY',
    statusColor: '#94A3B8',
  },
  {
    id: '8',
    name: 'Heba Amer',
    initials: 'HA',
    avatarBg: '#7C3AED',
    role: 'admin',
    roleDisplay: 'Operations Manager',
    email: 'heba.amer@company.com',
    details: 'Transport Fleet Admin',
    status: 'ACTIVE',
    statusColor: '#10B981',
  },
];

export default function UsersScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<RoleTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = USERS_LIST.filter(user => {
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'drivers' && user.role === 'driver') ||
      (activeTab === 'employees' && user.role === 'employee') ||
      (activeTab === 'admins' && user.role === 'admin');

    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.details.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) + 8 }]}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerEyebrow}>Directory</Text>
            <Text style={styles.headerTitle}>Users</Text>
          </View>
          <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.8}>
            <Feather name="user-plus" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'all' && styles.tabActive]}
            onPress={() => setActiveTab('all')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'all' && styles.tabTextActive]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'drivers' && styles.tabActive]}
            onPress={() => setActiveTab('drivers')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'drivers' && styles.tabTextActive]}>
              Drivers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'employees' && styles.tabActive]}
            onPress={() => setActiveTab('employees')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'employees' && styles.tabTextActive]}>
              Employees
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'admins' && styles.tabActive]}
            onPress={() => setActiveTab('admins')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === 'admins' && styles.tabTextActive]}>
              Admins
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Search input */}
        <View style={styles.searchBox}>
          <Feather name="search" size={18} color="#94A3B8" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search name, email, or route..."
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Feather name="x" size={16} color="#94A3B8" />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.sectionLabel}>
          {filteredUsers.length} registered {activeTab === 'all' ? 'users' : activeTab}
        </Text>

        {/* User cards */}
        {filteredUsers.map(user => (
          <TouchableOpacity key={user.id} style={styles.personCard} activeOpacity={0.8}>
            <View style={[styles.avatar, { backgroundColor: user.avatarBg }]}>
              <Text style={styles.avatarText}>{user.initials}</Text>
            </View>
            <View style={styles.personBody}>
              <Text style={styles.personName}>{user.name}</Text>
              <Text style={styles.personMeta}>{user.details}</Text>
              <View style={styles.statusDotRow}>
                <View style={[styles.statusDot, { backgroundColor: user.statusColor }]} />
                <Text style={[styles.statusLabel, { color: user.statusColor }]}>
                  {user.status}
                </Text>
              </View>
            </View>
            <Feather name="chevron-right" size={18} color="#CBD5E1" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

