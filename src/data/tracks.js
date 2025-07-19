import TrackPlayer from 'react-native-track-player';

// src/data/tracks.ts
export const tracks = [
    {
    id: 'soundhelix-1',
    title: 'SoundHelix Song 1',
    artist: 'SoundHelix',
    duration: 330,
    artwork: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'soundhelix-2',
    title: 'SoundHelix Song 2',
    artist: 'SoundHelix',
    duration: 285,
    artwork: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
];


export const addTracks = async () => {
  try {
    // Add tracks
    await TrackPlayer.add([...tracks]);

    console.log('Tracks added successfullly');
  } catch (error) {
    console.warn('Tracks failed to add', error);
  }
};
