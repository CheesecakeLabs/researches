import { useThemeColor } from 'app/core/hooks/useThemeColor';
import { ColorValue } from 'react-native';

export function useSwitchColorsAsHex(
  colorScheme: string,
): Record<'trackColor' | 'thumbColor', ColorValue> {
  const trackColorAsHex = useThemeColor(`${colorScheme}.light`);
  const thumbColorAsHex = useThemeColor(`${colorScheme}.dark`);

  return {
    trackColor: trackColorAsHex,
    thumbColor: thumbColorAsHex,
  };
}
