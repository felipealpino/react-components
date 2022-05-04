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
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { SwipeToggleContainer } from './styles';
var SwipeToggle = function (_a) {
    var IconEnabled = _a.iconNameEnabled, IconDisabled = _a.iconNameDisabled, handleOnChange = _a.handleOnChange, props = __rest(_a, ["iconNameEnabled", "iconNameDisabled", "handleOnChange"]);
    var _b = useState(false), statusCheck = _b[0], setStatusCheck = _b[1];
    var inputRef = useRef(null);
    var handleChangeInput = useCallback(function () {
        if (handleOnChange)
            handleOnChange(statusCheck);
    }, [handleOnChange, statusCheck]);
    useEffect(function () {
        setStatusCheck(props.isChecked || false);
    }, [props.isChecked]);
    return (React.createElement(SwipeToggleContainer, __assign({}, props, { className: "swipe-toggle-container " + (props.className || ''), statusCheck: statusCheck }),
        React.createElement("input", { type: "checkbox", ref: inputRef, onChange: handleChangeInput }),
        React.createElement("span", { className: "slider", onClick: function () { return !props.disabled && setStatusCheck(!statusCheck); } },
            React.createElement("div", { className: "center-ball" },
                props.animatedIcon && (React.createElement("div", { className: "animated-icon-div" },
                    React.createElement("div", { className: "animated-icon" }))),
                statusCheck && IconEnabled && React.createElement(IconEnabled, null),
                !statusCheck && IconDisabled && React.createElement(IconDisabled, null)))));
};
export { SwipeToggle };
//# sourceMappingURL=index.js.map