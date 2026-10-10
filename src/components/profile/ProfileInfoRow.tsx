import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

export type ProfileInfoRowStyles = {
  infoRow: StyleProp<ViewStyle>;
  infoLeft: StyleProp<ViewStyle>;
  infoIconContainer: StyleProp<ViewStyle>;
  infoLabel: StyleProp<TextStyle>;
  infoValue: StyleProp<TextStyle>;
};

type ProfileInfoRowProps = {
  rowStyles: ProfileInfoRowStyles;
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
};

export default function ProfileInfoRow({
  rowStyles,
  icon,
  label,
  value,
  last,
}: ProfileInfoRowProps) {
  return (
    <View style={[rowStyles.infoRow, last ? localStyles.lastRow : null]}>
      <View style={rowStyles.infoLeft}>
        <View style={[rowStyles.infoIconContainer, localStyles.iconBackground]}>
          {icon}
        </View>
        <View>
          <Text style={rowStyles.infoLabel}>{label}</Text>
          <Text style={rowStyles.infoValue}>{value}</Text>
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  lastRow: {
    borderBottomWidth: 0,
  },
  iconBackground: {
    backgroundColor: '#F1F5F9',
  },
});
