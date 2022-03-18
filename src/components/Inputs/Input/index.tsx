import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { InputContainer } from './styles';
import Icon from 'react-eva-icons';
import { ElementStatus } from '@shared/theme/colors';

// type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: any;
  icon?: { name: string; fill: string };
  handleOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: string;
  error?: string;
  status?: ElementStatus;
  mandatory?: boolean;
}

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

      <label className='error'>{props.error}</label>
    </InputContainer>
  );
};

export { Input };
