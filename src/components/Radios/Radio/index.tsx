import React, { useCallback } from 'react';
import InputLabel from '../../../shared/components/InputLabel';
import { ElementStatus } from '../../../shared/theme/colors';
import { InputRadio, RadioContainer } from './styles';

// type RadioValue = string | ReadonlyArray<string> | number;

export interface IRadio {
  handleOnCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  // value: RadioValue;
  status?: ElementStatus;
  id: string;
  name: string;
  mandatory?: 'on';
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
    <RadioContainer>
      <InputRadio
        radioSize={radioSize}
        status={props.status}
        id={props.id}
        name={props.name}
        type="radio"
        disabled={props.disabled}
        // value={value}
        onChange={(event) => handleOnChange(event)}
      />
      {!!props.label && <InputLabel label={props.label} status={props.disabled ? 'basic' : props.status} mandatory={props.mandatory} />}
    </RadioContainer>
  );
};

export { Radio };
