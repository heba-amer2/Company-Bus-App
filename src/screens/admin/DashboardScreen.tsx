import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import { styles } from './DashboardScreen.styles';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
    </ScrollView>
  );
}
