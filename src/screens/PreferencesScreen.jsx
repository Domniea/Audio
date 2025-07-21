import React from 'react';
import { Box, Button, Center, Text } from 'native-base';
import { ThemeToggle } from '../components/ThemeToggle';
import { useThemeColors } from '../components/ThemeToggle';

export default function PreferencesScreen({ navigation }) {
      const { bg, secondaryText } = useThemeColors();

  return (
    <Box flex={1} bg={bg} justifyContent="space-evenly" alignItems="center" p={4}>
      <Text font={secondaryText} fontSize="xl" mb={4}>Preferences</Text>
      <Box alignItems={'center'}>
      <ThemeToggle />
      <Button variant={'subtle'} flexDirection={'center'}w={'1/2'} mt={6} onPress={() => navigation.navigate('MainStack', {screen: 'AudioPlayer'})}>
        Back to Player
      </Button>
      </Box>
    </Box>
  );
}
