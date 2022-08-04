import { useTheme } from '@emotion/react';
import { AppTheme } from 'styles/themes/types';

/**
 * Get the theme object used in application.
 * @returns The theme object.
 */
export function useAppTheme(): AppTheme {
  const theme = useTheme() as AppTheme;

  return theme;
}
