import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ScreenHeaderStyles = {
  headerTop: StyleProp<ViewStyle>;
  headerEyebrow: StyleProp<TextStyle>;
  headerTitle: StyleProp<TextStyle>;
  headerIconButton: StyleProp<ViewStyle>;
};

type ScreenHeaderProps = {
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  style: StyleProp<ViewStyle>;
  headerStyles: ScreenHeaderStyles;
};

export default function ScreenHeader({
  eyebrow,
  title,
  icon,
  children,
  style,
  headerStyles,
}: ScreenHeaderProps) {
  return (
    <View style={style}>
      <View style={headerStyles.headerTop}>
        <View>
          <Text style={headerStyles.headerEyebrow}>{eyebrow}</Text>
          <Text style={headerStyles.headerTitle}>{title}</Text>
        </View>
        <TouchableOpacity style={headerStyles.headerIconButton} activeOpacity={0.7}>
          {icon}
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
}
