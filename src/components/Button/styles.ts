import { colorGet } from '@shared/utils/colorGet';
import styled from 'styled-components';
import { IButton } from '.';

export const ButtonContainer = styled.div<IButton>`
  font-family: sans-serif;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px 15px;
  font-weight: 600;
  font-size: 14px;
  transition: 0.1s ease-in-out;
  transition-property: background;
  /* filter: drop-shadow(0px 2px 9px rgba(0, 0, 0, 0.14)); */

  background: ${({ status }) => colorGet(status, 500)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 2px solid ${({ status }) => colorGet(status, 600)};
  opacity: ${({ disabled }) => (!disabled ? '1' : '0.6')};

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
