import { useEffect } from 'react';
import { 
  Box, 
  Text, 
  Button, 
  HStack, 
  VStack, 
  Slider, 
  select,
  CheckIcon
} from 'native-base';
import { useRoute } from '@react-navigation/native';
import { formatDuration } from '../utils/utils';
import TrackPlayer , { State, usePlaybackState } from 'react-native-track-player';
import { useAudioControls } from '../audio/useAudioControls.js';
import NavButton from '../components/NavButton';
import AlbumArtwork from '../components/AlbumArtwork.jsx';


import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function AudioPlayerScreen({ navigation }) {
  const route = useRoute();
  const playbackState = usePlaybackState();

  const fallbackTrack = {
    id: 'fallback',
    title: 'Unknown Track',
    artist: 'Unknown Artist',
    artwork: 'https://via.placeholder.com/150',
    duration: 0,
    url: '',
  };

  const { track = fallbackTrack } = route.params || {};
  const { title, artist, artwork, duration } = track;

  const { seekTo, progress } = useAudioControls();

  const togglePlayback = async () => {
  try {
    console.log('Current playbackState:', playbackState.state);
    if (playbackState.state === 'playing') {
      await TrackPlayer.pause();
      setisPlaying(false)
    } else if (
      playbackState.state === 'paused' ||
      playbackState === 'none'
    ) {
      await TrackPlayer.play();
      setisPlaying(true)
    }
  } catch (error) {
    console.warn('Playback toggle failed', error);
  }
};

useEffect(() => {
  const loadTrack = async () => {
    try {
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
      await TrackPlayer.play();
      console.log('Track loaded and playing');
    } catch (error) {
      console.warn('Failed to load track:', error);
    }
  };

  loadTrack();
}, [track]);

  return (
    <Box flex={1} bg="white" p={4} justifyContent="center" alignItems="center">
      
      <AlbumArtwork track={track}/>
      <VStack alignItems="center" space={2} mb={6}>
        <Text fontSize="xl" fontWeight="bold">{title}</Text>
        <Text color="gray.400" fontSize="md">{artist}</Text>
      </VStack>
      
      <HStack justifyContent="space-between" w="80%" mb={6}>
        <Text color="gray.400">{formatDuration(progress.position)}</Text>
        <Text color="gray.400">{formatDuration(duration)}</Text>
      </HStack>
<Icon as={Ionicons} name="play-skip-forward" size="lg" color="primary.500" />
     <Slider w="80%" minValue={0} maxValue={duration} value={progress.position} onChange={seekTo} mb={4}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <HStack space={6} alignItems="center">
        <Button variant="ghost" onPress={() => seekTo(Math.max(progress.position - 15, 0))}>
          <Text>-15s</Text>
        </Button>
        <Button variant="ghost" onPress={togglePlayback}>
          <Text>{playbackState.state === 'playing' ? 'Pause' : 'Play'}</Text>
        </Button>
        <Button variant="ghost" onPress={() => seekTo(progress.position + 15)}>
          <Text>+15s</Text>
        </Button>
      </HStack>

      <Box mt={6}>
        <NavButton message={'Tracklist'} route={'AudioList'} />
      </Box>
    </Box>
  );
}
