var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Tab } from '../Tab';
import { TabsContainer } from './styles';
var Tabs = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useState(0), selectedTab = _b[0], setSelectedTab = _b[1];
    useEffect(function () {
        props.selectedTabIndex && setSelectedTab(props.selectedTabIndex);
    }, [props.selectedTabIndex]);
    var handleOnChangeTab = useCallback(function (clickedTab) {
        setSelectedTab(clickedTab);
    }, []);
    var renderedResetedTab = useMemo(function () {
        var foundTab = props.tabs.find(function (tab) { return tab.index === selectedTab; });
        if (!foundTab)
            throw new Error('TAB NOT FOUND');
        return foundTab.componentToRender;
    }, [props.tabs, selectedTab]);
    return (React.createElement(TabsContainer, __assign({ className: "tabs-container " + (className ? className : '') }, props),
        React.createElement("ul", { className: "tab-options-list" }, props.tabs.map(function (tab) { return (React.createElement(Tab, __assign({}, tab, { key: tab.index, className: "" + (selectedTab === tab.index ? 'selected' : ''), selectedTab: selectedTab, handleOnChangeTab: function (clickedTab) { return !tab.disabled && handleOnChangeTab(clickedTab); }, clickTabCallback: tab.clickTabCallback }))); })),
        React.createElement("div", { className: "rendered-components-container" },
            !props.shouldResetTabsStates &&
                props.tabs.map(function (tab) { return (React.createElement("div", { key: tab.index, className: "rendered-tab " + (tab.index === selectedTab ? '--show' : '') }, tab.componentToRender)); }),
            props.shouldResetTabsStates && renderedResetedTab)));
};
export { Tabs };
//# sourceMappingURL=index.js.map