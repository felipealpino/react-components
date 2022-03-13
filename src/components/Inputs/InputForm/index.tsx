import React, { useRef, useEffect, useCallback, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { masker } from '@shared/utils/masker';
import Icon from 'react-eva-icons';
import { ElementStatus } from '@shared/theme/colors';
import { InputContainer } from '../Input/styles';

export interface IInputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  mandatory?: boolean;
  status?: ElementStatus;
  mask?: string;
  icon?: { name: string; fill: string };
  inputRef?: React.RefObject<HTMLInputElement>;
  error?: string;
  className?: string;
}

const InputForm: React.FC<IInputFormProps> = ({ autoFocus = false, inputRef, mask, name, onChange, ...props }) => {
  let inputReference = useRef<HTMLInputElement>(null);
  if (inputRef) inputReference = inputRef;

  const { fieldName, registerField } = useField(name);
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

  const handleChange = useCallback(
    (ev) => {
      if (mask && ev.nativeEvent.inputType !== 'deleteContentBackward') {
        ev.target.value = masker(ev.target.value.replace(/[^a-zA-Z0-9]/g, ''), mask);
      }

      if (onChange) {
        onChange(ev);
      }
    },
    [mask, onChange]
  );

  return (
    <>
      <InputContainer {...props} className={`input-container ${props.className || ''}`}>
        <label className='input-label'>
          {props.label}
          {props.mandatory && <span className='mandatory-star'>*</span>}
        </label>

        <div className='container-input-icon'>
          <input id={fieldName} ref={inputReference} onChange={handleChange} {...props} />
          {props.icon && (
            <div className='icon'>
              <Icon name={props.icon.name} fill={props.icon.fill} />
            </div>
          )}
        </div>

        <label className='error'>{props.error}</label>
      </InputContainer>
    </>
  );
};

export { InputForm };
