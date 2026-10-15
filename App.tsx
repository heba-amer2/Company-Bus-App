import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaView
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootStack from './src/navigation/RootStack';
import { Provider } from 'react-redux';
import { store } from './src/store/appStore';
import AuthInitializer from './src/AuthInitializer';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store ={store}>
      <AuthInitializer>

    <NavigationContainer>
      <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack />
      </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
      </AuthInitializer>

    </Provider>
  );
}

export default App;

