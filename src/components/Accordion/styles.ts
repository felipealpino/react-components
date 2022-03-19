import { IAccordion } from '@components/Accordion';
import { colorGet } from '@shared/utils/colorGet';
import styled from 'styled-components';

type IAccordionProps = IAccordion & {
  isOpen: boolean;
};

export const AccordionContainer = styled.div<IAccordionProps>`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: ${({ status }) => colorGet(status, 400)};
  min-height: 3rem;
  font-family: sans-serif;
  width: inherit;

  .accordion-header {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };
  }

  .accordion-info-text {
    > label {
      cursor: inherit;
    }
  }

  .accordion-icon {
    transition: 0.2s ease-in-out;
    transition-property: transform;
    transform: ${({ isOpen }) => `rotate(${isOpen ? '-180deg' : '0deg'})`};

    i {
      display: flex;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }

  .accordion-content {
    background: #ffffff;
    padding: ${({ isOpen }) => (isOpen ? '1rem 0.7rem' : '0rem 0.7rem')};
    transition: 0.2s ease-in-out;
    transition-property: padding;
  }
`;
