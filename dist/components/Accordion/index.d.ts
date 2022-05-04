import React from 'react';
import { ElementStatus } from '../../shared/theme/colors';
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
declare const Accordion: React.FC<IAccordion>;
export { Accordion };
