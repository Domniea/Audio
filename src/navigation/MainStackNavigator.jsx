import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AudioPlayerScreen from '../screens/AudioPlayerScreen';
import AudioListScreen from '../screens/AudioListScreen';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AudioList" component={AudioListScreen} />
      <Stack.Screen name="AudioPlayer" component={AudioPlayerScreen} />
    </Stack.Navigator>
  );
}
