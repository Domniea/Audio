import { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Slider,
  useColorModeValue,
  Icon,
} from 'native-base';
import { useRoute } from '@react-navigation/native';
import { formatDuration } from '../utils/utils';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { useAudioControls } from '../audio/useAudioControls.js';
import NavButton from '../components/NavButton';
import AlbumArtwork from '../components/AlbumArtwork.jsx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlaybackSpeedSelector from '../components/PlaybackSpeedSelector.jsx';
import { useThemeColors, ThemeToggle } from '../components/ThemeToggle.jsx';


export default function AudioPlayerScreen({ navigation }) {
  const route = useRoute();

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
  
  const [isPlaying, setIsPlaying] = useState(false);
  const playbackState = usePlaybackState();

  const [playbackSpeed, setPlaybackSpeed] = useState('1.0');
  const { seekTo, progress } = useAudioControls();

  const togglePlayback = async () => {
    try {
      if (playbackState.state === 'playing') {
        await TrackPlayer.pause();
        setIsPlaying(false);
      } else if (playbackState.state === 'paused' || playbackState === 'none') {
        await TrackPlayer.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.warn('Playback toggle failed', error);
    }
  };

  //Theme
  const { bg, secondaryText, iconColor } = useThemeColors()

  useEffect(() => {
    const loadTrack = async () => {
      try {
        await TrackPlayer.reset();
        await TrackPlayer.add(track);
        await TrackPlayer.play();
      } catch (error) {
        console.warn('Failed to load track:', error);
      }
    };

    loadTrack();
  }, [track]);

  return (
    <Box flex={1} bg={bg} p={4} justifyContent="center" alignItems="center">
      <AlbumArtwork mb={'40'} track={track} />

      <VStack alignItems="center" space={2} mb={6}>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text color={secondaryText} fontSize="md">
          {artist}
        </Text>
      </VStack>

      <HStack justifyContent="space-between" w="80%" mb={6}>
        <Text color={secondaryText}>{formatDuration(progress.position)}</Text>
        <Text color={secondaryText}>{formatDuration(duration)}</Text>
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

      <HStack space={6} alignItems="center" justifyContent="center">
        <Button variant="ghost" onPress={() => seekTo(Math.max(progress.position - 15, 0))}>
          <Text color={iconColor}>-15s</Text>
        </Button>

        <Button variant="ghost" onPress={togglePlayback}>
          <Icon as={Ionicons} name="play-outline" size="5xl" color={iconColor} />
        </Button>

        <Button variant="ghost" onPress={() => seekTo(progress.position + 15)}>
          <Text color={iconColor}>+15s</Text>
        </Button>
      </HStack>

      <PlaybackSpeedSelector />

      <Box mt={6}>
        <NavButton message={'Tracklist'} route={'AudioList'} />
        <ThemeToggle />
      </Box>
    </Box>
  );
}
