import { NavigationContainer } from '@react-navigation/native';
import createStackNavigator from '@react-navigation/stack';
import AudioPlayerScreen from './src/screens/AudioPlayerScreen';
import AudioListScreen from './src/screens/AudioListScreen';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TrackList">
                <Stack.Screen name="TrackList" component={AudioListScreen} />
                <Stack.Screen name="AudioPlayer" component={AudioPlayerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator;