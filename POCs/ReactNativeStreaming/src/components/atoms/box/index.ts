import styled from '@emotion/native';
import { motify } from 'moti';
import React from 'react';
import { View } from 'react-native';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from 'styled-system';
import { ShadowOptions } from 'styles/themes/shadows';
import { Spaces } from 'styles/themes/spaces';
import { AppTheme, WithTheme } from 'styles/themes/types';

export type BoxProps = FlexboxProps &
  LayoutProps &
  SpaceProps<AppTheme, Spaces | number> &
  ColorProps &
  PositionProps &
  ShadowProps &
  BorderProps &
  WithTheme & {
    children?: React.ReactNode;
    shadow?: ShadowOptions;
  };

const Box = styled(View)<BoxProps>(
  props => ({
    backgroundColor: props.theme.colors?.background.light,
  }),
  props => props.theme.shadow?.[props.shadow ?? ShadowOptions.none],
  flexbox,
  layout,
  space,
  color,
  position,
  shadow,
  border,
);

export const MotiBox = motify(Box)();

export default Box;
