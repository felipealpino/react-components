import React, { useCallback, useState } from 'react';
import Icon from 'react-eva-icons';

import { colorGet } from '../../../shared/utils/colorGet';

import { ICheckboxDefaultProps } from '../interface/ICheckboxDefaultProps';
import { CheckboxContainer } from './styles';

export type ICheckbox = ICheckboxDefaultProps & {};

const Checkbox: React.FC<ICheckbox> = ({ iconName = 'checkmark', iconFill, semiRounded, ...props }) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.defaultChecked || false);

  const handleOnClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  }, []);

  return (
    <CheckboxContainer className='checkbox-container' {...props} semiRounded={semiRounded}>
      <div>
        <div className='container-input'>
          {isChecked && (
            <label className='container-icon'>
              <Icon name={iconName} fill={iconFill || colorGet(props.status, 800)} size='large' />
            </label>
          )}
          <input {...props} defaultChecked={isChecked} type='checkbox' onChange={(event) => handleOnClick(event)} />
        </div>
        <label className='container-label' htmlFor={props.label}>
          {props.label}
        </label>
      </div>

      {props.error && (
        <label className='error'>
          <Icon name='alert-circle-outline' fill={colorGet('danger', 500)} />
          {props.error}
        </label>
      )}
    </CheckboxContainer>
  );
};

export { Checkbox };
