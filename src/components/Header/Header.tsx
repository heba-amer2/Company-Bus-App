import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './Header.styles';

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.greetingSub}>Welcome back,</Text>
          <View style={styles.greetingNameRow}>
            <Text style={styles.greetingName}>Toka</Text>
            <MaterialCommunityIcons name="hand-wave" size={18} color="#FBBF24" />
          </View>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="bell" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.avatar}>
            <Text style={styles.avatarText}>T</Text>
          </TouchableOpacity>
        </View>
      </View>
      {children}
    </View>
  );
}
