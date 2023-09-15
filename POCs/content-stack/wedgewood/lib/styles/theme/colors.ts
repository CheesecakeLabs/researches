import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  wine: {
    100: '#4b2a3e',
    200: '#422637',
    300: '#3a2130',
    400: '#321c29',
    500: '#2a1823',
    600: '#21131c',
    700: '#190e15',
    800: '#11090e',
    900: '#080507',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
