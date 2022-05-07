import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import InputLabel from '../../../shared/components/InputLabel';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import { ITextArea } from '../TextArea';
import { ContainerTextArea } from '../TextArea/styles';

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
      },
    });
  }, [fieldName, textAreaReference, registerField]);

  return (
    <ContainerTextArea
      className={`textareaform-container ${props.className || ''}`}
      disabled={props.disabled}
      status={props.status}
      resizable={resizable}
    >
      {props.label && <InputLabel label={props.label} status={props.status} isRequired={props.required} />}

      <textarea ref={textAreaReference} className="textarea-component-tag" {...props}>
        {props.children}
      </textarea>
      {props.error && <InputsErrorMessage error={props.error} />}
    </ContainerTextArea>
  );
};

export { TextAreaForm };
