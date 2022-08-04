import { createShadows } from '../shadows';
import colorsDefinition from './colors';

const theme = {
  colors: colorsDefinition,
  space: [],
  shadow: createShadows(colorsDefinition.black.dark),
};

export default theme;
