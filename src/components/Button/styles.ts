import { colorGet } from '../../shared/utils/colorGet';
import styled from 'styled-components';
import { IButton } from '.';

export const ButtonContainer = styled.button<IButton>`
  all: none;
  border: none;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px 15px;
  font-weight: 600;
  font-size: 16px;
  transition: 0.1s ease-in-out;
  transition-property: background;
  min-width: 110px;
  width: fit-content;
  height: max-content;
  min-height: 50px;
  user-select: none;

  background: ${({ status, outline }) => (outline ? colorGet(status, 300) : colorGet(status, 500))};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 2px solid ${({ status }) => colorGet(status, 500)};
  opacity: ${({ disabled }) => (!disabled ? '1' : '0.5')};

  &:hover {
    background: ${({ status, disabled }) => !disabled && colorGet(status, 600)};
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;
