import React, { useState, useEffect, useRef } from 'react';
import {
  PermissionsAndroid,
  Platform,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { styles } from './GetLocation.styles';

export interface LocationCoords {
  latitude: number;
  longitude: number;
}

interface LocationScreenProps {
  onLocationFound?: (coords: LocationCoords) => void;
  onStopSharing?: () => void;
}

const LocationScreen = ({ onLocationFound, onStopSharing }: LocationScreenProps) => {
  const [loading, setLoading] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const [locationText, setLocationText] = useState<string | null>(null);

  const watchIdRef = useRef<number | null>(null);
  const onLocationFoundRef = useRef(onLocationFound);
  onLocationFoundRef.current = onLocationFound;
  const onStopSharingRef = useRef(onStopSharing);
  onStopSharingRef.current = onStopSharing;

  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) {
        Geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
      }
    };
  }, []);

  const showGeolocationError = (error: { code: number; message: string }) => {
    let title = 'Location Error';
    let message = error.message;

    switch (error.code) {
      case 1:
        title = 'Permission Denied';
        message = 'Location permission was denied. Please allow location access in App Settings.';
        break;
      case 2:
        title = 'Position Unavailable';
        message = 'GPS or location provider is turned off. Please turn on Location in quick settings.';
        break;
      case 3:
        title = 'Location Timeout';
        message = 'Could not acquire location within the time limit. Please check GPS signal.';
        break;
      case 4:
        title = 'Play Services Not Available';
        message = 'Google Play Services is unavailable on this device.';
        break;
      case 5:
        title = 'Settings Not Satisfied';
        message = 'Location settings could not be configured automatically.';
        break;
      default:
        message = error.message || 'An unknown location error occurred.';
    }

    Alert.alert(title, message);
  };

  const requestLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        const hasFine = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        const hasCoarse = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
        );

        if (hasFine && hasCoarse) {
          return true;
        }

        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        ]);

        const fineStatus = granted['android.permission.ACCESS_FINE_LOCATION'];
        const coarseStatus = granted['android.permission.ACCESS_COARSE_LOCATION'];

        return (
          fineStatus === PermissionsAndroid.RESULTS.GRANTED ||
          coarseStatus === PermissionsAndroid.RESULTS.GRANTED
        );
      } catch (err) {
        Alert.alert('Permission Error', String(err));
        return false;
      }
    }

    if (Platform.OS === 'ios') {
      try {
        const auth = await Geolocation.requestAuthorization('whenInUse');
        return auth === 'granted';
      } catch {
        return false;
      }
    }

    return true;
  };

  const startWatchingLocation = () => {
    if (watchIdRef.current !== null) {
      Geolocation.clearWatch(watchIdRef.current);
    }

    const watchId = Geolocation.watchPosition(
      position => {
        if (position && position.coords) {
          const { latitude, longitude } = position.coords;
          setLocationText(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`);
          if (onLocationFoundRef.current) {
            onLocationFoundRef.current({ latitude, longitude });
          }
        }
      },
      error => {
        showGeolocationError(error);
      },
      {
        enableHighAccuracy: false,
        distanceFilter: 10,
        interval: 5000,
        fastestInterval: 3000,
        showLocationDialog: false,
        forceRequestLocation: false,
        forceLocationManager: true,
      }
    );

    watchIdRef.current = watchId;
    setIsWatching(true);
  };

  const stopWatchingLocation = () => {
    if (watchIdRef.current !== null) {
      Geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    setIsWatching(false);
    setLocationText(null);
    if (onStopSharingRef.current) {
      onStopSharingRef.current();
    }
  };

  const fetchFirstPositionWithFallback = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLoading(false);
        if (position && position.coords) {
          const { latitude, longitude } = position.coords;
          setLocationText(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`);
          if (onLocationFoundRef.current) {
            onLocationFoundRef.current({ latitude, longitude });
          }
          startWatchingLocation();
        }
      },
      error => {
        setLoading(false);
        showGeolocationError(error);
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 60000,
        showLocationDialog: false,
        forceRequestLocation: false,
        forceLocationManager: true,
      }
    );
  };

  const toggleLocationSharing = async () => {
    if (isWatching) {
      stopWatchingLocation();
      return;
    }

    setLoading(true);

    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      setLoading(false);
      Alert.alert(
        'Location Permission Needed',
        'Please allow location access in phone settings to share your live location with the driver.'
      );
      return;
    }

    fetchFirstPositionWithFallback();
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.shareButton,
          isWatching && styles.shareButtonWatching,
        ]}
        activeOpacity={0.85}
        onPress={toggleLocationSharing}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.shareButtonText}>
            {isWatching ? 'Stop sharing location' : 'Share live location'}
          </Text>
        )}
      </TouchableOpacity>

      {locationText && (
        <Text style={styles.locationFoundBadge}>
          {locationText}
        </Text>
      )}
    </View>
  );
};

export default LocationScreen;