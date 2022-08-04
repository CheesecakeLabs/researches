import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import RadioGroup from 'components/molecules/radio-group';
import * as React from 'react';
import { withCentered } from 'utils/with-centered';

storiesOf('Radio Group', module)
  .addDecorator(withKnobs)
  .add('Default', () => withCentered(
    <RadioGroup
      options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
      ]}
        defaultValue="1"
      onChange={_value => null} />
  )
  )
  .add('Horizontal', () =>
    withCentered(
      <RadioGroup
        horizontal
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        defaultValue="1"
        onChange={_value => null} />
    ),
  )
  .add('With custom color', () =>
    withCentered(
      <RadioGroup
        colorScheme="secondary"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        defaultValue="1"
        onChange={_value => null} />
    ),
  );
