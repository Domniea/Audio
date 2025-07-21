import { extendTheme } from 'native-base';

const config = {
  useSystemColorMode: true,
  initialColorMode: 'light',
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      50: '#00d7fcff',
      100: '#B2BDFF',
      200: '#8D9EFF',
      300: '#617CFF',
      400: '#3F63FF',
      500: '#1C49FF',
      600: '#1539CC',
      700: '#0F2999',
      800: '#091966',
      900: '#040C33',
    },
  },
});

export default theme;
