import React from 'react';
import { IconBaseProps } from 'react-icons';
import { IPosition } from '../../../shared/interfaces';
import { ElementStatus } from '../../../shared/theme/colors';
export interface ITab {
    label: string;
    index: number;
    className?: string;
    componentToRender?: any;
    icon?: React.ComponentType<IconBaseProps>;
    iconposition?: IPosition;
    iconfill?: string;
    clickTabCallback?: () => void;
    disabled?: boolean;
}
export declare type ITabComplete = ITab & {
    status?: ElementStatus;
    selectedTab: number;
    handleOnChangeTab: (clickedTab: number) => void;
};
declare const Tab: React.FC<ITabComplete>;
export { Tab };
