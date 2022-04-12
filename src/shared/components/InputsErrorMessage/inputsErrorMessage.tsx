import React from 'react';
import Icon from 'react-eva-icons';
import { colorGet } from '../../utils';
import { InputsErrorMessageContainer } from './styles';

interface IInputsErrorMessage {
  error: string;
}

const InputsErrorMessage: React.FC<IInputsErrorMessage> = (props) => {
  return (
    <InputsErrorMessageContainer className='error'>
      <Icon name='alert-circle-outline' fill={colorGet('danger', 500)} />
      {props.error}
    </InputsErrorMessageContainer>
  );
};

export default InputsErrorMessage;
