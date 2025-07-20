// playbackManager.js
import TrackPlayer from 'react-native-track-player';
import { AppState } from 'react-native';

export const playTrack = async (track) => {
  if (!track?.url) {
    console.warn('No track loaded, skipping player setup');
    return;
  }

  try {
    await TrackPlayer.reset();
    await TrackPlayer.add(track);
    await TrackPlayer.play();
    console.log(`Now playing: ${track.title}`);
  } catch (error) {
    console.warn('Failed to load track:', error);
  }
};

export const onTrackPress = async (track, navigation) => {
  try {
    const queue = await TrackPlayer.getQueue();
    const alreadyQueued = queue.find(q => q.id === track.id);

    if (!alreadyQueued) {
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
    } else {
      await TrackPlayer.skipToTrack(track.id);
    }

    await TrackPlayer.play();

    try {
  navigation.navigate('AudioPlayer');
} catch (error) {
  console.error('Navigation error:', error);
} // No need to pass track anymore
  } catch (error) {
    console.warn('Track load error:', error);
  }
};

export const handleAppState = () => {
  AppState.addEventListener('change', async (state) => {
    if (state === 'background') {
      try {
        await TrackPlayer.pause();
        console.log('Paused playback on background');
      } catch (e) {
        console.warn('Error pausing on background', e);
      }
    }
  });
};
