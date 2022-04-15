import { TextareaHTMLAttributes } from 'react';
import { ElementStatus } from '../../../shared/theme/colors';
export interface TextAreaDefaultProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    mandatory?: boolean;
    name: string;
    error?: string;
    status?: ElementStatus;
}
