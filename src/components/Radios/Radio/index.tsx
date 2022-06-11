import React, { useCallback } from 'react';
import InputLabel from '../../../shared/components/InputLabel';
import { ElementStatus } from '../../../shared/theme/colors';
import { InputRadio, RadioContainer } from './styles';

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
}

const Radio: React.FC<IRadio> = ({ handleOnCheck, radioSize = 30, ...props }) => {
  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      !!handleOnCheck && handleOnCheck(event);
    },
    [handleOnCheck],
  );

  return (
    <RadioContainer disabled={props.disabled}>
      <InputRadio
        radioSize={radioSize}
        status={props.status}
        id={props.id}
        name={props.name}
        value={props.value}
        type="radio"
        onChange={(event) => handleOnChange(event)}
        disabled={props.disabled}
      />
      {!!props.label && <InputLabel label={props.label} status={props.status} isRequired={props.required} />}
    </RadioContainer>
  );
};

export { Radio };
