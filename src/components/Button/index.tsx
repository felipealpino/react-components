import { ElementStatus } from '../../shared/theme/colors';
import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { ButtonContainer } from './styles';
import { IconBaseProps } from 'react-icons';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ElementStatus;
  disabled?: boolean;
  outline?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  iconposition?: 'left' | 'right';
  iconcolor?: string;
  iconfill?: string;
}

const Button: React.FC<IButton> = ({ icon: Icon, onClick, ...props }) => {
  const handleOnClickButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (props.disabled) return;
      onClick && onClick(event);
    },
    [onClick, props.disabled],
  );

  return (
    <ButtonContainer {...props} className={`button-container ${props.className || ''}`} onClick={(event) => handleOnClickButton(event)}>
      {Icon && props.iconposition === 'left' && <Icon color={props.iconcolor} fill={props.iconfill || 'transparent'} />}
      {props.children}
      {Icon && props.iconposition === 'right' && <Icon color={props.iconcolor} fill={props.iconfill || 'transparent'} />}
    </ButtonContainer>
  );
};

export { Button };
