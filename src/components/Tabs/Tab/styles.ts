import styled from 'styled-components';
import { ITabComplete } from '.';
import { colorGet } from '../../../shared/utils';

export const TabContainer = styled.div<ITabComplete>`
  border-bottom: 3px solid ${colorGet('basic', 400)};
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: ${({ iconPosition }) => (iconPosition === 'top' || iconPosition === 'bottom' ? 'column' : 'row')};
`;
