import React from 'react';
import { InputContainer } from './styles';
import Icon from 'react-eva-icons';
import { InputDefaultProps } from '@components/Inputs/interfaces/InputDefaultProps';
import { colorGet } from '@shared/utils/colorGet';

export type IInputProps = InputDefaultProps & {};

const Input: React.FC<IInputProps> = (props) => {
  return (
    <InputContainer {...props} className={`input-container ${props.className || ''}`}>
      <label className='input-label'>
        {props.label}
        {props.mandatory && <span className='mandatory-star'>*</span>}
      </label>

      <div className='container-input-icon'>
        <input {...props} />
        {props.icon && (
          <div className='icon'>
            <Icon name={props.icon.name} fill={props.icon.fill} />
          </div>
        )}
      </div>

      {props.error && (
        <label className='error'>
          <Icon name='alert-circle-outline' fill={colorGet('danger', 500)} />
          {props.error}
        </label>
      )}
    </InputContainer>
  );
};

export { Input };
