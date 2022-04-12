import React, { useCallback } from 'react';
import { InputContainer } from './styles';
import Icon from 'react-eva-icons';
import { InputDefaultProps } from '../../../components/Inputs/interfaces/InputDefaultProps';
import { masker } from '../../../shared/utils';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';

export type IInputProps = InputDefaultProps & {};

const Input: React.FC<IInputProps> = (props) => {
  const handleChange = useCallback((event) => {
    if (props.mask && event.nativeEvent.inputType !== 'deleteContentBackward') {
      event.target.value = masker(event.target.value.replace(/[^a-zA-Z0-9]/g, ''), props.mask);
    }

    if (props.onChange) props.onChange(event);
  }, []);

  return (
    <InputContainer {...props} className={`input-container ${props.className || ''}`}>
      <label className='input-label'>
        {props.label}
        {props.mandatory && <span className='mandatory-star'>*</span>}
      </label>

      <div className='container-input-icon'>
        <input {...props} onChange={handleChange} />
        {props.icon && (
          <div className='icon'>
            <Icon name={props.icon.name} fill={props.icon.fill} />
          </div>
        )}
      </div>

      {props.error && <InputsErrorMessage error={props.error} />}
    </InputContainer>
  );
};

export { Input };
