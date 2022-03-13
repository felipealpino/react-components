import { colors } from "../theme";

export function getBackgroundColor(status: string | undefined): string {
  if (!status) {
    return colors.primary500;
  }

  const color = `${status}500`;
  return colors[color] ? `${colors[color]}` : colors.primary500;
};
