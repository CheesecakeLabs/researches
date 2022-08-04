import Box, { BoxProps, MotiBox } from 'components/atoms/box';
import Typography, { TypographyProps } from 'components/atoms/typography';
import { AnimatePresence } from 'moti';
import React from 'react';
import { Radius } from 'styles/themes/radius';
import { Spaces } from 'styles/themes/spaces';

const SIZE = 20 as const;

type RadioButtonProps = BoxProps & {
  selected?: boolean;
  colorScheme?: string;
  size?: number;
  label?: string;
  labelProps?: TypographyProps;
  onValueChange?: (value: boolean) => void;
};

type RadioProps = { size: number; colorScheme: string };

const UnselectedRadio = ({ size }: RadioProps): React.ReactElement => (
  <MotiBox
    borderRadius={Radius.full}
    alignItems="center"
    justifyContent="center"
    borderWidth={2}
    borderColor="gray.neutral"
    width={size}
    height={size}
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.9 }}
    transition={{ type: 'timing', duration: 100 }}
  />
);

const SelectedRadio = ({
  size,
  colorScheme,
}: RadioProps): React.ReactElement => (
  <MotiBox
    borderRadius={Radius.full}
    alignItems="center"
    justifyContent="center"
    borderWidth={2}
    backgroundColor={`${colorScheme}.neutral`}
    borderColor={`${colorScheme}.neutral`}
    width={size}
    height={size}
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.9 }}
    transition={{ type: 'timing', duration: 100 }}>
    <Box
      borderRadius={Radius.full}
      backgroundColor="white.neutral"
      width={size / 3}
      height={size / 3}
    />
  </MotiBox>
);

const RadioButton = ({
  selected = false,
  label,
  onValueChange,
  labelProps,
  colorScheme = 'primary',
  size = SIZE,
  ...rest
}: RadioButtonProps): React.ReactElement => {
  return (
    <Box
      {...rest}
      flexDirection="row"
      alignItems="center"
      onTouchStart={(): void => onValueChange?.(!selected)}>
      <AnimatePresence exitBeforeEnter>
        {selected ? (
          <SelectedRadio key="selected" size={size} colorScheme={colorScheme} />
        ) : (
          <UnselectedRadio
            key="unselected"
            size={size}
            colorScheme={colorScheme}
          />
        )}
      </AnimatePresence>
      {label && (
        <Typography ml={Spaces.xs} {...labelProps}>
          {label}
        </Typography>
      )}
    </Box>
  );
};

export default RadioButton;
