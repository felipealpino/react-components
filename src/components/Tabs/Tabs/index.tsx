import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { ElementStatus } from '../../../shared/theme/colors';
import { ITab, Tab } from '../Tab';

import { TabsContainer } from './styles';

export interface ITabs {
  className?: string;
  status?: ElementStatus;
  selectedTabIndex?: number;
  handleOnChangeTab?: (selectedTabIndex: number) => void;
  tabs: ITab[];
}

const Tabs: React.FC<ITabs> = ({ children, className, ...props }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    props.selectedTabIndex && setSelectedTab(props.selectedTabIndex);
  }, [props.selectedTabIndex]);

  const handleOnChangeTab = useCallback((clickedTab: number) => {
    setSelectedTab(clickedTab);
  }, []);

  return (
    <Fragment>
      <TabsContainer className={`tabs-container ${className ? className : ''}`} {...props}>
        <ul className='tab-options-list'>
          {props.tabs.map((tab) => (
            <Tab
              key={tab.label}
              className={`${selectedTab === tab.index ? 'selected' : ''}`}
              label={tab.label}
              index={tab.index}
              selectedTab={selectedTab}
              status={props.status}
              handleOnClickTab={(clickedTab) => handleOnChangeTab(clickedTab)}
            />
          ))}
        </ul>
        <div className='rendered-components-container'>
          {props.tabs.map((tab) => (
            <div className={`rendered-tab ${tab.index === selectedTab ? '--show' : ''}`}>{tab.componentToRender}</div>
          ))}
        </div>
      </TabsContainer>
    </Fragment>
  );
};

export { Tabs };
