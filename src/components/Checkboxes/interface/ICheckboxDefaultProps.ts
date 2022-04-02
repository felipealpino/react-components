import { InputHTMLAttributes } from 'react';
import { ElementStatus } from '../../../shared/theme/colors';

export interface ICheckboxDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  mandatory?: boolean;
  error?: string;
  status?: ElementStatus;
  name: string;
  id: string;
  semiRounded?: boolean;
  iconName?: string;
  iconFill?: string;
}
