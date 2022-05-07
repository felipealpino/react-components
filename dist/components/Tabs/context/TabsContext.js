import React, { useContext, useState } from 'react';
export var TabsContext = React.createContext({});
var TabsProvider = function (_a) {
    var children = _a.children;
    var _b = useState(0), selectedTab = _b[0], setSelectedTab = _b[1];
    return React.createElement(TabsContext.Provider, { value: { selectedTab: selectedTab, setSelectedTab: setSelectedTab } }, children);
};
function useTabs() {
    var context = useContext(TabsContext);
    if (!context) {
        throw new Error('useTabs must be used within a TabsProvider');
    }
    return context;
}
export { useTabs, TabsProvider };
//# sourceMappingURL=TabsContext.js.map