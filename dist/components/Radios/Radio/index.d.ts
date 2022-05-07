import React from 'react';
import { ElementStatus } from '../../../shared/theme/colors';
export interface IRadio {
    handleOnCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    status?: ElementStatus;
    id: string;
    name: string;
    required?: boolean;
    radioSize?: number;
    disabled?: boolean;
}
declare const Radio: React.FC<IRadio>;
export { Radio };
