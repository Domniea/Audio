import TrackPlayer from 'react-native-track-player';

// src/data/tracks.ts
export const tracks = [
  {
    id: 'soft-calm',
    url: 'https://cdn.pixabay.com/download/audio/2024/01/05/music_12345.mp3',
    title: 'Soft Calm Background',
    artist: 'HitsLab',
    artwork:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    duration: 118,
  },
  {
    id: 'summer-bg',
    url: 'https://cdn.pixabay.com/download/audio/2024/02/10/music_67890.mp3',
    title: 'Summer Background Music',
    artist: 'SigmaMusicArt',
    artwork:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
    duration: 204,
  },
  {
    id: 'synth-19s',
    url: 'https://samplelib.com/lib/preview/mp3/sample-19s.mp3',
    title: '19‑Seconds Synth Melody',
    artist: 'SampleLib',
    artwork:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    duration: 19,
  },
  {
    id: 'lofi-study',
    url: 'https://cdn.pixabay.com/download/audio/2023/03/01/audio_16777b3db3.mp3',
    title: 'Lo-Fi Study Beat',
    artist: 'LofiPlay',
    artwork:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
    duration: 132,
  },
  {
    id: 'chill-vibes',
    url: 'https://cdn.pixabay.com/download/audio/2022/08/16/audio_b0c64e5b07.mp3',
    title: 'Chill Vibes',
    artist: 'Coma-Media',
    artwork:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
    duration: 174,
  },
  {
    id: 'ambient-piano',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/30/audio_7946b57a8f.mp3',
    title: 'Ambient Piano',
    artist: 'FASSounds',
    artwork:
      'https://images.unsplash.com/photo-1508881597000-48ab7d5e4896?auto=format&fit=crop&w=600&q=80', // 🎹 piano with a soft ambiance
    duration: 95,
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
