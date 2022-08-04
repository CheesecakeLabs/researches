import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Chip from 'components/atoms/chip';
import Typography from 'components/atoms/typography';
import * as React from 'react';
import { withCentered } from 'utils/with-centered';

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .add('Default', () => withCentered(<Chip text="Sample chip" />))
  .add('Custom color', () =>
    withCentered(<Chip text="Sample chip" colorScheme="secondary" />),
  )
  .add('With Icon', () =>
    withCentered(
      <Chip text="Sample chip" leftIcon={<Typography>❤️</Typography>} />,
    ),
  );
