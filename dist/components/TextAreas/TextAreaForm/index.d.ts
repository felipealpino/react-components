import React from 'react';
import { TextAreaDefaultProps } from '@components/TextAreas/interfaces/TextAreaDefaultProps';
export declare type ITextAreaForm = TextAreaDefaultProps & {
    name: string;
};
declare const TextAreaForm: React.FC<ITextAreaForm>;
export default TextAreaForm;
