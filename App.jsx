import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AudioPlayerScreen from './src/screens/AudioPlayerScreen';
import TrackList from './src/screens/AudioListScreen';
import { NativeBaseProvider } from 'native-base';
import { setupPlayer } from './src/audio/setupPlayer';


import TrackPlayer, { State, useProgress, usePlaybackState, getPlaybackState } from 'react-native-track-player';





const Stack = createNativeStackNavigator();

export default function App() {


const state = usePlaybackState();

// console.log('raw playbackState:', state);
// console.log('is object:', typeof state === 'object');
// console.log('state.state:', state?.state);
// console.log('State enum values:', State);




const progress = useProgress()





useEffect(() => {
  setupPlayer()
}, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AudioList" component={TrackList} />
          <Stack.Screen name="AudioPlayer" component={AudioPlayerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}