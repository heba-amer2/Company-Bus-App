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
  icon?: React.ReactNode;
  onActionPress?: () => void;
  actionLabel?: string;
  children?: React.ReactNode;
  style: StyleProp<ViewStyle>;
  headerStyles: ScreenHeaderStyles;
};

export default function ScreenHeader({
  eyebrow,
  title,
  icon,
  onActionPress,
  actionLabel,
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
        {icon ? (
          <TouchableOpacity
            style={headerStyles.headerIconButton}
            activeOpacity={onActionPress ? 0.7 : 1}
            onPress={onActionPress}
            disabled={!onActionPress}
            accessibilityRole="button"
            accessibilityLabel={actionLabel ?? 'Header action'}
          >
            {icon}
          </TouchableOpacity>
        ) : (
          <View style={{ width: 42 }} />
        )}
      </View>
      {children}
    </View>
  );
}
