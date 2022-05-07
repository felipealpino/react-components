import React from 'react';
import { ElementStatus } from '../../theme/colors';
import { InputLabelContainer } from './styles';

export interface InputLabel {
  label: string;
  isRequired?: boolean;
  className?: string;
  status?: ElementStatus;
}

const InputLabel: React.FC<InputLabel> = ({ className, ...props }) => {
  return (
    <InputLabelContainer className={`input-label ${className ? className : ''}`} {...props}>
      {props.label}
      {props.isRequired && <span className="required-star">*</span>}
    </InputLabelContainer>
  );
};

export default InputLabel;
