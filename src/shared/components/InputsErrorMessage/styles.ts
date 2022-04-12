import styled from 'styled-components';
import { colorGet } from '../../utils';

export const InputsErrorMessageContainer = styled.label`
  i {
    display: flex;
    padding-right: 5px;
  }
  display: flex;
  align-items: center;
  padding-top: 5px;
  color: ${colorGet('danger', 600)};
  font-size: 12px;
  font-weight: 600;
`;
