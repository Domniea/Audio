// src/audio/useAudioControls.js
import { useEffect, useState } from 'react';
import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player';

export const useAudioControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playbackState = usePlaybackState();
  const progress = useProgress();

  useEffect(() => {
    setIsPlaying(playbackState === State.Playing);
  }, [playbackState]);

  const togglePlayback = async () => {
    const currentState = await TrackPlayer.getState();
    if (currentState === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const seekTo = async (seconds) => {
    await TrackPlayer.seekTo(seconds);
  };

  return {
    isPlaying,
    togglePlayback,
    seekTo,
    progress,
  };
};
