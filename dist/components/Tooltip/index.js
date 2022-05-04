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
import React, { useState } from 'react';
import { TooltipContainer } from './styles';
var Tooltip = function (_a) {
    var _b = _a.clickable, clickable = _b === void 0 ? false : _b, _c = _a.status, status = _c === void 0 ? 'danger' : _c, _d = _a.position, position = _d === void 0 ? 'bottom' : _d, props = __rest(_a, ["clickable", "status", "position"]);
    var _e = useState(false), show = _e[0], setShow = _e[1];
    console.log(show);
    return (React.createElement(TooltipContainer, __assign({}, props, { position: position, status: status, show: show, className: "tooltip-container " + (props.className || ''), onMouseLeave: function () { return !clickable && setShow(false); }, onMouseEnter: function () { return !clickable && setShow(true); }, onClick: function () { return clickable && setShow(!show); } }),
        React.createElement("div", { className: "tooltip-box" },
            props.text,
            React.createElement("span", { className: "tooltip-arrow" })),
        React.createElement("div", { className: "tooltip-children" }, props.children)));
};
export { Tooltip };
//# sourceMappingURL=index.js.map