import { colors } from '../theme';

export function getContrastColor(status: string | undefined): string {
  if (!status) {
    return colors.primaryContrast;
  }

  const color = `${status}Contrast`;
  return colors[color] ? `${colors[color]}` : colors.primaryContrast;
}
