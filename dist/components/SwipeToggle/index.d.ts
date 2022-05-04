import React from 'react';
import { IconBaseProps } from 'react-icons';
import { ElementStatus } from '../../shared/theme/colors';
export interface ISwipeToggle {
    iconNameDisabled?: React.ComponentType<IconBaseProps>;
    iconNameEnabled?: React.ComponentType<IconBaseProps>;
    textIfOn?: string;
    textIfOff?: string;
    rounded?: boolean;
    animatedIcon?: boolean;
    status: ElementStatus;
    outline?: boolean;
    disabled?: boolean;
    isChecked?: boolean;
    handleOnChange?: (stateCheckButton: boolean) => void;
    className?: string;
}
declare const SwipeToggle: React.FC<ISwipeToggle>;
export { SwipeToggle };
