import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './BookingConfirmModal.styles';

export interface BookingConfirmModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  trip: {
    from: string;
    to: string;
    time: string;
    bus: string;
    duration?: string;
  };
}

export default function BookingConfirmModal({
  visible,
  onClose,
  onConfirm,
  trip,
}: BookingConfirmModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={28}
              color="#2563EB"
            />
          </View>

          <Text style={styles.title}>Confirm Reservation</Text>
          <Text style={styles.subtitle}>
            Please review your trip details before booking your seat.
          </Text>

          <View style={styles.tripSummaryBox}>
            <View style={styles.summaryRoute}>
              <Text style={styles.stationText}>{trip.from}</Text>
              <Feather name="arrow-right" size={16} color="#2563EB" />
              <Text style={styles.stationText}>{trip.to}</Text>
            </View>

            <View style={styles.summaryDivider} />

            <View style={styles.metaGrid}>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Departure Time</Text>
                <Text style={styles.metaValue}>{trip.time}</Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Bus Assigned</Text>
                <Text style={styles.metaValue}>{trip.bus}</Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Seat Assignment</Text>
                <Text style={[styles.metaValue, { color: '#2563EB' }]}>
                  Seat #12 (Automatic)
                </Text>
              </View>
            </View>

            <View style={styles.noticeBox}>
              <Feather name="check-circle" size={13} color="#059669" />
              <Text style={styles.noticeText}>Free company shuttle reservation</Text>
            </View>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={styles.confirmButton}
              activeOpacity={0.85}
              onPress={onConfirm}
            >
              <Feather name="check" size={18} color="#FFFFFF" />
              <Text style={styles.confirmButtonText}>Confirm & Book Seat</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              activeOpacity={0.8}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

