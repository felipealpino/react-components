import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { ElementStatus } from '../../../shared/theme/colors';

export interface ICheckboxDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  mandatory?: 'on';
  error?: string;
  status?: ElementStatus;
  name: string;
  id: string;
  semiRounded?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  iconcolor?: string;
  checkboxRef?: React.RefObject<HTMLInputElement>;
}