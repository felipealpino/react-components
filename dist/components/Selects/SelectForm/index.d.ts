import React from 'react';
import { SelectDefaultProps } from '@components/Selects/interfaces/SelectDefaultProps';
export declare type ISelectForm = SelectDefaultProps & {
    name: string;
};
declare const SelectForm: React.FC<ISelectForm>;
export default SelectForm;
