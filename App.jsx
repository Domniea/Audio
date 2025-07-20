import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AudioPlayerScreen from './src/screens/AudioPlayerScreen';
// import TrackList from './src/screens/AudioListScreen';
import { NativeBaseProvider } from 'native-base';
import theme from './src/theme/theme'
import { setupPlayer } from './src/audio/setupPlayer';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { handleAppState } from './src/audio/playbackManager';
import { TrackProvider } from './src/context/TrackContext';

export default function App() {

useEffect(() => {
  setupPlayer()
  handleAppState()
}, []);

  return (
    <TrackProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen name="AudioList" component={TrackList} />
            <Stack.Screen name="AudioPlayer" component={AudioPlayerScreen} />
          </Stack.Navigator> */}
          <MainStackNavigator/>
        </NavigationContainer>
      </NativeBaseProvider>
    </TrackProvider>
  );
}