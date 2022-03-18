import { SelectHTMLAttributes } from 'react';

export interface SelectDefaultProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: ISelectOptions[];
  mandatory?: boolean;
}
