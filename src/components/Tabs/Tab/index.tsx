import React from 'react';
import { ElementStatus } from '../../../shared/theme/colors';

import { TabContainer } from './styles';

export interface ITab {
  label: string;
  index: number;
  className?: string;
  componentToRender?: any;
}

export type ITabComplete = ITab & {
  status?: ElementStatus;
  selectedTab: number;
  handleOnClickTab: (clickedTab: number) => void;
};

const Tab: React.FC<ITabComplete> = ({ className, ...props }) => {
  return (
    <TabContainer
      className={`tab-option ${className ? className : ''}`}
      {...props}
      onClick={() => props.handleOnClickTab(props.index)}
    >
      {props.label}
    </TabContainer>
  );
};

export { Tab };
