import { useEffect } from 'react';
import { Box, Text, Button, HStack, VStack, Slider, Icon } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { formatDuration } from '../utils/utils';

import NavButton from '../components/NavButton';

export default function AudioPlayerScreen({ navigation}) {
    const route = useRoute()

    const fallbackTrack = {
        title: 'Unknown Track',
        artist: 'Unknown Artist',
        artwork: 'https://via.placeholder.com/150',
        duration: 0,
};

const { track = fallbackTrack } = route.params || {};



    const { 
        title, 
        artist, 
        artwork, 
        duration 
    } = track;

  return (
    <Box flex={1} bg="white" p={4} justifyContent="center" alignItems="center">
      {/* Track Info */}
      <VStack alignItems="center" space={2} mb={6}>
        <Text color="white" fontSize="xl" fontWeight="bold">{title}e</Text>
        <Text color="gray.400" fontSize="md">{artist}</Text>
      </VStack>

      {/* Seek Slider */}
      <Slider w="80%" minValue={0} maxValue={duration} defaultValue={0} mb={4}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      {/* Time */}
      <HStack justifyContent="space-between" w="80%" mb={6}>
        <Text color="gray.400">0:00</Text>
        <Text color="gray.400">{formatDuration(duration)}</Text>
      </HStack>

      {/* Controls */}
      <HStack space={6} alignItems="center">
        <Button variant="ghost">
          <Icon name="replay-10" size="lg" color="white" />
        </Button>
        <Button variant="ghost">
          <Icon name="play-arrow" size="2xl" color="white" />
        </Button>
        <Button variant="ghost">
          <Icon name="forward-10" size="lg" color="white" />
        </Button>
      </HStack>
      <Box>
        <NavButton message={'Tracklist'} route={'AudioList'}/>
      </Box>
    </Box>
  );
}


