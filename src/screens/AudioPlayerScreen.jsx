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
import { formatDuration } from '../utils/utils';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
import { useTrack } from '../context/TrackContext.js';
import { useAudioControls } from '../audio/useAudioControls.js';
import NavButton from '../components/NavButton';
import AlbumArtwork from '../components/AlbumArtwork.jsx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlaybackSpeedSelector from '../components/PlaybackSpeedSelector.jsx';
import { useThemeColors } from '../components/ThemeToggle.jsx';

export default function AudioPlayerScreen({ navigation }) {
  // Track implementaion, destructuring, ect
  const { setCurrentTrack, currentTrack } = useTrack();

  const fallbackTrack = {
    id: 'fallback',
    title: 'Unknown Track',
    artist: 'Unknown Artist',
    artwork: 'https://via.placeholder.com/150',
    duration: 0,
    url: '',
  };

  const track = currentTrack || fallbackTrack;
  const { title, artist, duration } = track;

  // Track playback and scrubbing
  const playbackState = usePlaybackState();

  const { seekTo, progress } = useAudioControls();

  const togglePlayback = async () => {
    try {
      if (playbackState.state === 'playing') {
        await TrackPlayer.pause();
      } else if (playbackState.state === 'paused' || playbackState === 'none') {
        await TrackPlayer.play();
      }
    } catch (error) {
      console.warn('Playback toggle failed', error);
    }
  };

  //Theme
  const { bg, secondaryText, iconColor } = useThemeColors();

  useEffect(() => {
    const loadCurrentTrack = async () => {
      try {
        const id = await TrackPlayer.getActiveTrackIndex();
        const nowPlaying = await TrackPlayer.getTrack(id);
        setCurrentTrack(nowPlaying); // if you're using local state
      } catch (err) {
        console.warn('Error getting current track', err);
      }
    };

    loadCurrentTrack();
  }, []);

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
        <Slider.Track bg={'purple.100'}>
          <Slider.FilledTrack bg={'blue.200'} />
        </Slider.Track>
        <Slider.Thumb bg={'blue.500'} />
      </Slider>

      <HStack space={6} alignItems="center" justifyContent="center">
        <Button
          variant="ghost"
          onPress={() => seekTo(Math.max(progress.position - 15, 0))}
        >
          <Text color={iconColor}>-15s</Text>
        </Button>

        <Button variant="ghost" onPress={togglePlayback}>
          {playbackState.state === 'paused' ? (
            <Icon
              as={Ionicons}
              name="pause"
              size={'5xl'}
              color={iconColor}
            ></Icon>
          ) : (
            <Icon
              as={Ionicons}
              name="play-outline"
              size="5xl"
              color={iconColor}
            />
          )}
        </Button>

        <Button variant="ghost" onPress={() => seekTo(progress.position + 15)}>
          <Text color={iconColor}>+15s</Text>
        </Button>
      </HStack>

      <PlaybackSpeedSelector />

      <Box mt={6}>
        <NavButton message={'Tracklist'} route={'AudioList'} />
      </Box>
    </Box>
  );
}
