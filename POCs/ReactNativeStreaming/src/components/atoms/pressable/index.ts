import styled from '@emotion/native';
import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
} from 'react-native';
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
  variant,
} from 'styled-system';
import { FontSizes } from 'styles/themes/fontSizes';
import { Radius } from 'styles/themes/radius';
import { ShadowOptions } from 'styles/themes/shadows';
import { Spaces } from 'styles/themes/spaces';
import { AppTheme, FontWeights, WithTheme } from 'styles/themes/types';

export enum ButtonVariants {
  Primary = 'primary',
  Outline = 'outline',
  Ghost = 'ghost',
}

export type PressableProps = Omit<
  NativePressableProps &
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
      variant?: ButtonVariants;
      activeColor?: string;
      shadow?: ShadowOptions;
    },
  'children'
>;

const Pressable = styled(NativePressable)<PressableProps>(
  {
    borderRadius: Radius.none,
    paddingHorizontal: Spaces.xs,
    paddingVertical: Spaces.xs,
  },
  ({ theme, shadow, variant }) =>
    variant === 'primary'
      ? { ...theme.shadow[shadow ?? ShadowOptions.sm] }
      : undefined,
  ({ activeColor }) =>
    variant({
      variants: {
        [ButtonVariants.Primary]: {
          backgroundColor: activeColor ?? 'primary.neutral',
          border: 'none',
        },
        [ButtonVariants.Outline]: {
          backgroundColor: 'transparent.neutral',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: activeColor,
        },
        [ButtonVariants.Ghost]: {
          border: 'none',
          backgroundColor: 'transparent.neutral',
        },
      },
    }),
  flexbox,
  layout,
  space,
  color,
  position,
  shadow,
  border,
  typography,
);

Pressable.defaultProps = {
  variant: ButtonVariants.Primary,
};

export default Pressable;
