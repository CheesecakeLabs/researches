import { useAppTheme } from 'app/core/hooks/useAppTheme';
import { useMemo } from 'react';
import { Constants } from 'styles/themes/constants';
import { AppColor, ThemeColor } from 'styles/themes/types';

/**
 * Receives a color to get from the theme and returns its Hex value.
 *
 * @param color - The color key to extract from the theme. The color must be defined like 'red.neutral' or 'blue.light'.
 * @returns The color value in Hex format.
 */
export function useThemeColor(color: AppColor): string {
  const theme = useAppTheme();

  const hexCode = useMemo(() => {
    const [key, intensityKey] = color.split('.') as [string, keyof ThemeColor];

    return theme?.colors?.[key]?.[intensityKey] ?? Constants.BLACK;
  }, [color, theme]);

  return hexCode;
}
