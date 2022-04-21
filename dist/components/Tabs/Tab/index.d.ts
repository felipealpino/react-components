import React from 'react';
import { ElementStatus } from '../../../shared/theme/colors';
export interface ITab {
    label: string;
    index: number;
    className?: string;
    componentToRender?: any;
}
export declare type ITabComplete = ITab & {
    status?: ElementStatus;
    selectedTab: number;
    handleOnClickTab: (clickedTab: number) => void;
};
declare const Tab: React.FC<ITabComplete>;
export { Tab };
