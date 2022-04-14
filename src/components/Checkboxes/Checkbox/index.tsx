import React, { useCallback, useState } from 'react';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';

import { ICheckboxDefaultProps } from '../interface/ICheckboxDefaultProps';
import { CheckboxContainer } from './styles';
import { FiCheck } from 'react-icons/fi';

export type ICheckbox = ICheckboxDefaultProps & {};

const Checkbox: React.FC<ICheckbox> = ({ icon: Icon, iconColor, semiRounded, ...props }) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.defaultChecked || false);

  const handleOnClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setIsChecked(checked);
  }, []);

  return (
    <CheckboxContainer className='checkbox-container' {...props} semiRounded={semiRounded}>
      <div>
        <div className='container-input'>
          {isChecked && Icon && <Icon />}
          {isChecked && !Icon && <FiCheck />}

          <input {...props} defaultChecked={isChecked} type='checkbox' onChange={(event) => handleOnClick(event)} />
        </div>
        <label className='container-label' htmlFor={props.label}>
          {props.label}
        </label>
      </div>

      {props.error && <InputsErrorMessage error={props.error} />}
    </CheckboxContainer>
  );
};

export { Checkbox };
