import React from 'react';
import InputLabel from '../../../shared/components/InputLabel';
import { ElementStatus } from '../../../shared/theme/colors';
import { InputRadio, RadioContainer } from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export interface IRadio {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  value: RadioValue;
  status?: ElementStatus;
  id: string;
  name: string;
  mandatory?: 'on';
  radioSize?: number;
}

const Radio: React.FC<IRadio> = ({ onCheck, value, radioSize = 30, ...props }) => {
  const handleOnChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <RadioContainer>
      <InputRadio radioSize={radioSize} status={props.status} id={props.id} name={props.name} type="radio" value={value} onChange={handleOnChange} />
      {!!props.label && <InputLabel label={props.label} status={props.status} mandatory={props.mandatory} />}
    </RadioContainer>
  );
};

export { Radio };
