/* eslint-disable jsx-a11y/no-access-key */
import { ElementStatus } from '@shared/theme/colors';
import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyleProps } from 'styled-system';
import { ButtonContainer } from './styles';

export interface IButtonProps extends ButtonStyleProps, ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ElementStatus;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <ButtonContainer {...props} className={`button-container ${props.className || ''}`}>
      {props.children}
    </ButtonContainer>
  );
};

export { Button };
