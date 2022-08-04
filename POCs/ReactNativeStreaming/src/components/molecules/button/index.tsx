import { useThemeColor } from 'app/core/hooks/useThemeColor';
import Box from 'components/atoms/box';
import Pressable, {
  ButtonVariants,
  PressableProps,
} from 'components/atoms/pressable';
import Typography from 'components/atoms/typography';
import React, { useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, GestureResponderEvent } from 'react-native';
import { ShadowOptions } from 'styles/themes/shadows';
import { AppColor } from 'styles/themes/types';
import { invertColor } from 'utils/invert-color';

export type ButtonProps = PressableProps & {
  text?: string;
  isLoading?: boolean;
  colorScheme?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const Button = ({
  text,
  onPressIn,
  onPressOut,
  colorScheme = 'primary',
  isLoading = false,
  variant = ButtonVariants.Primary,
  disabled,
  rightIcon,
  leftIcon,
  ...rest
}: ButtonProps): React.ReactElement => {
  const [pressed, setPressed] = useState(false);

  const handlePressedIn = useCallback(
    (event: GestureResponderEvent) => {
      setPressed(true);
      onPressIn?.(event);
    },
    [onPressIn],
  );

  const handlePressedOut = useCallback(
    (event: GestureResponderEvent) => {
      setPressed(false);
      onPressOut?.(event);
    },
    [onPressOut],
  );

  const backgroundColor = useMemo((): AppColor => {
    if (disabled) {
      return 'background.dark';
    }

    if (pressed) {
      return `${colorScheme}.light`;
    }

    return `${colorScheme}.neutral`;
  }, [disabled, colorScheme, pressed]);

  const hexBackground = useThemeColor(backgroundColor);

  const textColor = useMemo(() => invertColor(hexBackground), [hexBackground]);
  const isContained = useMemo(() => variant === 'primary', [variant]);

  const buttonContent = useMemo(() => {
    if (isLoading) {
      return (
        <ActivityIndicator color={isContained ? textColor : backgroundColor} />
      );
    }

    if (!isLoading && text) {
      return (
        <Typography mx={2} color={isContained ? textColor : backgroundColor}>
          {text}
        </Typography>
      );
    }

    return null;
  }, [isLoading, text, isContained, textColor, backgroundColor]);

  return (
    <Pressable
      {...rest}
      variant={variant}
      onPressOut={handlePressedOut}
      onPressIn={handlePressedIn}
      activeColor={backgroundColor}
      backgroundColor={pressed && !isContained ? 'background.dark' : null}
      shadow={pressed ? ShadowOptions.none : rest.shadow}>
      <Box
        bg="transparent.neutral"
        flexDirection="row"
        alignItems="center"
        justifyContent="center">
        {leftIcon}
        {buttonContent}
        {rightIcon}
      </Box>
    </Pressable>
  );
};

export default Button;
