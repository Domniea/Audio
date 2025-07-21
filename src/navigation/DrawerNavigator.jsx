import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import PreferencesScreen from '../screens/PreferencesScreen';
import AudioPlayerScreen from '../screens/AudioPlayerScreen';
import { useColorModeValue } from 'native-base';
import MainStackNavigator from './MainStackNavigator';
import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useThemeColors } from '../components/ThemeToggle';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
      const { bg, secondaryText, iconColor } = useThemeColors()


  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTintColor: 'gray',
          headerStyle: {
            elevation: 0, 
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
         headerRight: () => (
     <Icon mr={3} mb={2} as={Ionicons} name="search" size="lg" color={'gray.500'} />
        ),
    }}
    >
      <Drawer.Screen name="MainStack" component={MainStackNavigator} options={{ title: '' }}/>
      <Drawer.Screen name="Preferences" component={PreferencesScreen} options={{ ttle: '' }}/>
    </Drawer.Navigator>
  );
}


