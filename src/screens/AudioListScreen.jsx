import { FlatList, ImageBackground } from 'react-native';
import { Box, Text, VStack, HStack, Pressable, View } from 'native-base';
import { tracks } from '../data/tracks';
import { formatDuration } from '../utils/utils';
import { useThemeColors } from '../components/ThemeToggle';
import NavButton from '../components/NavButton';
import { onTrackPress } from '../audio/playbackManager';

function AudioListScreen({ navigation }) {
  const { bg, secondaryText } = useThemeColors();

  const trackListing = ({ item }) => {
    const { title, artist, artwork, duration } = item;

    return (
      <Pressable m={2} p={2} onPress={() => onTrackPress(item, navigation)}>
        <HStack space={3} alignItems="center" p={4}>
          <Box
            style={{
              shadowColor: 'red',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <ImageBackground
              source={{ uri: artwork }}
              alt={title}
              width={500}
              height={500}
              borderRadius={100}
            >
              <View
                h={150}
                w={150}
                justifyContent="center"
                alignItems="center"
                shadow={15}
              >
                <View h={35} w={35} bg={bg} rounded={100} />
              </View>
            </ImageBackground>
          </Box>

          <VStack>
            <Text bold>{title}</Text>
            <Text color={secondaryText}>{artist}</Text>
            <Text fontSize="xs" color={secondaryText}>
              {formatDuration(duration)}
            </Text>
          </VStack>
        </HStack>
      </Pressable>
    );
  };

  return (
    <Box flex={1} bg={bg} justifyContent="center" alignItems="center">
      <Box flex={1} p={4}>
        <FlatList
          data={tracks}
          renderItem={trackListing}
          keyExtractor={item => item.id}
          contentContainerStyle={{ alignItems: 'flex-start' }}
        />
      </Box>
      <NavButton message="Back To Player" route="AudioPlayer" />
    </Box>
  );
}

export default AudioListScreen;
