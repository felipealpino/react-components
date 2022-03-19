import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-eva-icons';

import { AccordionContainer } from '@components/Accordion/styles';
import { ElementStatus } from '@shared/theme/colors';

export interface IAccordion {
  index?: number;
  status?: ElementStatus;
  className?: string;
  title?: string;
  disabled?: boolean;
  handleSetCurrent?: (index: number) => void;
  accordionCurent?: number;
}

const Accordion: React.FC<IAccordion> = ({ status = 'control', ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setIsOpen((oldState) => !oldState);
    props.handleSetCurrent && props.handleSetCurrent(Number(props.index));
  }, []);

  useEffect(() => {
    if ((props.accordionCurent || props.accordionCurent == 0) && props.accordionCurent != props.index) {
      setIsOpen(false);
    }
  }, [props.accordionCurent]);

  return (
    <AccordionContainer
      {...props}
      status={status}
      isOpen={isOpen}
      className={`accordion-container ${props.className || ''}`}
    >
      <div className='accordion-header' onClick={() => !props.disabled && handleOpen()}>
        <div className='accordion-info-text'>
          <label>{props.title}</label>
        </div>

        {props.disabled && (
          <div className='accordion-icon'>
            <Icon name='close-circle-outline' fill='#11182F' />
          </div>
        )}

        {!props.disabled && (
          <div className='accordion-icon'>
            <Icon name='arrow-ios-downward' fill='#11182F' />
          </div>
        )}
      </div>
      {props.children && <div className='accordion-content'>{isOpen && props.children}</div>}
    </AccordionContainer>
  );
};

export { Accordion };
