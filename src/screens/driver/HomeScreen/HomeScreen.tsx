import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './HomeScreen.styles';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeStats from '../components/HomeStats/HomeStats';
import AssignedTripCard from '../components/AssignedTripCard/AssignedTripCard';
import TodaySchedule from '../components/TodaySchedule/TodaySchedule';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <HomeStats />
        <AssignedTripCard />
        <TodaySchedule />
      </ScrollView>
    </View>
  );
}
