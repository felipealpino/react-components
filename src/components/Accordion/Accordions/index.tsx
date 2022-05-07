import React, { useMemo, useState, useCallback } from 'react';

import { AccordionsContainer } from '../../../components/Accordion/Accordions/styles';

export interface IAccordions {
  gap?: string;
  children?: React.ReactNode;
}

const Accordions: React.FC<IAccordions> = ({ gap = '0px', ...props }) => {
  const [accordionCurent, setAccrodionCurrent] = useState<number>(0);

  const handleSetCurrent = useCallback((index: number) => {
    setAccrodionCurrent(index);
  }, []);

  const getChildren = useMemo(() => {
    const accordions = props.children as Array<any>;
    let newAccordions: Array<any>;

    if (accordions.length <= 1) {
      newAccordions = [...accordions];
      return newAccordions;
    }

    newAccordions = accordions.map((accordion, index) => {
      return {
        ...accordion,
        props: {
          index,
          handleSetCurrent,
          accordionCurent,
          ...accordion.props,
        },
      };
    });

    return newAccordions;
  }, [accordionCurent, handleSetCurrent, props.children]);

  return (
    <AccordionsContainer {...props} gap={gap} className="accordions-list">
      {getChildren}
    </AccordionsContainer>
  );
};

export { Accordions };
