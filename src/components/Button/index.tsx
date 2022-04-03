/* eslint-disable jsx-a11y/no-access-key */
import { ElementStatus } from '../../shared/theme/colors';
import React, { HTMLAttributes, useCallback } from 'react';
import { ButtonContainer } from './styles';

export interface IButton extends HTMLAttributes<HTMLDivElement> {
  status?: ElementStatus;
  disabled?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const handleOnClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.disabled) return;
    props.onClick && props.onClick(event);
  }, [props.disabled]);
  
  return (
    <ButtonContainer
      {...props}
      onClick={(event) => handleOnClick(event)}
      disabled={props.disabled}
      className={`button-container ${props.className || ''}`}
    >
      {props.children}
    </ButtonContainer>
  );
};

export { Button };
