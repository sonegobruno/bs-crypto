import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'background',
                color: 'text'
            }
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    colors: {
        gray: {
            900: '#575757',
            800: '#1F2029',
            700: '#353646',
            600: '#848E8B',
            500: '#A2A4A5',
            400: '#DADBD1',
            300: '#F4F3F6',
            200: '#F8F9F9',
            100: '#D1D2DC',
            50: '#EEEEF2',
          },
          background: '#1E2026',
          card: '#292E3C',
          light: '#FDFFFF',
          text: '#5E636F',
          blue: {
              100: '#70E5FF',
              200: '#57E1FF',
              300: '#3DDCFF',
              400: '#24D7FF',
              500: '#00D1FF',
              600: '#1DACCC',
              700: '#1997B2',
              800: '#158199',
              900: '#126C80',
          }
    },
})