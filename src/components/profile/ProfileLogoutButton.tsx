import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

type ProfileLogoutButtonProps = {
  buttonStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  onPress: () => void;
};

export default function ProfileLogoutButton({
  buttonStyle,
  textStyle,
  onPress,
}: ProfileLogoutButtonProps) {
  return (
    <TouchableOpacity style={buttonStyle} activeOpacity={0.8} onPress={onPress}>
      <Feather name="log-out" size={18} color="#EF4444" />
      <Text style={textStyle}>Log Out</Text>
    </TouchableOpacity>
  );
}
