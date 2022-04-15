import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { TextAreaDefaultProps } from '../../../components/TextAreas/interfaces/TextAreaDefaultProps';
import InputLabel from '../../../shared/components/InputLabel';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import { ContainerTextArea } from '../TextArea/styles';

export type ITextArea = TextAreaDefaultProps & {};

const TextAreaForm: React.FC<ITextArea> = ({ textAreaRef, resizable = 'both', ...props }) => {
  let textAreaReference = useRef<HTMLTextAreaElement>(null);
  if (textAreaRef) textAreaReference = textAreaRef;

  const { fieldName, registerField } = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaReference,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      }
    });
  }, [fieldName, textAreaReference, registerField]);

  return (
    <ContainerTextArea
      className={`textareaform-container ${props.className || ''}`}
      status={props.status}
      resizable={resizable}
    >
      {props.label && <InputLabel label={props.label} status={props.status} mandatory={props.mandatory} />}

      <textarea ref={textAreaReference} className='textarea-component-tag' {...props}>
        {props.children}
      </textarea>
      {props.error && <InputsErrorMessage error={props.error} />}
    </ContainerTextArea>
  );
};

export { TextAreaForm };
