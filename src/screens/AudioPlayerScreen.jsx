import { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Slider,
  select,
  CheckIcon,
  Select,
  useSafeArea,
} from 'native-base';
import { useRoute } from '@react-navigation/native';
import { formatDuration } from '../utils/utils';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';
import { useAudioControls } from '../audio/useAudioControls.js';
import NavButton from '../components/NavButton';
import AlbumArtwork from '../components/AlbumArtwork.jsx';
import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlaybackSpeedSelector from '../components/PlaybackSpeedSelector.jsx';

export default function AudioPlayerScreen({ navigation }) {
  const route = useRoute();
  
  // Fallback track while nothing is selected or if there is an error
  const { track = fallbackTrack } = route.params || {};
  const { title, artist, artwork, duration } = track;
  
  const fallbackTrack = {
    id: 'fallback',
    title: 'Unknown Track',
    artist: 'Unknown Artist',
    artwork: 'https://via.placeholder.com/150',
    duration: 0,
    url: '',
  };

  //State of player
  const playbackState = usePlaybackState();
  
  // Playback adjust controls
  const [playbackSpeed, setPlaybackSpeed] = useState('1.0')
  const { seekTo, progress } = useAudioControls();
  
  const handleChange = async (value) => {
    setPlaybackSpeed(value);
    await TrackPlayer.setRate(parseFloat(value));
  };



  // Toggle playback functionality
  const togglePlayback = async () => {
    try {
      console.log('Current playbackState:', playbackState.state);
      if (playbackState.state === 'playing') {
        await TrackPlayer.pause();
        setisPlaying(false);
      } else if (playbackState.state === 'paused' || playbackState === 'none') {
        await TrackPlayer.play();
        setisPlaying(true);
      }
    } catch (error) {
      console.warn('Playback toggle failed', error);
    }
  };

  // Track kickoff/loader
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
      <AlbumArtwork mb={40} track={track} />

      <VStack alignItems="center" space={2} mb={6}>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text color="gray.400" fontSize="md">
          {artist}
        </Text>
      </VStack>

      <HStack justifyContent="space-between" w="80%" mb={6}>
        <Text color="gray.400">{formatDuration(progress.position)}</Text>
        <Text color="gray.400">{formatDuration(duration)}</Text>
      </HStack>

      <Slider
        w="80%"
        minValue={0}
        maxValue={duration}
        value={progress.position}
        onChange={seekTo}
        mb={4}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <Box justifyContent={'space-evenly'}>
        <HStack space={6} alignItems="center">
          <Button
            variant="ghost"
            onPress={() => seekTo(Math.max(progress.position - 15, 0))}
          >
            <Text>-15s</Text>
            {/* <Icon as={Ionicons} name="play-skip-back-outline" size="xl" color="primary.500" /> */}
          </Button>
          <Box>
            <Button variant="ghost" onPress={togglePlayback}>
              {/* <Text>{playbackState.state === 'playing' ? 'Pause' : 'Play'}</Text> */}
              <Icon
                as={Ionicons}
                name="play-outline"
                size="xl"
                color="primary.500"
              />
            </Button>
          </Box>
          <Button
            variant="ghost"
            onPress={() => seekTo(progress.position + 15)}
          >
            <Text>+15s</Text>
            {/* <Icon as={Ionicons} name="play-skip-back-outline" size="xl" color="primary.500" /> */}
          </Button>
        </HStack>
      </Box>
         {/* <Box w="40" maxW="300">
      <Select
        selectedValue={playbackSpeed}
        minWidth="200"
        accessibilityLabel="Choose Playback Speed"
        placeholder="Playback Speed"
        onValueChange={handleChange}
        _selectedItem={{
          bg: "primary.100",
          endIcon: <CheckIcon size="5" />,
        }}
      >
        <Select.Item label="0.75x" value="0.75" />
        <Select.Item label="1x (Normal)" value="1.0" />
        <Select.Item label="1.25x" value="1.25" />
        <Select.Item label="1.5x" value="1.5" />
        <Select.Item label="2x" value="2.0" />
      </Select>
    </Box> */}

        <PlaybackSpeedSelector/>
      <Box mt={6}>
        <NavButton message={'Tracklist'} route={'AudioList'} />
      </Box>
    </Box>
  );
}
