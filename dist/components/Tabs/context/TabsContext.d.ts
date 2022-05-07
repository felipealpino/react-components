import React from 'react';
export declare type ITabsContextData = {
    selectedTab?: number;
    setSelectedTab: (clickedTab: number) => void;
};
export declare const TabsContext: React.Context<ITabsContextData>;
declare const TabsProvider: React.FC<{
    children: React.ReactNode;
}>;
declare function useTabs(): ITabsContextData;
export { useTabs, TabsProvider };
