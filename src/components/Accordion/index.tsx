import React, { useCallback, useEffect, useState } from 'react';

import { AccordionContainer } from '../../components/Accordion/styles';
import { ElementStatus } from '../../shared/theme/colors';
import { FiChevronDown } from 'react-icons/fi';

export interface IAccordion {
  index?: number;
  status?: ElementStatus;
  className?: string;
  title?: string;
  disabled?: boolean;
  handleSetCurrent?: (index: number) => void;
  accordionCurent?: number;
  children?: React.ReactNode;
}

const Accordion: React.FC<IAccordion> = ({ status = 'basic', handleSetCurrent, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setIsOpen((oldState) => !oldState);
    handleSetCurrent && handleSetCurrent(Number(props.index));
  }, [handleSetCurrent, props.index]);

  useEffect(() => {
    if ((props.accordionCurent || props.accordionCurent == 0) && props.accordionCurent != props.index) {
      setIsOpen(false);
    }
  }, [props.accordionCurent, props.index]);

  return (
    <AccordionContainer {...props} status={status} isOpen={isOpen} className={`accordion-container ${props.className || ''}`}>
      <div className="accordion-header" onClick={() => !props.disabled && handleOpen()}>
        <div className="accordion-info-text">
          <label>{props.title}</label>
        </div>
        <div className="accordion-icon">
          <FiChevronDown color="#11182F" />
        </div>
      </div>
      {props.children && (
        <div className="accordion-content">
          <div className="accordion-childrens">{props.children}</div>
        </div>
      )}
    </AccordionContainer>
  );
};

export { Accordion };
