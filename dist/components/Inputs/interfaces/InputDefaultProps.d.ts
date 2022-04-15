import { ElementStatus } from '../../../shared/theme/colors';
import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
export interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ComponentType<IconBaseProps>;
    iconcolor?: string;
    iconfill?: string;
    label?: string;
    error?: string;
    status?: ElementStatus;
    mandatory?: 'on';
    mask?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    name: string;
}
