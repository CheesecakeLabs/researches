import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Typography from 'components/atoms/typography';
import * as React from 'react';
import { withCentered } from 'utils/with-centered';
import { InputField } from '.';
import { InputState } from '../types';

storiesOf('Input Field', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    withCentered(<InputField placeholder="Placeholder" label="Label" />),
  )
  .add('Error', () =>
    withCentered(
      <InputField
        isFullWidth
        state={InputState.Error}
        placeholder="Placeholder"
        label="Label"
      />,
    ),
  )
  .add('Success', () =>
    withCentered(
      <InputField
        state={InputState.Success}
        placeholder="Placeholder"
        label="Label"
      />,
    ),
  )
  .add('With icon', () =>
    withCentered(
      <InputField
        state={InputState.Success}
        placeholder="Placeholder"
        label="Label"
        leftIcon={<Typography>A</Typography>}
        rightIcon={<Typography>B</Typography>}
      />,
    ),
  );
