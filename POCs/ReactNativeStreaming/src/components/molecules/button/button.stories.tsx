import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ButtonVariants } from 'components/atoms';
import Typography from 'components/atoms/typography';
import Button from 'components/molecules/button';
import * as React from 'react';
import { withCentered } from 'utils/with-centered';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => withCentered(<Button text="Sample text" />))
  .add('Primary with custom color', () =>
    withCentered(<Button text="Sample text" colorScheme="secondary" />),
  )
  .add('Outline', () =>
    withCentered(
      <Button text="Sample text" variant={ButtonVariants.Outline} />,
    ),
  )
  .add('Ghost', () =>
    withCentered(<Button text="Sample text" variant={ButtonVariants.Ghost} />),
  )
  .add('Destructive', () =>
    withCentered(<Button text="Sample text" colorScheme="danger" />),
  )
  .add('With icon', () =>
    withCentered(
      <Button text="Sample text" leftIcon={<Typography>A</Typography>} />,
    ),
  );
