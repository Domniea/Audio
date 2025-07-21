import TrackPlayer from 'react-native-track-player';

// Set up player
export const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.stop();
    console.log('Track player setup complete');
  } catch (error) {
    console.warn('Track player setup FAILED', error);
  }
};

// Stop playing on hot-reload...still needs work
export const stopAudioOnLoad = async () => {
  try {
    await TrackPlayer.stop();
    console.log('Playback stopped on load');
  } catch (err) {
    console.warn('Error stopping playback on load:', err);
  }
};
