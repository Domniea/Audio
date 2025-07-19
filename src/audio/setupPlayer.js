import TrackPlayer from 'react-native-track-player';

// Set up player
export const setupPlayer = async () => {
    try {
        await TrackPlayer.setupPlayer() 
        console.log('Track player setup complete')
    } catch (error) {
        console.warn('Track player setup FAILED', error)
    }

}