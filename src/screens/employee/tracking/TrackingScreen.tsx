import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './TrackingScreen.styles';
import GetLocation, { LocationCoords } from './GetLocation/GetLocation';
import { InteractiveMap, InteractiveMapRef } from '../../../components/InteractiveMap/InteractiveMap';

export default function TrackingScreen() {
  const mapRef = useRef<InteractiveMapRef>(null);
  const [userCoords, setUserCoords] = useState<LocationCoords | null>(null);
  const hasAutoCenteredRef = useRef(false);



  const handleLocationFound = (coords: LocationCoords) => {
    setUserCoords(coords);
    if (!hasAutoCenteredRef.current) {
      hasAutoCenteredRef.current = true;
      mapRef.current?.centerOnLocation(coords.latitude, coords.longitude, 16, 120);
    }
  };

  const handleStopSharing = () => {
    setUserCoords(null);
    hasAutoCenteredRef.current = false;
    mapRef.current?.removeUserLocation();
    mapRef.current?.centerOnLocation(30.0131, 30.9850, 14, 120);
  };

  const handleRecenter = () => {
    if (userCoords) {
      mapRef.current?.centerOnLocation(userCoords.latitude, userCoords.longitude, 16, 120);
    } else {
      mapRef.current?.centerOnLocation(30.0131, 30.9850, 14, 120);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <InteractiveMap
        ref={mapRef}
        userLocation={userCoords}
        initialLat={30.0131}
        initialLng={30.9850}
        initialZoom={13}
      />

      <View style={styles.topBar} pointerEvents="box-none">
        <View style={styles.livePill}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>Live tracking</Text>
        </View>
        <TouchableOpacity
          style={styles.roundButton}
          activeOpacity={0.8}
          onPress={handleRecenter}
        >
          <Feather name="navigation" size={18} color="#0F172A" />
        </TouchableOpacity>
      </View>

      <View style={styles.sheet}>
        <View style={styles.handle} />

        <View style={styles.etaRow}>
          <View>
            <Text style={styles.etaLabel}>Arriving in</Text>
            <Text style={styles.etaValue}>12 min</Text>
          </View>
          <View style={styles.busChip}>
            <Text style={styles.busChipLabel}>Bus · Seat</Text>
            <Text style={styles.busChipValue}>A-14 · #12</Text>
          </View>
        </View>

        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
        <View style={styles.progressLabels}>
          <Text style={styles.progressText}>October</Text>
          <Text style={styles.progressMuted}>On the way</Text>
          <Text style={styles.progressText}>Smart Village</Text>
        </View>

        <View style={styles.nextStopCard}>
          <View style={styles.nextStopIcon}>
            <Ionicons name="location" size={18} color="#16A34A" />
          </View>
          <View>
            <Text style={styles.nextStopLabel}>Next stop</Text>
            <Text style={styles.nextStopValue}>Sheikh Zayed Gate</Text>
          </View>
        </View>

        <View style={styles.driverRow}>
          <View style={styles.driverInfo}>
            <View style={styles.driverAvatar}>
              <Text style={styles.driverAvatarText}>M</Text>
            </View>
            <View>
              <Text style={styles.driverName}>Mahmoud Ali</Text>
              <Text style={styles.driverMeta}>Driver · Mercedes Sprinter</Text>
            </View>
          </View>
          <View style={styles.driverActions}>
            <TouchableOpacity style={styles.iconAction} activeOpacity={0.8}>
              <Feather name="phone" size={16} color="#2563EB" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconAction} activeOpacity={0.8}>
              <Feather name="message-circle" size={16} color="#2563EB" />
            </TouchableOpacity>
          </View>
        </View>

        <GetLocation
          onLocationFound={handleLocationFound}
          onStopSharing={handleStopSharing}
        />
      </View>
    </View>
  );
}
