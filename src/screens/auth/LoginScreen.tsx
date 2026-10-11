import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './LoginScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackType } from '../../navigation/RootStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginSchema, loginSchema } from '../../../schemas/auth/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useLoginMutation } from '../../services/api/auth.api';
type NavProps = StackNavigationProp<RootStackType>;
export default function LoginScreen() {
  const navigation = useNavigation<NavProps>();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [triggerLogin, { isLoading, isSuccess }] = useLoginMutation();
  const onSubmit = async (data: LoginSchema) => {
    if (isLoading) return;
    console.log(data, 'from login');

    try {
      await triggerLogin(data).unwrap();
      navigation.navigate('MainStack', {
        screen: 'BottomTabs',
        params: {
          screen: 'EmployeeHomeScreen',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerBannerContainer}>
          <Image
            source={require('../../assets/images/login_header.jpg')}
            style={styles.headerBannerImage}
            resizeMode="cover"
          />
          <View style={styles.headerOverlay} />

          <View style={styles.appHeader}>
            <View style={styles.appIconBadge}>
              <MaterialCommunityIcons name="bus" size={22} color="#071E3D" />
            </View>
            <Text style={styles.appTitle}>Company Bus</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitleBadge}>WELCOME BACK</Text>
          <Text style={styles.mainTitle}>Sign in to your account</Text>
          <Text style={styles.description}>
            Manage your company transportation and never miss your ride.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email address</Text>
            <View style={styles.inputBox}>
              <View style={styles.inputIcon}>
                <Feather name="user" size={15} color="#94A3B8" />
              </View>

              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={styles.inputField}
                    placeholder="employee@company.com"
                    placeholderTextColor="#94A3B8"
                  />
                )}
              />
            </View>
            {errors.email && (
              <Text
                style={{
                  color: '#fefe',
                  marginTop: 5,
                  backgroundColor: 'red',
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                {errors.email.message}
              </Text>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputBox}>
              <View style={styles.inputIcon}>
                <Feather name="lock" size={15} color="#94A3B8" />
              </View>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={styles.inputField}
                    placeholder="••••••••••••"
                    placeholderTextColor="#94A3B8"
                    secureTextEntry
                  />
                )}
              />
              <TouchableOpacity style={styles.passwordEye} activeOpacity={0.7}>
                <Feather name="eye" size={16} color="#94A3B8" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.optionsRow}>
            <View style={styles.rememberContainer}>
              <View style={styles.checkboxChecked}>
                <Feather name="check" size={11} color="#FFFFFF" />
              </View>
              <Text style={styles.rememberLabel}>Remember me</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.signInButton}
            activeOpacity={0.85}
            onPress={() => handleSubmit(onSubmit)()}
          >
            <Text style={styles.signInButtonText}>
              {isLoading ? 'Loading' : 'Sign in'}
            </Text>
          </TouchableOpacity>

          <View style={styles.supportContainer}>
            <Text style={styles.supportText}>
              Need help? Contact Transportation Support
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
