import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Checkbox from 'components/atoms/checkbox';
import * as React from 'react';
import { withCentered } from 'utils/with-centered';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('Unchecked', () => withCentered(<Checkbox label="Check this" />))
  .add('Checked', () => withCentered(<Checkbox label="Check this" checked />));
