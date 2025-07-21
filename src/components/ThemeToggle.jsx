import { useColorModeValue, useColorMode } from 'native-base';
import { Button } from 'native-base';
export const useThemeColors = () => {
  const bg = useColorModeValue('white', 'gray.900');
  const secondaryText = useColorModeValue('gray.400', 'gray.300');
  const iconColor = useColorModeValue('primary.300', 'primary.50');
  

  return { bg, secondaryText, iconColor };
};

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button m={1} onPress={toggleColorMode} variant={'subtle'}>
     Toggle Theme
    </Button>
  );
};
