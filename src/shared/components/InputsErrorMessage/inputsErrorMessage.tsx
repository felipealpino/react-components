import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { colorGet } from '../../utils';
import { InputsErrorMessageContainer } from './styles';

interface IInputsErrorMessage {
  error: string;
}

const InputsErrorMessage: React.FC<IInputsErrorMessage> = (props) => {
  return (
    <InputsErrorMessageContainer className="error">
      <FiAlertCircle color={colorGet('danger', 500)} />
      {props.error}
    </InputsErrorMessageContainer>
  );
};

export default InputsErrorMessage;
