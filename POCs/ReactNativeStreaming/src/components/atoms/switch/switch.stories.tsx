import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Switch from 'components/atoms/switch';
import * as React from 'react';
import { withCentered } from 'utils/with-centered';

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .add('Unchecked', () => withCentered(<Switch label="Sample switch" />))
  .add('Checked', () => withCentered(<Switch label="Sample switch" checked />))
  .add('Custom color', () =>
    withCentered(
      <Switch label="Sample switch" checked colorScheme="secondary" />,
    ),
  );
