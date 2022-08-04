import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Card from 'components/atoms/card';
import Typography from 'components/atoms/typography';
import * as React from 'react';
import { ShadowOptions } from 'styles/themes/shadows';
import { withCentered } from 'utils/with-centered';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    withCentered(
      <Card width={100} height={100}>
        <Typography>Sample card</Typography>
      </Card>,
    ),
  )
  .add('No shadow', () =>
    withCentered(
      <Card width={100} height={100} shadow={ShadowOptions.none}>
        <Typography>Sample card</Typography>
      </Card>,
    ),
  );
