import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/employee/Home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootStack from './src/navigation/RootStack';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack />
      </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;

