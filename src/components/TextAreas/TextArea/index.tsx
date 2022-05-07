import React from 'react';
import { ContainerTextArea } from './styles';
import { TextAreaDefaultProps } from '../../../components/TextAreas/interfaces/TextAreaDefaultProps';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import InputLabel from '../../../shared/components/InputLabel';

export type ITextArea = TextAreaDefaultProps & {};

const TextArea: React.FC<ITextArea> = ({ resizable = 'both', ...props }) => {
  return (
    <ContainerTextArea
      className={`textareaform-container ${props.className || ''}`}
      status={props.status}
      resizable={resizable}
      disabled={props.disabled}
    >
      {props.label && <InputLabel label={props.label} status={props.status} isRequired={props.required} />}

      <textarea className="textarea-component-tag" {...props}>
        {props.children}
      </textarea>
      {props.error && <InputsErrorMessage error={props.error} />}
    </ContainerTextArea>
  );
};

export { TextArea };
