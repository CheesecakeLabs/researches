import { useThemeColor } from 'app/core/hooks/useThemeColor';
import { BoxProps } from 'components/atoms/box';
import Pressable from 'components/atoms/pressable';
import Typography, { TypographyProps } from 'components/atoms/typography';
import React, { useState } from 'react';
import { Radius } from 'styles/themes/radius';
import { Spaces } from 'styles/themes/spaces';
import { AppColor } from 'styles/themes/types';
import { invertColor } from 'utils/invert-color';

export type ChipProps = Omit<
  BoxProps & {
    text: string;
    colorScheme?: string;
    leftIcon?: React.ReactNode;
    textProps?: TypographyProps;
    onPress?: () => void;
  },
  'children'
>;

const Chip = ({
  text,
  leftIcon,
  textProps,
  colorScheme = 'primary',
  onPress,
  ...rest
}: ChipProps): React.ReactElement => {
  const [pressed, setPressed] = useState(false);

  const selectedColor: AppColor = pressed
    ? `${colorScheme}.dark`
    : `${colorScheme}.neutral`;
  const selectedColorHex = useThemeColor(selectedColor);

  const textColor = invertColor(selectedColorHex);

  return (
    <Pressable
      onPressIn={(): void => setPressed(true)}
      onPressOut={(): void => setPressed(false)}
      onPress={onPress}
      activeColor={selectedColor}
      flexDirection="row"
      px={Spaces.sm}
      py={Spaces.xxs}
      borderRadius={Radius.full}
      {...rest}>
      {leftIcon}
      <Typography
        ml={leftIcon ? Spaces.xs : undefined}
        color={textColor}
        {...textProps}>
        {text}
      </Typography>
    </Pressable>
  );
};

export default Chip;
