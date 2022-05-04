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
import { ButtonContainer } from './styles';
var Button = function (_a) {
    var Icon = _a.icon, onClick = _a.onClick, props = __rest(_a, ["icon", "onClick"]);
    var handleOnClickButton = useCallback(function (event) {
        if (props.disabled)
            return;
        onClick && onClick(event);
    }, [onClick, props.disabled]);
    return (React.createElement(ButtonContainer, __assign({}, props, { className: "button-container " + (props.className || ''), onClick: function (event) { return handleOnClickButton(event); } }),
        Icon && props.iconposition === 'left' && React.createElement(Icon, { color: props.iconcolor, fill: props.iconfill || 'transparent' }),
        props.children,
        Icon && props.iconposition === 'right' && React.createElement(Icon, { color: props.iconcolor, fill: props.iconfill || 'transparent' })));
};
export { Button };
//# sourceMappingURL=index.js.map