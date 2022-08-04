import React from 'react';
import { InputField } from 'components/molecules/inputs';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@emotion/react';
import light from 'styles/themes/light';
import { Text } from 'react-native';

describe('InputField', () => {
  it('must have a label', async () => {
    const component = render(
      <ThemeProvider theme={light}>
        <InputField label="Label" placeholder="Placeholder" />
      </ThemeProvider>,
    );

    expect(await component.findByText('Label')).toBeTruthy();
  });

  it('must have a placeholder', async () => {
    const component = render(
      <ThemeProvider theme={light}>
        <InputField label="Label" placeholder="Placeholder" />
      </ThemeProvider>,
    );

    expect(await component.findByPlaceholderText('Placeholder')).toBeTruthy();
  });

  it('must show icons', async () => {
    const component = render(
      <ThemeProvider theme={light}>
        <InputField
          label="Label"
          placeholder="Placeholder"
          rightIcon={<Text>A</Text>}
          leftIcon={<Text>B</Text>}
        />
      </ThemeProvider>,
    );

    expect(await component.findByText('A')).toBeTruthy();
    expect(await component.findByText('B')).toBeTruthy();
  });
});
