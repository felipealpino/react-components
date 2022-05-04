import React, { useContext, useState } from 'react';

export type ITabsContextData = {
  selectedTab?: number;
  setSelectedTab: (clickedTab: number) => void;
};

export const TabsContext = React.createContext<ITabsContextData>({} as ITabsContextData);

const TabsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>{children}</TabsContext.Provider>;
};

function useTabs() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }

  return context;
}

export { useTabs, TabsProvider };
