import styled from 'styled-components';
import { ITabComplete } from '.';
import { colorGet } from '../../../shared/utils';

export const TabContainer = styled.div<ITabComplete>`
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  border-bottom: 3px solid ${colorGet('basic', 400)};
  padding: 10px 16px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: ${({ iconposition }) => (iconposition === 'top' || iconposition === 'bottom' ? 'column' : 'row')};
`;
