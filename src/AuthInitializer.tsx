import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setCredentials } from './store/Slices/AuthSlice';
import type { AppDispatch } from './store/appStore';
import type { LoginResponse } from './types/LoginResponse';

type Props = {
  children: React.ReactNode;
};

export default function AuthInitializer({ children }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const restoreAuth = async () => {
      try {
        const savedData = await AsyncStorage.getItem('AuthData');

        if (savedData) {
          const response: LoginResponse = JSON.parse(savedData);
          dispatch(setCredentials(response));
        }
      } catch (error) {
        console.error('Failed to restore auth:', error);
      } finally {
        setIsReady(true);
      }
    };

    restoreAuth();
  }, [dispatch]);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
}