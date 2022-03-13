import { colorGet } from '@shared/utils/colorGet';
import styled from 'styled-components';
import { IButtonProps } from '.';

export const ButtonContainer = styled.button<IButtonProps>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  background: ${({ status }) => colorGet(status, 400)};
  padding: 10px 15px;
  /* filter: drop-shadow(0px 2px 9px rgba(0, 0, 0, 0.14)); */
  font-weight: 600;
  font-size: 14px;
  transition: 0.1s ease-in-out;
  transition-property: background;
  border: 2px solid ${({ status }) => colorGet(status, 600)};

  &:hover {
    background: ${({ status }) => colorGet(status, 600)};
  }

  i {
    display: flex;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
