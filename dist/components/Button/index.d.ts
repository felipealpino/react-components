import { ElementStatus } from '@shared/theme/colors';
import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyleProps } from 'styled-system';
export interface IButtonProps extends ButtonStyleProps, ButtonHTMLAttributes<HTMLButtonElement> {
    status?: ElementStatus;
}
declare const Button: React.FC<IButtonProps>;
export { Button };
