import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import InputLabel from '../../../shared/components/InputLabel';
import { ElementStatus } from '../../../shared/theme/colors';
import { RadioContainer, InputRadio } from '../Radio/styles';

// type RadioValue = string | ReadonlyArray<string> | number;

export interface IRadio {
  handleOnCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: any;
  status?: ElementStatus;
  id: string;
  name: string;
  required?: boolean;
  radioSize?: number;
  disabled?: boolean;
  radioRef?: React.RefObject<HTMLInputElement>;
}

const RadioForm: React.FC<IRadio> = ({ radioRef, radioSize = 30, ...props }) => {
  let radioReference = useRef<HTMLInputElement>(null);
  if (radioRef) radioReference = radioRef;
  const { fieldName, registerField } = useField(`${props.name} ${new Date().getTime()}`);

  // const handleOnChange = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     !!handleOnCheck && handleOnCheck(event);
  //   },
  //   [handleOnCheck],
  // );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: radioReference,
      getValue: (ref) => {
        return { name: ref.current.name, value: ref.current.value, isChecked: ref.current.checked };
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, radioReference, registerField]);

  return (
    <RadioContainer disabled={props.disabled}>
      <InputRadio
        ref={radioReference}
        radioSize={radioSize}
        status={props.status}
        id={props.id}
        name={props.name}
        value={props.value}
        type="radio"
        // onChange={(event) => handleOnChange(event)}
        disabled={props.disabled}
      />
      {!!props.label && <InputLabel label={props.label} status={props.status} isRequired={props.required} />}
    </RadioContainer>
  );
};

export { RadioForm };
