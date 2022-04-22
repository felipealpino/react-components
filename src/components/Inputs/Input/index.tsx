import React, { useCallback } from 'react';
import { InputContainer } from './styles';
import { InputDefaultProps } from '../../../components/Inputs/interfaces/InputDefaultProps';
import { masker } from '../../../shared/utils';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import InputLabel from '../../../shared/components/InputLabel';

export type IInputProps = InputDefaultProps & {};

const Input: React.FC<IInputProps> = ({ icon: Icon, ...props }) => {
  const handleChange = useCallback((event) => {
    if (props.mask && event.nativeEvent.inputType !== 'deleteContentBackward') {
      event.target.value = masker(event.target.value.replace(/[^a-zA-Z0-9]/g, ''), props.mask);
    }

    if (props.onChange) props.onChange(event);
  }, []);

  return (
    <InputContainer {...props} className={`input-container ${props.className || ''}`}>
      {props.label && <InputLabel label={props.label} status={props.status} mandatory={props.mandatory} />}

      <div className='container-input-icon'>
        <input {...props} onChange={handleChange} className='input-component-tag' />
        {Icon && <Icon color={props.iconcolor} fill={props.iconfill || 'transparent'} />}
      </div>

      {props.error && <InputsErrorMessage error={props.error} />}
    </InputContainer>
  );
};

export { Input };