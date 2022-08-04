import { Constants } from 'styles/themes/constants';
import { ThemeColor } from 'styles/themes/types';

const colors: Record<string, ThemeColor> = {
  purple: {
    light: '#EBCAFF',
    neutral: '#B799FF',
    dark: '#856BCB',
  },
  pink: {
    light: '#C25FDA',
    neutral: '#8F2DA8',
    dark: '#5E0078',
  },
  orange: {
    light: '#FFBE8A',
    neutral: '#FF8D5C',
    dark: '#C75E30',
  },
  white: {
    light: '#E0E0E0',
    neutral: '#F8F8F8',
    dark: '#F0F0F0',
  },
  green: {
    light: '#EAFFDC',
    neutral: '#B6FEAA',
    dark: '#84CB7A',
  },
  yellow: {
    light: '#FFFFBC',
    neutral: '#FFED8B',
    dark: '#CABB5C',
  },
  blue: {
    light: '#BEFFFF',
    neutral: '#8ADCFF',
    dark: '#55AACC',
  },
  red: {
    light: '#FFB2AF',
    neutral: '#FF8080',
    dark: '#C85054',
  },
  black: {
    light: '#2F2B58',
    neutral: '#08002F',
    dark: '#000009',
  },
  gray: {
    light: '#DFDFDF',
    neutral: '#ADADAD',
    dark: '#7E7E7E',
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
colors.text = colors.white;
colors.background = colors.black;

export default colors;
