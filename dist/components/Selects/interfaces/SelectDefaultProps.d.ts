import { ISelectOptions } from '../../../components/Selects/interfaces/ISelectOptions';
import { ElementStatus } from '../../../shared/theme/colors';
import { SelectHTMLAttributes } from 'react';
export interface SelectDefaultProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: ISelectOptions[];
    mandatory?: boolean;
    name: string;
    status: ElementStatus;
    placeholder?: string;
    handleOnChange: (selectedOption: ISelectOptions) => void;
    error?: string;
}
