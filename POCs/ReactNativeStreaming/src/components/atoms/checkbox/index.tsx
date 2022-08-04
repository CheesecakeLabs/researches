import React, { useMemo, useState } from 'react';

import { useThemeColor } from 'app/core/hooks/useThemeColor';
import Icon from 'assets/images/check.svg';
import Box, { BoxProps, MotiBox } from 'components/atoms/box';
import Typography, { TypographyProps } from 'components/atoms/typography';
import { AnimatePresence } from 'moti';
import { Radius } from 'styles/themes/radius';
import { Spaces } from 'styles/themes/spaces';
import { invertColor } from 'utils/invert-color';

const SIZE = 20 as const;

type CheckboxProps = BoxProps & {
  checked?: boolean;
  colorScheme?: string;
  size?: number;
  label?: string;
  labelProps?: TypographyProps;
  onValueChange?: (value: boolean) => void;
};

type CheckableBoxProps = { size: number; colorScheme: string };

const UnselectedBox = ({ size }: CheckableBoxProps): React.ReactElement => (
  <MotiBox
    borderRadius={Radius.sm}
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

const SelectedBox = ({
  size,
  colorScheme,
}: CheckableBoxProps): React.ReactElement => {
  const color = useThemeColor(`${colorScheme}.neutral`);
  const checkColor = useMemo(() => invertColor(color), [color]);

  return (
    <MotiBox
      borderRadius={Radius.sm}
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
      exitTransition={{ type: 'timing', duration: 100 }}
      transition={{ type: 'spring' }}>
      <Icon color={checkColor} />
    </MotiBox>
  );
};

const Checkbox = ({
  checked = false,
  label,
  onValueChange,
  labelProps,
  colorScheme = 'primary',
  size = SIZE,
  ...rest
}: CheckboxProps): React.ReactElement => {
  const [isChecked, setChecked] = useState(checked);

  return (
    <Box
      {...rest}
      flexDirection="row"
      alignItems="center"
      onTouchStart={(): void => {
        onValueChange?.(!isChecked);
        setChecked(oldValue => !oldValue);
      }}>
      <AnimatePresence exitBeforeEnter>
        {isChecked ? (
          <SelectedBox key="selected" size={size} colorScheme={colorScheme} />
        ) : (
          <UnselectedBox
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

export default Checkbox;
