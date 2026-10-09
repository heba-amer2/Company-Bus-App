import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './ActiveTripScreen.styles';
import GetLocation, {
  LocationCoords,
} from '../../employee/tracking/GetLocation/GetLocation';
import {
  InteractiveMap,
  InteractiveMapRef,
} from '../../../components/InteractiveMap/InteractiveMap';

type TripPhase = 'scheduled' | 'live' | 'completed';

export function ActiveTripScreen() {
  const insets = useSafeAreaInsets();
  const mapRef = useRef<InteractiveMapRef>(null);
  const [userCoords, setUserCoords] = useState<LocationCoords | null>(null);
  const [phase, setPhase] = useState<TripPhase>('scheduled');
  const hasAutoCenteredRef = useRef(false);

  const handleLocationFound = (coords: LocationCoords) => {
    setUserCoords(coords);
    if (!hasAutoCenteredRef.current) {
      hasAutoCenteredRef.current = true;
      mapRef.current?.centerOnLocation(coords.latitude, coords.longitude, 16, 180);
    }
  };

  const handleStopSharing = () => {
    setUserCoords(null);
    hasAutoCenteredRef.current = false;
    mapRef.current?.removeUserLocation();
    mapRef.current?.centerOnLocation(30.0131, 30.985, 14, 180);
  };

  const handleRecenter = () => {
    if (userCoords) {
      mapRef.current?.centerOnLocation(userCoords.latitude, userCoords.longitude, 16, 180);
    } else {
      mapRef.current?.centerOnLocation(30.0131, 30.985, 14, 180);
    }
  };

  const startTrip = () => {
    setPhase('live');
  };

  const completeTrip = () => {
    Alert.alert('Complete trip', 'Mark this trip as completed?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Complete', onPress: () => setPhase('completed') },
    ]);
  };

  const progressWidth = phase === 'completed' ? '100%' : phase === 'live' ? '62%' : '8%';
  const statusLabel =
    phase === 'live' ? 'Live tracking' : phase === 'completed' ? 'Trip completed' : 'Ready to start';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <InteractiveMap
        ref={mapRef}
        userLocation={userCoords}
        initialLat={30.0131}
        initialLng={30.985}
        initialZoom={13}
      />

      <View
        style={[styles.topBar, { top: Math.max(insets.top, 8) + 8 }]}
        pointerEvents="box-none"
      >
        <View style={styles.livePill}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>{statusLabel}</Text>
        </View>
        <TouchableOpacity style={styles.roundButton} activeOpacity={0.8} onPress={handleRecenter}>
          <Feather name="navigation" size={18} color="#0F172A" />
        </TouchableOpacity>
      </View>

      <View style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 12) + 6 }]}>
        <View style={styles.handle} />

        <View style={styles.etaRow}>
          <View>
            <Text style={styles.etaLabel}>
              {phase === 'completed' ? 'Arrived' : phase === 'live' ? 'Next stop in' : 'Departs in'}
            </Text>
            <Text style={styles.etaValue}>
              {phase === 'completed' ? 'Done' : phase === 'live' ? '6 min' : '12 min'}
            </Text>
          </View>
          <View style={styles.busChip}>
            <Text style={styles.busChipLabel}>Vehicle · Route</Text>
            <Text style={styles.busChipValue}>BUS-12 · Morning</Text>
          </View>
        </View>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: progressWidth }]} />
        </View>
        <View style={styles.progressLabels}>
          <Text style={styles.progressText}>October</Text>
          <Text style={styles.progressMuted}>
            {phase === 'live' ? 'On the way' : phase === 'completed' ? 'Completed' : 'Not started'}
          </Text>
          <Text style={styles.progressText}>Smart Village</Text>
        </View>

        <View style={styles.nextStopCard}>
          <View style={styles.nextStopIcon}>
            <Ionicons name="location" size={18} color="#16A34A" />
          </View>
          <View>
            <Text style={styles.nextStopLabel}>
              {phase === 'completed' ? 'Final stop' : 'Next stop'}
            </Text>
            <Text style={styles.nextStopValue}>
              {phase === 'completed' ? 'Smart Village' : 'Sheikh Zayed Gate'}
            </Text>
            <Text style={styles.nextStopMeta}>4 passengers waiting · 1.8 km</Text>
          </View>
        </View>

        <View style={styles.passengersRow}>
          <View style={styles.passengerAvatars}>
            {['A', 'M', 'S', '+9'].map((initial, index) => (
              <View
                key={initial}
                style={[styles.avatar, { marginLeft: index === 0 ? 0 : -8, zIndex: 4 - index }]}
              >
                <Text style={styles.avatarText}>{initial}</Text>
              </View>
            ))}
          </View>
          <View>
            <Text style={styles.passengerCount}>12 boarded</Text>
            <Text style={styles.passengerHint}>6 remaining along the route</Text>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.secondaryAction} activeOpacity={0.8}>
            <Feather name="phone" size={15} color="#0F172A" />
            <Text style={styles.secondaryActionText}>Dispatch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryAction} activeOpacity={0.8}>
            <Feather name="alert-triangle" size={15} color="#0F172A" />
            <Text style={styles.secondaryActionText}>Report issue</Text>
          </TouchableOpacity>
        </View>

        {phase === 'scheduled' && (
          <TouchableOpacity style={styles.startButton} activeOpacity={0.85} onPress={startTrip}>
            <Text style={styles.startButtonText}>Start trip</Text>
          </TouchableOpacity>
        )}

        {phase === 'live' && (
          <TouchableOpacity style={styles.completeButton} activeOpacity={0.85} onPress={completeTrip}>
            <Text style={styles.completeButtonText}>Complete trip</Text>
          </TouchableOpacity>
        )}

        <GetLocation
          onLocationFound={handleLocationFound}
          onStopSharing={handleStopSharing}
          shareLabel="Share live location with riders"
          stopLabel="Stop sharing location"
        />
      </View>
    </View>
  );
}
