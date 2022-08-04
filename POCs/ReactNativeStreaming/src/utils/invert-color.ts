import { Constants } from 'styles/themes/constants';
import { BlackOrWhite } from 'styles/themes/types';

// https://stackoverflow.com/a/3943023/112731
/**
 * Identifies a hex color lightness and return constrast color as Black (#000000) or White (#ffffff).
 *
 * @param hex - The hex color to be evaluated.
 */
export function invertColor(hex: string): BlackOrWhite {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  const red = parseInt(hex.slice(0, 2), 16),
    green = parseInt(hex.slice(2, 4), 16),
    blue = parseInt(hex.slice(4, 6), 16);

  const redLuminenceScale = 0.299,
    greenLuminenceScale = 0.587,
    blueLuminenceScale = 0.114,
    luminenceLimit = 186;

  const colorLuminence =
    red * redLuminenceScale +
    green * greenLuminenceScale +
    blue * blueLuminenceScale;

  return colorLuminence > luminenceLimit ? Constants.BLACK : Constants.WHITE;
}
