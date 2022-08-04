import { Constants } from 'styles/themes/constants';
import { ThemeColor } from 'styles/themes/types';

const colors: Record<string, ThemeColor> = {
  purple: {
    light: '#9175D4',
    neutral: '#8559DA',
    dark: '#522DA8',
  },
  pink: {
    light: '#C25FDA',
    neutral: '#8F2DA8',
    dark: '#5E0078',
  },
  orange: {
    light: '#FF935F',
    neutral: '#D26333',
    dark: '#9B3505',
  },
  white: {
    light: '#E0E0E0',
    neutral: '#F8F8F8',
    dark: '#F0F0F0',
  },
  green: {
    light: '#8DEB7E',
    neutral: '#75C568',
    dark: '#5C9A52',
  },
  yellow: {
    light: '#FBE367',
    neutral: '#F5D738',
    dark: '#C8AC1D',
  },
  blue: {
    light: '#E0F1FF',
    neutral: '#4A9FC3',
    dark: '#428BAA',
  },
  red: {
    light: '#FF6868',
    neutral: '#FF3636',
    dark: '#C22828',
  },
  black: {
    light: '#3D3D3D',
    neutral: '#2A2A2A',
    dark: '#151515',
  },
  gray: {
    light: '#C2C2C2',
    neutral: '#A0A0A0',
    dark: '#7D7D7D',
  },
  transparent: {
    light: Constants.TRANSPARENT,
    neutral: Constants.TRANSPARENT,
    dark: Constants.TRANSPARENT,
  },
};

colors.primary = colors.purple;
colors.secondary = colors.orange;
colors.success = colors.green;
colors.warning = colors.yellow;
colors.danger = colors.red;
colors.info = colors.blue;
colors.text = colors.black;
colors.background = colors.blue;

export default colors;
