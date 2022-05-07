import { TextareaHTMLAttributes } from 'react';
import { ElementStatus } from '../../../shared/theme/colors';

export interface TextAreaDefaultProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  name: string;
  error?: string;
  status?: ElementStatus;
  resizable?: 'both' | 'horizontal' | 'vertical' | 'none';
  textAreaRef?: React.RefObject<HTMLTextAreaElement>;
}
