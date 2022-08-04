import styled from '@emotion/native';
import { Text } from 'react-native';
import {
  color,
  ColorProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LetterSpacingProps,
  LineHeightProps,
  space,
  SpaceProps,
  TextAlignProps,
  typography,
  variant,
} from 'styled-system';
import { FontSizes } from 'styles/themes/fontSizes';
import { Spaces } from 'styles/themes/spaces';
import { AppTheme, FontWeights, WithTheme } from 'styles/themes/types';

export enum TypographyVariants {
  Heading = 'heading',
  Subheading = 'subheading',
  Body = 'body',
  Caption = 'caption',
  Label = 'label',
}

export type TypographyProps = FontFamilyProps &
  FontSizeProps<AppTheme, FontSizes | number> &
  FontWeightProps<AppTheme, FontWeights> &
  LineHeightProps &
  LetterSpacingProps &
  FontStyleProps &
  TextAlignProps &
  ColorProps &
  SpaceProps<AppTheme, Spaces | number> &
  WithTheme & {
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
    underline?: boolean;
    variant?: TypographyVariants;
  };

const Typography = styled(Text)<TypographyProps>(
  ({ theme, underline, textTransform }) => ({
    color: theme?.colors.text?.neutral ?? 'text.neutral',
    textDecorationLine: underline ? 'underline' : 'none',
    textTransform: textTransform ?? 'none',
  }),
  variant({
    variants: {
      [TypographyVariants.Heading]: {
        fontSize: FontSizes['3xl'],
        fontWeight: FontWeights.bold,
      },
      [TypographyVariants.Subheading]: {
        fontSize: FontSizes.lg,
        fontWeight: FontWeights.w600,
      },
      [TypographyVariants.Body]: {
        fontSize: FontSizes.md,
        fontWeight: FontWeights.normal,
      },
      [TypographyVariants.Caption]: {
        fontSize: FontSizes.xs,
        fontWeight: FontWeights.normal,
        color: 'text.light',
      },
      [TypographyVariants.Label]: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.w700,
      },
    },
  }),
  typography,
  space,
  color,
);

Typography.defaultProps = {
  variant: TypographyVariants.Body,
};

export default Typography;
