import React from 'react';
import { ContainerTextArea } from './styles';
import { TextAreaDefaultProps } from '../../../components/TextAreas/interfaces/TextAreaDefaultProps';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';

export type ITextArea = TextAreaDefaultProps & {};

const TextArea: React.FC<ITextArea> = (props) => {
  return (
    <ContainerTextArea className={`textareaform-container ${props.className || ''}`} status={props.status}>
      {props.label && (
        <label>
          {props.label} {props.mandatory && <span className='mandatory-star'>*</span>}
        </label>
      )}
      <textarea className='component-input' {...props}>
        {props.children}
      </textarea>
      {props.error && <InputsErrorMessage error={props.error} />}
    </ContainerTextArea>
  );
};

export { TextArea };
