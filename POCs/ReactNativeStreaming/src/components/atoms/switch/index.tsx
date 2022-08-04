import Box, { BoxProps } from 'components/atoms/box';
import { useSwitchColorsAsHex } from 'components/atoms/switch/use-switch-colors-as-hex';
import Typography from 'components/atoms/typography';
import React, { useCallback, useState } from 'react';
import {
  Switch as SwitchNative,
  SwitchProps as SwitchNativeProps,
} from 'react-native';
import { Constants } from 'styles/themes/constants';
import { Spaces } from 'styles/themes/spaces';

export type SwitchProps = Omit<
  BoxProps & {
    colorScheme?: string;
    checked?: boolean;
    label?: string;
    switchProps?: SwitchNativeProps;
    onValueChange?: (value: boolean) => void;
  },
  'children'
>;

const Switch = React.forwardRef<SwitchNative, SwitchProps>(
  (
    { label, checked, colorScheme = 'primary', ...rest },
    ref,
  ): React.ReactElement => {
    const [isChecked, setChecked] = useState(checked);

    const selectedColor = useSwitchColorsAsHex(colorScheme);
    const deselectedColor = useSwitchColorsAsHex('background');

    const toggleEnabled = useCallback(
      () => setChecked(oldValue => !oldValue),
      [],
    );

    return (
      <Box flexDirection="row" alignItems="center" m={1} {...rest}>
        <SwitchNative
          {...rest.switchProps}
          ref={ref}
          trackColor={{
            true: selectedColor.trackColor,
            false: deselectedColor.trackColor,
          }}
          thumbColor={selectedColor.thumbColor}
          ios_backgroundColor={Constants.TRANSPARENT}
          value={isChecked}
          onValueChange={(value): void => {
            toggleEnabled();
            rest?.onValueChange?.(value);
          }}
        />
        {label && (
          <Typography
            ml={Spaces.xs}
            onPress={toggleEnabled}
            suppressHighlighting>
            {label}
          </Typography>
        )}
      </Box>
    );
  },
);

export default Switch;
