import React from 'react';
import { FlatList, ImageBackground } from 'react-native';
import {
  Button,
  Box,
  Text,
  VStack,
  HStack,
  Pressable,
  View,
} from 'native-base';
import { tracks } from '../data/tracks';
import { formatDuration } from '../utils/utils';
import NavButton from '../components/NavButton';



function AudioListScreen({navigation}) {
    // const navigation = useNavigation();

    const onTrackPress = (track) => {
        try {
            navigation.navigate('AudioPlayer', { track }); 
            console.log(`Successfully selected track`)
        } catch (error) {
            console.log('Failed to select song', error)
        }
    }
    
  const trackListing = ({ item }) => {
    const { 
        title, 
        artist, 
        artwork, 
        duration 
    } = item;

    return (
      <Pressable m={2} p={2} onPress={() => onTrackPress(item)}>
        <HStack
          // bg={'gray.100'}
          space={3}
          alignItems={'center'}
          p={4}
        >

          {/*
            Box below is the Album artwork container > Artwork > Center of vinyl container > Vinyl center
          */}
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
                justifyContent={'center'}
                alignItems={'center'}
                shadow={15}
              >
                <View h={35} w={35} bg={'white'} rounded={100}>
                  {}
                </View>
              </View>
            </ImageBackground>
          </Box>

            {/* Artist Details */}
          <VStack>
            <Text bold>{title}</Text>
            <Text>{artist}</Text>
            <Text fontSize="xs" color="gray.400">
              {formatDuration(duration)}
            </Text>
          </VStack>
        </HStack>
      </Pressable>
    );
  };


  return (
    <Box flex={1} bg={'white'} justifyContent={'center'} alignItems={'center'}>
      <Box flex={1} p={'15'}>
        <FlatList
          data={tracks}
          renderItem={trackListing}
          keyExtractor={item => item.id}
          contentContainerStyle={{ alignItems: 'left' }}
        />
      </Box>
      {/* <Box bg={'red.100'} justifyContent={'center'} alignItems={'center'}> */}
        {/* <Button
            mb={'7'}
            pb={'2.5'}
            pt={'1.5'}
            variant={'ghost'}
            onPress={() => navigation.navigate('AudioPlayer',)}

        >
            Go to Player
        </Button> */}
         <NavButton message={'Back To Player'} route={'AudioPlayer'}/>
      {/* </Box> */}
    </Box>
  );
}

export default AudioListScreen;
