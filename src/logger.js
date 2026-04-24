import { styleText } from 'node:util';

const COLOR_STYLES = {
  blue: ['blue'],
  green: ['green'],
  yellow: ['yellow'],
  red: ['red'],
  cyan: ['cyan'],
  gray: ['gray'],
  white: ['white'],
};

export function log(color, message, ...details) {
  const styles = COLOR_STYLES[color] ?? COLOR_STYLES.white;
  console.log(styleText(styles, String(message)), ...details);
}