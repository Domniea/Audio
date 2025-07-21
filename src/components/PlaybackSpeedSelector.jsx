// PlaybackSpeedSelector.jsx
import React, { useState } from 'react';
import { Box, Select, CheckIcon } from 'native-base';
import TrackPlayer from 'react-native-track-player';

const PlaybackSpeedSelector = () => {
  const [speed, setSpeed] = useState('1.0');

  const changeSpeed = async value => {
    setSpeed(value);
    try {
      await TrackPlayer.setRate(parseFloat(value));
    } catch (error) {
      console.warn('Failed to change playback rate:', error);
    }
  };

  return (
    <Box w="48" maxW="300" mt={'5'}>
      <Select
        selectedValue={speed}
        minWidth="25"
        onValueChange={changeSpeed}
        _selectedItem={{
          bg: 'primary.100',
          endIcon: <CheckIcon size="5" />,
        }}
      >
        <Select.Item label="0.75x" value="0.75" />
        <Select.Item label="1x (Normal)" value="1.0" />
        <Select.Item label="1.25x" value="1.25" />
        <Select.Item label="1.5x" value="1.5" />
        <Select.Item label="2x" value="2.0" />
      </Select>
    </Box>
  );
};

export default PlaybackSpeedSelector;
