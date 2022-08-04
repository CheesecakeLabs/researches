import styled from '@emotion/native';
import { TextInput, TextInputProps } from 'react-native';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  layout,
  LayoutProps,
  LetterSpacingProps,
  LineHeightProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  TextAlignProps,
  typography,
} from 'styled-system';
import { FontSizes } from 'styles/themes/fontSizes';
import { ShadowOptions } from 'styles/themes/shadows';
import { Spaces } from 'styles/themes/spaces';
import { AppTheme, FontWeights, WithTheme } from 'styles/themes/types';

export type InputProps = Omit<
  TextInputProps &
    FontFamilyProps &
    FontSizeProps<AppTheme, FontSizes | number> &
    FontWeightProps<AppTheme, FontWeights> &
    LineHeightProps &
    LetterSpacingProps &
    FontStyleProps &
    TextAlignProps &
    FlexboxProps &
    LayoutProps &
    SpaceProps<AppTheme, Spaces | number> &
    ColorProps &
    PositionProps &
    ShadowProps &
    BorderProps &
    WithTheme & {
      shadow?: ShadowOptions;
    },
  'children'
>;

const Input = styled(TextInput)<InputProps>(
  ({ theme, shadow }) => ({ ...theme.shadow?.[shadow ?? ShadowOptions.none] }),
  flexbox,
  layout,
  space,
  color,
  position,
  shadow,
  border,
  typography,
);

export default Input;
