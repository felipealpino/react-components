import { ElementStatus } from '../../shared/theme/colors';
import React, { HTMLAttributes } from 'react';
export interface IButton extends HTMLAttributes<HTMLDivElement> {
    status?: ElementStatus;
    disabled?: boolean;
}
declare const Button: React.FC<IButton>;
export { Button };
