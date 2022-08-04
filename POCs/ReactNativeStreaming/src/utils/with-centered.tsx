import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Center from '../components/atoms/center';
import theme from '../styles/themes/light';

/**
 * Helper useful for creating stories for Storybook with centered content.
 * @param element element that will be centered
 * @returns component with centered content
 */
export function withCentered(element: React.ReactNode): React.ReactNode {
  return (
    <ThemeProvider theme={theme}>
      <Center flex={1}>{element}</Center>
    </ThemeProvider>
  );
}
