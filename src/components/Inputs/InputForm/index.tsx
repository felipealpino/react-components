import React, { useRef, useEffect, useCallback } from 'react';
import { useField } from '@unform/core';
import { masker } from '../../../shared/utils/masker';
import { InputContainer } from '../Input/styles';
import { InputDefaultProps } from '../../../components/Inputs/interfaces/InputDefaultProps';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import InputLabel from '../../../shared/components/InputLabel';

export type IInputFormProps = InputDefaultProps & {
  name: string;
};

const InputForm: React.FC<IInputFormProps> = ({ inputRef, icon: Icon, ...props }) => {
  let inputReference = useRef<HTMLInputElement>(null);
  if (inputRef) inputReference = inputRef;

  const { fieldName, registerField } = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputReference,
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
  }, [fieldName, inputReference, registerField]);

  const handleChange = useCallback((ev) => {
    if (props.mask && ev.nativeEvent.inputType !== 'deleteContentBackward') {
      ev.target.value = masker(ev.target.value.replace(/[^a-zA-Z0-9]/g, ''), props.mask);
    }
    if (props.onChange) props.onChange(ev);
  }, []);

  return (
    <InputContainer {...props} className={`input-container ${props.className || ''}`}>
      {props.label && <InputLabel label={props.label} status={props.status} mandatory={props.mandatory} />}

      <div className='container-input-icon'>
        <input
          id={fieldName}
          ref={inputReference}
          onChange={handleChange}
          {...props}
          className='inputform-component-tag'
        />
        {Icon && (
          <div className='icon'>
            <Icon color={props.iconcolor} fill={props.iconfill || 'transparent'} />
          </div>
        )}
      </div>

      {props.error && <InputsErrorMessage error={props.error} />}
    </InputContainer>
  );
};

export { InputForm };
