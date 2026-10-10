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

export type ProfileHeaderStyles = {
  header: StyleProp<ViewStyle>;
  headerTop: StyleProp<ViewStyle>;
  headerTitle: StyleProp<TextStyle>;
  headerIconButton: StyleProp<ViewStyle>;
  profileHero: StyleProp<ViewStyle>;
  avatarContainer: StyleProp<ViewStyle>;
  avatar: StyleProp<ViewStyle>;
  avatarInitials: StyleProp<TextStyle>;
  cameraBadge: StyleProp<ViewStyle>;
  heroDetails: StyleProp<ViewStyle>;
  heroName: StyleProp<TextStyle>;
  heroRole: StyleProp<TextStyle>;
  employeeBadge: StyleProp<ViewStyle>;
  employeeBadgeText: StyleProp<TextStyle>;
};

type ProfileHeaderProps = {
  headerStyle?: StyleProp<ViewStyle>;
  headerStyles: ProfileHeaderStyles;
  initials: string;
  name: string;
  role: string;
  badgeIcon: React.ReactNode;
  badgeText: string;
};

export default function ProfileHeader({
  headerStyle,
  headerStyles,
  initials,
  name,
  role,
  badgeIcon,
  badgeText,
}: ProfileHeaderProps) {
  return (
    <View style={headerStyle ?? headerStyles.header}>
      <View style={headerStyles.headerTop}>
        <Text style={headerStyles.headerTitle}>Profile</Text>
        <TouchableOpacity style={headerStyles.headerIconButton} activeOpacity={0.7}>
          <Feather name="settings" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={headerStyles.profileHero}>
        <View style={headerStyles.avatarContainer}>
          <View style={headerStyles.avatar}>
            <Text style={headerStyles.avatarInitials}>{initials}</Text>
          </View>
          <View style={headerStyles.cameraBadge}>
            <Feather name="camera" size={12} color="#FFFFFF" />
          </View>
        </View>

        <View style={headerStyles.heroDetails}>
          <Text style={headerStyles.heroName}>{name}</Text>
          <Text style={headerStyles.heroRole}>{role}</Text>
          <View style={headerStyles.employeeBadge}>
            {badgeIcon}
            <Text style={headerStyles.employeeBadgeText}>{badgeText}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
