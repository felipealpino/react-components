import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { ElementStatus } from '../../../shared/theme/colors';
export interface ICheckboxDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    mandatory?: boolean;
    error?: string;
    status?: ElementStatus;
    name: string;
    id: string;
    semiRounded?: boolean;
    icon?: React.ComponentType<IconBaseProps>;
    iconColor?: string;
}
