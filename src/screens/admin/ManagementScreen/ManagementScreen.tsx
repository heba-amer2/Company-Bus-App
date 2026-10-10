import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './ManagementScreen.styles';

type ManagementTab = 'buses' | 'routes' | 'stations';

interface MockBus {
  id: string;
  busNumber: string;
  model: string;
  capacity: number;
  plate: string;
  status: 'ACTIVE' | 'MAINTENANCE' | 'INACTIVE';
  driver: string;
  route: string;
}

interface MockRoute {
  id: string;
  name: string;
  from: string;
  to: string;
  status: 'ACTIVE' | 'INACTIVE';
  stopsCount: number;
  duration: string;
  direction: 'TO_COMPANY' | 'FROM_COMPANY';
}

interface MockStation {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  status: 'ACTIVE' | 'INACTIVE';
  routesConnected: number;
}

const BUSES: MockBus[] = [
  {
    id: '1',
    busNumber: 'BUS-12',
    model: 'Mercedes Sprinter 2023',
    capacity: 28,
    plate: 'ق ج د 1234',
    status: 'ACTIVE',
    driver: 'Ahmed Mansour',
    route: 'October Line 1',
  },
  {
    id: '2',
    busNumber: 'BUS-05',
    model: 'Toyota Coaster 2022',
    capacity: 28,
    plate: 'س ر و 5678',
    status: 'ACTIVE',
    driver: 'Mohamed Ali',
    route: 'Maadi Express',
  },
  {
    id: '3',
    busNumber: 'BUS-03',
    model: 'Mercedes Sprinter 2021',
    capacity: 28,
    plate: 'ب ل ق 9012',
    status: 'MAINTENANCE',
    driver: 'Youssef Nabil',
    route: 'Sheikh Zayed Line 2',
  },
  {
    id: '4',
    busNumber: 'BUS-08',
    model: 'Chevrolet Move 2022',
    capacity: 14,
    plate: 'ع ف ص 3456',
    status: 'ACTIVE',
    driver: 'Tarek Hassan',
    route: 'Nasr City Direct',
  },
];

const ROUTES: MockRoute[] = [
  {
    id: '1',
    name: 'October Line 1',
    from: 'Hosary Mosque',
    to: 'Smart Village Gate 1',
    status: 'ACTIVE',
    stopsCount: 4,
    duration: '45 min',
    direction: 'TO_COMPANY',
  },
  {
    id: '2',
    name: 'Maadi Express',
    from: 'Degla Square',
    to: 'Smart Village Gate 2',
    status: 'ACTIVE',
    stopsCount: 3,
    duration: '50 min',
    direction: 'TO_COMPANY',
  },
  {
    id: '3',
    name: 'Sheikh Zayed Line 2',
    from: 'Hyper One',
    to: 'Smart Village Gate 1',
    status: 'ACTIVE',
    stopsCount: 3,
    duration: '35 min',
    direction: 'TO_COMPANY',
  },
  {
    id: '4',
    name: 'Nasr City Evening Return',
    from: 'Smart Village Gate 1',
    to: 'Abbas El-Akkad',
    status: 'ACTIVE',
    stopsCount: 5,
    duration: '60 min',
    direction: 'FROM_COMPANY',
  },
];

const STATIONS: MockStation[] = [
  {
    id: '1',
    name: 'Smart Village Gate 1',
    address: 'Cairo-Alexandria Desert Road, KM 28',
    coordinates: '30.0712° N, 31.0214° E',
    status: 'ACTIVE',
    routesConnected: 6,
  },
  {
    id: '2',
    name: 'Hosary Square Station',
    address: 'Central Axis, 6th of October City',
    coordinates: '29.9723° N, 30.9421° E',
    status: 'ACTIVE',
    routesConnected: 2,
  },
  {
    id: '3',
    name: 'Degla Maadi Hub',
    address: 'Street 213, Maadi, Cairo',
    coordinates: '29.9602° N, 31.2784° E',
    status: 'ACTIVE',
    routesConnected: 2,
  },
  {
    id: '4',
    name: 'Hyper One Station',
    address: '26th of July Corridor, Sheikh Zayed',
    coordinates: '30.0381° N, 31.0112° E',
    status: 'ACTIVE',
    routesConnected: 3,
  },
];

export default function ManagementScreen() {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState<ManagementTab>('buses');
  const [busesList, setBusesList] = useState(BUSES);

  const toggleBusStatus = (busId: string) => {
    setBusesList(prev =>
      prev.map(bus => {
        if (bus.id === busId) {
          const nextStatus = bus.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
          return { ...bus, status: nextStatus };
        }
        return bus;
      }),
    );
  };

  const getStatusBadgeColors = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return { bg: '#DCFCE7', text: '#15803D' };
      case 'MAINTENANCE':
        return { bg: '#FEF3C7', text: '#D97706' };
      case 'INACTIVE':
      default:
        return { bg: '#F1F5F9', text: '#64748B' };
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={[styles.header, { paddingTop: Math.max(insets.top, 18) + 8 }]}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerEyebrow}>Fleet setup</Text>
            <Text style={styles.headerTitle}>Network</Text>
          </View>
          <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.8}>
            <Feather name="plus" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, tab === 'buses' && styles.tabActive]}
            onPress={() => setTab('buses')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tab === 'buses' && styles.tabTextActive]}>
              Buses ({busesList.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, tab === 'routes' && styles.tabActive]}
            onPress={() => setTab('routes')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tab === 'routes' && styles.tabTextActive]}>
              Routes ({ROUTES.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, tab === 'stations' && styles.tabActive]}
            onPress={() => setTab('stations')}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tab === 'stations' && styles.tabTextActive]}>
              Stations ({STATIONS.length})
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Tab Content: Buses */}
        {tab === 'buses' && (
          <>
            <Text style={styles.sectionLabel}>{busesList.length} registered buses</Text>
            {busesList.map(bus => {
              const badge = getStatusBadgeColors(bus.status);
              return (
                <View key={bus.id} style={styles.card}>
                  <View style={styles.cardTop}>
                    <View>
                      <Text style={styles.cardTitle}>{bus.busNumber}</Text>
                      <Text style={styles.cardSubtitle}>{bus.model}</Text>
                    </View>
                    <View style={[styles.statusBadge, { backgroundColor: badge.bg }]}>
                      <Text style={[styles.statusBadgeText, { color: badge.text }]}>
                        {bus.status}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.metaRow}>
                    <View style={styles.metaItem}>
                      <Text style={styles.metaLabel}>Capacity</Text>
                      <Text style={styles.metaValue}>{bus.capacity} seats</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Text style={styles.metaLabel}>Plate</Text>
                      <Text style={styles.metaValue}>{bus.plate}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Text style={styles.metaLabel}>Driver</Text>
                      <Text style={styles.metaValue}>{bus.driver}</Text>
                    </View>
                  </View>

                  <View style={styles.actionsRow}>
                    <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
                      <Text style={styles.detailsButtonText}>Edit bus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.primaryButton}
                      activeOpacity={0.8}
                      onPress={() => toggleBusStatus(bus.id)}
                    >
                      <Text style={styles.primaryButtonText}>
                        {bus.status === 'ACTIVE' ? 'Set Inactive' : 'Set Active'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </>
        )}

        {/* Tab Content: Routes */}
        {tab === 'routes' && (
          <>
            <Text style={styles.sectionLabel}>{ROUTES.length} active routes</Text>
            {ROUTES.map(route => {
              const badge = getStatusBadgeColors(route.status);
              return (
                <View key={route.id} style={styles.card}>
                  <View style={styles.cardTop}>
                    <View>
                      <Text style={styles.cardTitle}>{route.name}</Text>
                      <Text style={styles.cardSubtitle}>
                        {route.direction === 'TO_COMPANY' ? 'To HQ' : 'From HQ'} · {route.duration}
                      </Text>
                    </View>
                    <View style={[styles.statusBadge, { backgroundColor: badge.bg }]}>
                      <Text style={[styles.statusBadgeText, { color: badge.text }]}>
                        {route.status}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.routeRow}>
                    <View style={styles.stationItem}>
                      <View style={styles.ringBlue} />
                      <Text style={styles.stationName}>{route.from}</Text>
                    </View>
                    <View style={styles.dashedLine} />
                    <View style={styles.stationItem}>
                      <View style={styles.ringGreen} />
                      <Text style={styles.stationName}>{route.to}</Text>
                    </View>
                  </View>

                  <View style={styles.metaRow}>
                    <View style={styles.metaItem}>
                      <Text style={styles.metaLabel}>Stops</Text>
                      <Text style={styles.metaValue}>{route.stopsCount} stops</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Text style={styles.metaLabel}>Est. Duration</Text>
                      <Text style={styles.metaValue}>{route.duration}</Text>
                    </View>
                  </View>

                  <View style={styles.actionsRow}>
                    <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
                      <Text style={styles.detailsButtonText}>View stops</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
                      <Text style={styles.primaryButtonText}>Edit route</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </>
        )}

        {/* Tab Content: Stations */}
        {tab === 'stations' && (
          <>
            <Text style={styles.sectionLabel}>{STATIONS.length} network stations</Text>
            {STATIONS.map(station => {
              const badge = getStatusBadgeColors(station.status);
              return (
                <View key={station.id} style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={{ flex: 1, paddingRight: 8 }}>
                      <Text style={styles.cardTitle}>{station.name}</Text>
                      <Text style={styles.cardSubtitle}>{station.address}</Text>
                    </View>
                    <View style={[styles.statusBadge, { backgroundColor: badge.bg }]}>
                      <Text style={[styles.statusBadgeText, { color: badge.text }]}>
                        {station.status}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.metaRow}>
                    <View style={styles.metaItem}>
                      <Text style={styles.metaLabel}>GPS Location</Text>
                      <Text style={styles.metaValue}>{station.coordinates}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Text style={styles.metaLabel}>Connected Routes</Text>
                      <Text style={styles.metaValue}>{station.routesConnected} routes</Text>
                    </View>
                  </View>

                  <View style={styles.actionsRow}>
                    <TouchableOpacity style={styles.detailsButton} activeOpacity={0.8}>
                      <Text style={styles.detailsButtonText}>View on map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
                      <Text style={styles.primaryButtonText}>Edit station</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
}
