import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Box, Text, useColorModeValue, Pressable } from 'native-base';

export default function CustomDrawerContent(props) {
  const { navigation } = props;

  // Light and dark variables
  const bg = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('black', 'gray.100');

  return (
    <Box flex={1} bg={bg}>
      <DrawerContentScrollView {...props}>
        <Box p={4}>
          <Pressable onPress={() => navigation.navigate('Preferences')}>
            {({ isPressed }) => (
              <Text
                fontSize="lg"
                fontWeight="bold"
                color={textColor}
                opacity={isPressed ? 0.6 : 1}
              >
                Preferences
              </Text>
            )}
          </Pressable>
        </Box>
        <Box p={4}>
          <Pressable
            onPress={() =>
              navigation.navigate('MainStack', { screen: 'AudioPlayer' })
            }
          >
            {({ isPressed }) => (
              <Text
                fontSize="lg"
                fontWeight="bold"
                color={textColor}
                opacity={isPressed ? 0.6 : 1}
              >
                Audio Player
              </Text>
            )}
          </Pressable>
        </Box>
      </DrawerContentScrollView>
    </Box>
  );
}
