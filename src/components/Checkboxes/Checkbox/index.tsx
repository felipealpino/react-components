import React, { useCallback, useState } from 'react';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';

import { ICheckboxDefaultProps } from '../interface/ICheckboxDefaultProps';
import { CheckboxContainer } from './styles';
import { FiCheck } from 'react-icons/fi';
import InputLabel from '../../../shared/components/InputLabel';

export type ICheckbox = ICheckboxDefaultProps & {};

const Checkbox: React.FC<ICheckbox> = ({ icon: Icon, semiRounded, ...props }) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.defaultChecked || false);

  const handleOnClick = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
  }, []);

  return (
    <CheckboxContainer className="checkbox-container" {...props} semiRounded={semiRounded}>
      <div>
        <div className="container-input">
          {isChecked && Icon && <Icon />}
          {isChecked && !Icon && <FiCheck />}

          <input {...props} defaultChecked={isChecked} type="checkbox" onChange={(event) => handleOnClick(event)} />
        </div>
        {props.label && <InputLabel label={props.label} status={props.status} isRequired={props.required} />}
      </div>

      {props.error && <InputsErrorMessage error={props.error} />}
    </CheckboxContainer>
  );
};

export { Checkbox };
