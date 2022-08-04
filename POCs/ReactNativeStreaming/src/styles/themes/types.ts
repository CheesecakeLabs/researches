import type { Theme } from 'styled-system';
import { Constants } from 'styles/themes/constants';
import theme from 'styles/themes/light';

export type ThemeColor = {
  light: string;
  neutral: string;
  dark: string;
};
export type BlackOrWhite = typeof Constants.WHITE | typeof Constants.BLACK;

export type AppTheme = Theme & typeof theme;
export type WithTheme = { theme?: AppTheme };

export enum FontWeights {
  normal = 'normal',
  bold = 'bold',
  'w100' = '100',
  'w200' = '200',
  'w300' = '300',
  'w400' = '400',
  'w500' = '500',
  'w600' = '600',
  'w700' = '700',
  'w800' = '800',
  'w900' = '900',
}

export type AppColor = `${string}.${keyof ThemeColor}`;
