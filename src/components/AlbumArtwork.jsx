import { Box, View } from 'native-base';
import { ImageBackground } from 'react-native';
import { useThemeColors } from './ThemeToggle';

const AlbumArtwork = ({ track, mb }) => {
  const { bg } = useThemeColors();

  return (
    <Box
      style={{
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
      }}
      m={mb.toString()}
    >
      <ImageBackground
        source={{ uri: track.artwork }}
        alt={track.title}
        width={500}
        height={500}
        borderRadius={100}
      >
        <View
          h={150}
          w={150}
          justifyContent={'center'}
          alignItems={'center'}
          shadow={15}
        >
          <View h={35} w={35} bg={bg} rounded={100}>
            {}
          </View>
        </View>
      </ImageBackground>
    </Box>
  );
};

export default AlbumArtwork;
