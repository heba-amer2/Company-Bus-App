import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { styles } from './BottomNavBar.styles';

export default function BottomNavBar() {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
        <View style={styles.activeIndicator} />
        
        <Text style={styles.navLabelActive}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
        
        <Text style={styles.navLabel}>Trips</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
      
        <Text style={styles.navLabel}>Reservations</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
        
        <Text style={styles.navLabel}>Tracking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
        
        <Text style={styles.navLabel}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
