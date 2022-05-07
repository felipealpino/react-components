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
import React, { useCallback } from 'react';
import { colorGet } from '../../../shared/utils/colorGet';
import { TabContainer } from './styles';
var Tab = function (_a) {
    var className = _a.className, _b = _a.iconposition, iconposition = _b === void 0 ? 'left' : _b, Icon = _a.icon, clickTabCallback = _a.clickTabCallback, handleOnChangeTab = _a.handleOnChangeTab, props = __rest(_a, ["className", "iconposition", "icon", "clickTabCallback", "handleOnChangeTab"]);
    var handleOnClick = useCallback(function () {
        handleOnChangeTab(props.index);
        clickTabCallback && clickTabCallback();
    }, [clickTabCallback, handleOnChangeTab, props.index]);
    return (React.createElement(TabContainer, __assign({ handleOnChangeTab: handleOnChangeTab, iconposition: iconposition, className: "tab-option " + (className ? className : ''), onClick: handleOnClick }, props),
        Icon && (iconposition === 'left' || iconposition === 'top') && React.createElement(Icon, { color: colorGet('basic', 800), fill: props.iconfill || 'transparent' }),
        React.createElement("span", null, props.label),
        Icon && (iconposition === 'right' || iconposition === 'bottom') && (React.createElement(Icon, { color: colorGet('basic', 800), fill: props.iconfill || 'transparent' }))));
};
export { Tab };
//# sourceMappingURL=index.js.map