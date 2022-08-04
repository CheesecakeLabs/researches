import Box, { BoxProps } from 'components/atoms/box';
import RadioButton from 'components/atoms/radio-button';
import React, { useEffect, useState } from 'react';
import { Spaces } from 'styles/themes/spaces';

export type RadioGroupOption = {
  label: string;
  value: string;
};

export type RadioGroupProps = BoxProps & {
  options: RadioGroupOption[];
  onChange: (value: string) => void;
  colorScheme?: string;
  horizontal?: boolean;
  defaultValue?: string;
};

const RadioGroup = ({
  options,
  onChange,
  defaultValue,
  horizontal = false,
  colorScheme = 'primary',
  ...rest
}: RadioGroupProps): React.ReactElement => {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? '');

  useEffect(() => {
    if (onChange && selectedValue) {
      onChange(selectedValue);
    }
  }, [onChange, selectedValue]);

  return (
    <Box {...rest} flexDirection={horizontal ? 'row' : 'column'}>
      {options.map(option => (
        <RadioButton
          key={`radio-button-option-${option.value}`}
          m={Spaces.xxs}
          colorScheme={colorScheme}
          label={option.label}
          selected={option.value === selectedValue}
          onValueChange={(): void => setSelectedValue(option.value)}
        />
      ))}
    </Box>
  );
};

export default RadioGroup;
