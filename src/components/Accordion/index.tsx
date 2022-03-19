import React from 'react';

import { AccordionContainer } from '@components/Accordion/styles';

export interface IAccordion {
  status?: string;
}

const Accordion: React.FC<IAccordion> = (props) => {
  return <AccordionContainer {...props}></AccordionContainer>;
};

export { Accordion };
