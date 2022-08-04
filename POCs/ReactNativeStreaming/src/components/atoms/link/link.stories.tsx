import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Link from 'components/atoms/link';
import * as React from 'react';
import { withCentered } from 'utils/with-centered';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    withCentered(<Link onPress={(): null => null}>Sample text</Link>),
  );
