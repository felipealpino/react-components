import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ElementStatus } from '../../../shared/theme/colors';
import { ITab, Tab } from '../Tab';
import { TabsContainer } from './styles';

export interface ITabs {
  className?: string;
  status?: ElementStatus;
  selectedTabIndex?: number;
  handleOnChangeTab?: (selectedTabIndex: number) => void;
  tabs: ITab[];
  shouldResetTabsStates?: boolean;
  tabsPosition?: 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly' | 'center';
}

const Tabs: React.FC<ITabs> = ({ className, ...props }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    props.selectedTabIndex && setSelectedTab(props.selectedTabIndex);
  }, [props.selectedTabIndex]);

  const handleOnChangeTab = useCallback((clickedTab: number) => {
    setSelectedTab(clickedTab);
  }, []);

  const renderedResetedTab = useMemo(() => {
    const foundTab = props.tabs.find((tab) => tab.index === selectedTab);
    if (!foundTab) throw new Error('TAB NOT FOUND');
    return foundTab.componentToRender;
  }, [props.tabs, selectedTab]);

  return (
    <TabsContainer className={`tabs-container ${className ? className : ''}`} {...props}>
      <ul className="tab-options-list">
        {props.tabs.map((tab) => (
          <Tab
            {...tab}
            key={tab.index}
            className={`${selectedTab === tab.index ? 'selected' : ''}`}
            selectedTab={selectedTab}
            handleOnChangeTab={(clickedTab) => !tab.disabled && handleOnChangeTab(clickedTab)}
            clickTabCallback={tab.clickTabCallback}
          />
        ))}
      </ul>
      <div className="rendered-components-container">
        {/* Render all components to render */}
        {!props.shouldResetTabsStates &&
          props.tabs.map((tab) => (
            <div key={tab.index} className={`rendered-tab ${tab.index === selectedTab ? '--show' : ''}`}>
              {tab.componentToRender}
            </div>
          ))}

        {/* Render just one component to render  */}
        {props.shouldResetTabsStates && renderedResetedTab}
      </div>
    </TabsContainer>
  );
};

export { Tabs };
