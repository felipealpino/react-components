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

const InputForm: React.FC<IInputFormProps> = ({ inputRef, icon: Icon, onChange, ...props }) => {
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
      },
    });
  }, [fieldName, inputReference, registerField]);

  const handleChange = useCallback(
    (event) => {
      if (props.mask && event.nativeEvent.inputType !== 'deleteContentBackward') {
        event.target.value = masker(event.target.value.replace(/[^a-zA-Z0-9]/g, ''), props.mask);
      }
      if (onChange) onChange(event);
    },
    [onChange, props.mask],
  );

  return (
    <InputContainer {...props} className={`input-container ${props.className || ''}`}>
      {props.label && <InputLabel label={props.label} status={props.status} isRequired={props.required} />}

      <div className="container-input-icon">
        <input id={fieldName} ref={inputReference} onChange={handleChange} {...props} className="inputform-component-tag" />
        {Icon && <Icon color={props.iconcolor} fill={props.iconfill || 'transparent'} />}
      </div>

      {props.error && <InputsErrorMessage error={props.error} />}
    </InputContainer>
  );
};

export { InputForm };
