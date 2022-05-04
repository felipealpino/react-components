import React from 'react';
import { ElementStatus } from '../../shared/theme/colors';
export interface ITooltip {
    text: string;
    status?: ElementStatus;
    className?: string;
    position?: 'top' | 'bottom';
    clickable?: boolean;
    children?: React.ReactNode;
}
declare const Tooltip: React.FC<ITooltip>;
export { Tooltip };
