import { ElementStatus } from '../../../shared/theme/colors';
import { InputHTMLAttributes } from 'react';
export interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: {
        name: string;
        fill: string;
    };
    label?: string;
    error?: string;
    status?: ElementStatus;
    mandatory?: boolean;
    mask?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    name: string;
}
