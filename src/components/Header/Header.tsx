import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './Header.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/appStore';

interface HeaderProps {
  children?: React.ReactNode;
  name?: string;
  roleTitle?: string;
  avatarInitial?: string;
  onAvatarPress?: () => void;
}

export default function Header({
  children,
  name = 'Toka',
  roleTitle = 'Welcome back,',
  avatarInitial,
  onAvatarPress,
}: HeaderProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const initial = avatarInitial || (name ? name[0] : 'U');

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.greetingSub}>{roleTitle}</Text>
          <View style={styles.greetingNameRow}>
            <Text style={styles.greetingName}>{user?.name ?? name}</Text>
            <MaterialCommunityIcons name="hand-wave" size={18} color="#FBBF24" />
          </View>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="bell" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.avatar}
            activeOpacity={0.8}
            onPress={onAvatarPress}
          >
            <Text style={styles.avatarText}>{initial}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {children}
    </View>
  );
}
