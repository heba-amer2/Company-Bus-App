import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export type ProfileMenuItemStyles = {
  menuItem: StyleProp<ViewStyle>;
  menuItemLast: StyleProp<ViewStyle>;
  menuItemLeft: StyleProp<ViewStyle>;
  menuItemRight: StyleProp<ViewStyle>;
  infoIconContainer: StyleProp<ViewStyle>;
  menuItemTitle: StyleProp<TextStyle>;
  menuItemSubtitle: StyleProp<TextStyle>;
  badgeTextGreen: StyleProp<TextStyle>;
};

type ProfileMenuItemProps = {
  itemStyles: ProfileMenuItemStyles;
  icon: React.ReactNode;
  iconBackgroundColor: string;
  title: string;
  subtitle: string;
  last?: boolean;
  showActiveBadge?: boolean;
};

export default function ProfileMenuItem({
  itemStyles,
  icon,
  iconBackgroundColor,
  title,
  subtitle,
  last,
  showActiveBadge,
}: ProfileMenuItemProps) {
  return (
    <TouchableOpacity
      style={[itemStyles.menuItem, last ? itemStyles.menuItemLast : null]}
      activeOpacity={0.7}
    >
      <View style={itemStyles.menuItemLeft}>
        <View style={[itemStyles.infoIconContainer, { backgroundColor: iconBackgroundColor }]}>
          {icon}
        </View>
        <View>
          <Text style={itemStyles.menuItemTitle}>{title}</Text>
          <Text style={itemStyles.menuItemSubtitle}>{subtitle}</Text>
        </View>
      </View>
      {showActiveBadge ? (
        <View style={itemStyles.menuItemRight}>
          <Text style={itemStyles.badgeTextGreen}>Active</Text>
          <Feather name="chevron-right" size={18} color="#94A3B8" />
        </View>
      ) : (
        <Feather name="chevron-right" size={18} color="#94A3B8" />
      )}
    </TouchableOpacity>
  );
}
