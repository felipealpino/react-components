import styled from 'styled-components';
import { InputLabel } from '.';
import { colorGet } from '../../utils/colorGet';

export const InputLabelContainer = styled.label<InputLabel>`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  line-height: 30px;
  color: ${({ status }) => `${colorGet(status, 500)}`};
  text-transform: unset;
  margin: 4px 0px;
  letter-spacing: 0px;
  font-size: 14px;
  font-weight: 700;
  user-select: none;
  pointer-events: none;
  display: flex;

  .mandatory-star {
    color: ${colorGet('danger', 500)};
    font-size: 14px;
    margin-left: 3px;
  }
`;
