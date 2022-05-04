import { IAccordions } from '../../../components/Accordion/Accordions';
import styled from 'styled-components';

export const AccordionsContainer = styled.div<IAccordions>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;
