import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import theme from './src/theme/theme'
import { setupPlayer } from './src/audio/setupPlayer';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { handleAppState } from './src/audio/playbackManager';
import { TrackProvider } from './src/context/TrackContext';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

useEffect(() => {
  setupPlayer()
  handleAppState()
}, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TrackProvider>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <DrawerNavigator/>
            {/* <MainStackNavigator/> */}
          </NavigationContainer>
        </NativeBaseProvider>
      </TrackProvider>
    </GestureHandlerRootView>
  );
}