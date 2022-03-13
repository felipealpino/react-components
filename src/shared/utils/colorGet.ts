import { ElementStatus } from '@shared/theme/colors';
import { colors } from '@shared/theme/colors';

export const colorGet = (status: ElementStatus, statusNumber: number = 100) => {
  return `${colors[`${status}${statusNumber}`]}`;
};
