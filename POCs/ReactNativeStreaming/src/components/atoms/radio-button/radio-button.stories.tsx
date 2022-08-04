import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import RadioButton from 'components/atoms/radio-button';
import * as React from 'react';
import { withCentered } from 'utils/with-centered';

storiesOf('Radio Button', module)
  .addDecorator(withKnobs)
  .add('Unchecked', () => withCentered(<RadioButton label="Sample radio" />))
  .add('Checked', () =>
    withCentered(<RadioButton label="Sample radio" selected />),
  )
  .add('Custom color', () =>
    withCentered(
      <RadioButton label="Sample radio" selected colorScheme="secondary" />,
    ),
  );
