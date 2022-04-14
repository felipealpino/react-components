/* eslint-disable jsx-a11y/no-access-key */
import { ElementStatus } from '../../shared/theme/colors';
import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { ButtonContainer } from './styles';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ElementStatus;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const handleOnClickButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (props.disabled) return;
      props.onClick && props.onClick(event);
    },
    [props.disabled]
  );

  return (
    <ButtonContainer
      {...props}
      disabled={props.disabled}
      className={`button-container ${props.className || ''}`}
      onClick={(event) => handleOnClickButton(event)}
    >
      {props.children}
    </ButtonContainer>
  );
};

export { Button };
