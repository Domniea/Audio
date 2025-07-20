import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AudioPlayerScreen from './src/screens/AudioPlayerScreen';
import TrackList from './src/screens/AudioListScreen';
import { NativeBaseProvider } from 'native-base';
import { setupPlayer } from './src/audio/setupPlayer';

const Stack = createNativeStackNavigator();

export default function App() {

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