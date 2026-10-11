import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ManagementScreen.styles'
import { MockBus } from './ManagementScreen'

type Badge = {
  bg: string
  text: string
}

type BusesListProps = {
  bus: MockBus
  badge: Badge
  toggleBusStatus: (busId: MockBus['id']) => void
}


export default function BusesList({ bus, badge, toggleBusStatus }: BusesListProps) {
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
  )
}