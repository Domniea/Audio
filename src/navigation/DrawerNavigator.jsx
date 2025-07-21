import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import PreferencesScreen from '../screens/PreferencesScreen';
import MainStackNavigator from './MainStackNavigator';
import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      // Custom drawer navigator to be responsive with theming/toggle
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTintColor: 'gray',
        // Removed shadow/elevation of header to apear more natural
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerRight: () => (
          // Search icon
          <Icon
            mr={3}
            mb={2}
            as={Ionicons}
            name="search"
            size="lg"
            color={'gray.500'}
          />
        ),
      }}
    >
      <Drawer.Screen
        name="MainStack"
        component={MainStackNavigator}
        options={{ title: '' }}
      />
      <Drawer.Screen
        name="Preferences"
        component={PreferencesScreen}
        options={{ ttle: '' }}
      />
    </Drawer.Navigator>
  );
}
