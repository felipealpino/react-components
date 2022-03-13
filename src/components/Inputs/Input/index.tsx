import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { InputContainer } from './styles';
import Icon from 'react-eva-icons';
import { ElementStatus } from '@shared/theme/colors';

// type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: any;
  icon?: { name: string; fill: string };
  handleOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  type?: string;
  error?: string;
  status?: ElementStatus;
}

const Input: React.FC<IInputProps> = (props) => {
  return (
    <InputContainer {...props} className={`input-container ${props.className || ''}`}>
      <label className='input-label'>{props.label}</label>
      <input {...props} />
      <label className='error'>{props.error}</label>

      {props.icon && (
        <div className='icon'>
          <Icon name={props.icon.name} fill={props.icon.fill} />
        </div>
      )}
    </InputContainer>
  );
};

export { Input };
