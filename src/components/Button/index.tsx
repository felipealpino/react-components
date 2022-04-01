/* eslint-disable jsx-a11y/no-access-key */
import { ElementStatus } from '../../shared/theme/colors';
import React, { HTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

export interface IButton extends HTMLAttributes<HTMLDivElement> {
  status?: ElementStatus;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({ disabled = false, ...props }) => {
  return (
    <ButtonContainer {...props} disabled={disabled} className={`button-container ${props.className || ''}`}>
      {props.children}
    </ButtonContainer>
  );
};

export { Button };
