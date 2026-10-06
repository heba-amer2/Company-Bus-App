import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../../../components/Header/Header';
import ReservationCard from '../../../components/ReservationCard/ReservationCard';
import QuickActions from '../components/QuickActions/QuickActions';
import AvailableTrips from '../components/AvailableTrips/AvailableTrips';
import BottomNavBar from '../../../components/BottomNavBar/BottomNavBar';
import { styles } from './HomeScreen.styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        <Header>
          <ReservationCard />
        </Header>
        <QuickActions />
        <AvailableTrips />
      </ScrollView>
      
    </View>
  );
}

