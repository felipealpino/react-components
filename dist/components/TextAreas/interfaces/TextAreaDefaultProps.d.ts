import { TextareaHTMLAttributes } from 'react';
export interface TextAreaDefaultProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    mandatory?: boolean;
}
