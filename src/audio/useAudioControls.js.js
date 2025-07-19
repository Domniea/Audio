// src/audio/useAudioControls.js
import { useEffect, useState } from 'react';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

export const useAudioControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = useProgress();

  const playbackState = usePlaybackState();
  console.log('PLAYBACK STATE', playbackState);

  const seekTo = async seconds => {
    await TrackPlayer.seekTo(seconds);
  };

  return {
    isPlaying,
    setIsPlaying,
    seekTo,
    progress,
  };
};
