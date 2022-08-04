import { useThemeColor } from 'app/core/hooks/useThemeColor';
import Box, { BoxProps } from 'components/atoms/box';
import Input, { InputProps } from 'components/atoms/input';
import Typography, { TypographyVariants } from 'components/atoms/typography';
import React, { useMemo, useState } from 'react';
import { TextInput } from 'react-native';
import { Radius } from 'styles/themes/radius';
import { Spaces } from 'styles/themes/spaces';
import { AppColor } from 'styles/themes/types';
import SuccessIcon from 'assets/images/success.svg';
import ErrorIcon from 'assets/images/error.svg';
import { InputState } from '../types';

export type InputFieldProps = InputProps & {
  label?: string;
  helperText?: string;
  state?: InputState;
  containerProps?: BoxProps;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isFullWidth?: boolean;
};

const DEFAULT_WIDTH = 200;

export const InputField = React.forwardRef<TextInput, InputFieldProps>(
  (
    {
      label,
      placeholder,
      isFullWidth,
      helperText,
      state = InputState.Default,
      leftIcon,
      rightIcon,
      containerProps,
      onBlur,
      onFocus,
      ...rest
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);

    const placeholderColor = useThemeColor('gray.neutral');
    const textColor = useThemeColor('text.neutral');
    const errorColor = useThemeColor('red.neutral');
    const successColor = useThemeColor('green.neutral');

    const activeColor = useMemo((): AppColor => {
      if (focused) {
        return `${state}.neutral`;
      }

      return state === InputState.Default ? 'gray.neutral' : `${state}.neutral`;
    }, [state, focused]);

    const backgroundColor = useMemo((): AppColor => {
      return rest.editable === false
        ? 'background.light'
        : 'transparent.neutral';
    }, [rest.editable]);

    const cursorColor = useThemeColor(activeColor);

    const getLeftIcon = useMemo(() => {
      switch (state) {
        case InputState.Success:
          return rightIcon ? <SuccessIcon fill={successColor} /> : leftIcon;
        case InputState.Error:
          return rightIcon ? <ErrorIcon fill={errorColor} /> : leftIcon;
        default:
          return leftIcon;
      }
    }, [state, rightIcon, leftIcon, errorColor, successColor]);

    const getRightIcon = useMemo(() => {
      switch (state) {
        case InputState.Success:
          return rightIcon ?? <SuccessIcon fill={successColor} />;
        case InputState.Error:
          return rightIcon ?? <ErrorIcon fill={errorColor} />;
        default:
          return rightIcon;
      }
    }, [state, rightIcon, errorColor, successColor]);

    return (
      <Box
        m={Spaces.xxs}
        {...containerProps}
        width={isFullWidth ? '100%' : DEFAULT_WIDTH}>
        {label && (
          <Typography
            variant={TypographyVariants.Label}
            ml={4}
            mb={4}
            color={activeColor}>
            {label}
          </Typography>
        )}
        <Box
          flexDirection="row"
          backgroundColor={backgroundColor}
          borderWidth={1.2}
          borderColor={activeColor}
          borderRadius={Radius.xs}
          px={12}>
          {getLeftIcon && (
            <Box alignSelf="center" mr={12} backgroundColor={backgroundColor}>
              {getLeftIcon}
            </Box>
          )}
          <Input
            ref={ref}
            color={textColor}
            flex={1}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            selectionColor={cursorColor}
            py={16}
            onFocus={(e): void => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e): void => {
              setFocused(false);
              onBlur?.(e);
            }}
            {...rest}
          />
          {getRightIcon && (
            <Box alignSelf="center" ml={12} backgroundColor={backgroundColor}>
              {getRightIcon}
            </Box>
          )}
        </Box>
        {helperText && (
          <Typography
            variant={TypographyVariants.Label}
            color={activeColor}
            ml={4}
            mt={2}>
            {helperText}
          </Typography>
        )}
      </Box>
    );
  },
);
