import { ElementStatus } from '../../shared/theme/colors';
import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    status?: ElementStatus;
    disabled?: boolean;
    outline?: boolean;
    icon?: React.ComponentType<IconBaseProps>;
    iconposition?: 'left' | 'right';
    iconcolor?: string;
    iconfill?: string;
}
declare const Button: React.FC<IButton>;
export { Button };
