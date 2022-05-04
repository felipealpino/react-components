import { TextareaHTMLAttributes } from 'react';
import { ElementStatus } from '../../../shared/theme/colors';
export interface TextAreaDefaultProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    mandatory?: 'on';
    name: string;
    error?: string;
    status?: ElementStatus;
    resizable?: 'both' | 'horizontal' | 'vertical' | 'none';
    textAreaRef?: React.RefObject<HTMLTextAreaElement>;
}
