import React, { useState } from 'react';
import Icon from 'react-eva-icons';

import { AccordionContainer } from '@components/Accordion/styles';
import { ElementStatus } from '@shared/theme/colors';

export interface IAccordion {
  status?: ElementStatus;
  className?: string;
  title?: string;
  disabled?: boolean;
}

const Accordion: React.FC<IAccordion> = ({ status = 'control', ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AccordionContainer
      {...props}
      status={status}
      isOpen={isOpen}
      className={`accordion-container ${props.className || ''}`}
    >
      <div className='accordion-header' onClick={() => setIsOpen(!isOpen)}>
        <div className='accordion-info-text'>
          <label>{props.title}</label>
        </div>
        <div className='accordion-icon'>
          <Icon name='arrow-ios-downward' fill='#11182F' />
        </div>
      </div>
      {props.children && <div className='accordion-content'>
        {isOpen && props.children}
      </div>}
    </AccordionContainer>
  );
};

export { Accordion };
