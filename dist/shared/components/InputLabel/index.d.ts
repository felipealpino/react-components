import React from 'react';
import { ElementStatus } from '../../theme/colors';
export interface InputLabel {
    label: string;
    isRequired?: boolean;
    className?: string;
    status?: ElementStatus;
}
declare const InputLabel: React.FC<InputLabel>;
export default InputLabel;
