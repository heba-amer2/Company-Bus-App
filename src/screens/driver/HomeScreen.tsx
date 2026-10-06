import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import ReservationCard from '../../components/ReservationCard/ReservationCard';
import { styles } from './HomeScreen.styles';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header>
        <ReservationCard />
        
      </Header>
    </ScrollView>
  );
}

