import { ElementStatus } from '../../shared/theme/colors';
import { colors } from '../../shared/theme/colors';

export const colorGet = (status: ElementStatus = 'primary', statusComplement: string | number = '', isTransparent?: boolean) => {
  return `${colors[`${status}${isTransparent ? 'Transparent' : ''}${statusComplement}`]}`;
};
