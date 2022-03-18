import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { ContainerTextArea } from './styles';
import { TextAreaDefaultProps } from '@components/TextAreas/interfaces/TextAreaDefaultProps';

export type ITextAreaForm = TextAreaDefaultProps & {
  name: string;
};

const TextAreaForm: React.FC<ITextAreaForm> = ({ name, label, ...props }) => {
  const textAreaRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef,
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
  }, [fieldName, registerField]);

  return (
    <>
      <ContainerTextArea className={`textareaform-container ${props.className || ''}`}>
        {label && (
          <label htmlFor={fieldName}>
            {label} {props.mandatory && <span className='mandatory-star'>*</span>}
          </label>
        )}
        <textarea
          id={fieldName}
          className='component-input'
          autoComplete={props.autoComplete}
          ref={textAreaRef}
          defaultValue={defaultValue}
          onChange={props.onChange}
          onBlur={props.onBlur}
          {...props}
        >
          {error && <span className='error'>{error}</span>}
        </textarea>
      </ContainerTextArea>
    </>
  );
};

export default TextAreaForm;
