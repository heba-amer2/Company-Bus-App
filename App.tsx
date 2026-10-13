import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/employee/Home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootStack from './src/navigation/RootStack';
import { Provider } from 'react-redux';
import { store } from './src/store/appStore';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store ={store}>
    <NavigationContainer>
      <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack />
      </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>

    </Provider>
  );
}

export default App;

