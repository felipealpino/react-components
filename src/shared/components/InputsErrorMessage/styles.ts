import styled from 'styled-components';
import { colorGet } from '../../utils';

export const InputsErrorMessageContainer = styled.label`
  svg {
    padding-right: 5px;
    width: 25px;
    height: 25px;
  }
  display: flex;
  align-items: center;
  padding-top: 5px;
  color: ${colorGet('danger', 600)};
  font-size: 12px;
  font-weight: 600;
`;
