import TrackPlayer from 'react-native-track-player';
import { getPlaybackState } from 'react-native-track-player/lib/src/trackPlayer';

export const playNewTrack = async track => {
  try {
    const playerState = await getPlaybackState();

    

    // Reset and load new track
    await TrackPlayer.reset();
    await TrackPlayer.add(track);
    await TrackPlayer.play();

    console.log(`Now playing: ${track.title}`);
  } catch (error) {
    console.warn('Error in playNewTrack:', error);
  }
};
