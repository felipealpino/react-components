import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';
import { FiCheck } from 'react-icons/fi';
import { CheckboxContainer } from '../Checkbox/styles';
import { ICheckboxDefaultProps } from '../interface/ICheckboxDefaultProps';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';

export type ICheckboxFormProps = ICheckboxDefaultProps & {};

const CheckboxForm: React.FC<ICheckboxFormProps> = ({ checkboxRef, semiRounded, icon: Icon, ...props }) => {
  let checkboxReference = useRef<HTMLInputElement>(null);
  if (checkboxRef) checkboxReference = checkboxRef;
  const { fieldName, registerField } = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: checkboxReference,
      getValue: (ref) => {
        return ref.current.checked;
      },
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
      clearValue: (ref) => {
        ref.current.checked = false;
      }
    });
  }, [fieldName, checkboxReference, registerField]);

  const [isChecked, setIsChecked] = useState<boolean>(props.defaultChecked || false);

  const handleOnClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
  }, []);

  return (
    <CheckboxContainer className='checkbox-form-container' {...props} semiRounded={semiRounded}>
      <div>
        <div className='container-input'>
          {isChecked && Icon && <Icon />}
          {isChecked && !Icon && <FiCheck />}

          <input
            {...props}
            ref={checkboxReference}
            defaultChecked={isChecked}
            type='checkbox'
            onChange={(event) => handleOnClick(event)}
          />
        </div>
        <label className='container-label' htmlFor={props.label}>
          {props.label}
        </label>
      </div>

      {props.error && <InputsErrorMessage error={props.error} />}
    </CheckboxContainer>
  );
};

export { CheckboxForm };
