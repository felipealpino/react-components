import React from 'react';
import { ElementStatus } from '../../../shared/theme/colors';
import { ITab } from '../Tab';
export interface ITabs {
    className?: string;
    status?: ElementStatus;
    selectedTabIndex?: number;
    handleOnChangeTab?: (selectedTabIndex: number) => void;
    tabs: ITab[];
}
declare const Tabs: React.FC<ITabs>;
export { Tabs };
