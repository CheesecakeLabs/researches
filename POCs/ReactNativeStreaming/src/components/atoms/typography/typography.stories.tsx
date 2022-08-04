import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Typography, { TypographyVariants } from 'components/atoms/typography';
import * as React from 'react';
import { FontSizes } from 'styles/themes/fontSizes';
import { transformEnumToArray } from 'utils/transform-enum-to-object';
import { withCentered } from 'utils/with-centered';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('Paragraph', () => withCentered(<Typography>Sample text</Typography>))
  .add('Heading', () =>
    withCentered(
      <Typography variant={TypographyVariants.Heading}>Sample text</Typography>,
    ),
  )
  .add('Subheading', () =>
    withCentered(
      <Typography variant={TypographyVariants.Subheading}>
        Sample text
      </Typography>,
    ),
  )
  .add('Caption', () =>
    withCentered(
      <Typography variant={TypographyVariants.Caption}>Sample text</Typography>,
    ),
  )
  .add('Label', () =>
    withCentered(
      <Typography variant={TypographyVariants.Label}>Sample text</Typography>,
    ),
  )
  .add('Customized text', () =>
    withCentered(
      <Typography underline fontSize={FontSizes['4xl']}>
        Sample text
      </Typography>,
    ),
  )
  .add('Playground', () => {
    const variants = transformEnumToArray(TypographyVariants);
    const fontSizes = transformEnumToArray(FontSizes);

    const typographyVariant = select<TypographyVariants>(
      'variant',
      variants,
      TypographyVariants.Body,
    );
    const fontSizesSelect = select('fontSize', fontSizes, undefined);

    return withCentered(
      <Typography fontSize={fontSizesSelect} variant={typographyVariant}>
        {text('Text', 'Sample text')}
      </Typography>,
    );
  });
