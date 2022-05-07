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
import React, { useCallback, useEffect, useState } from 'react';
import { AccordionContainer } from '../../components/Accordion/styles';
import { FiChevronDown } from 'react-icons/fi';
var Accordion = function (_a) {
    var _b = _a.status, status = _b === void 0 ? 'basic' : _b, handleSetCurrent = _a.handleSetCurrent, props = __rest(_a, ["status", "handleSetCurrent"]);
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var handleOpen = useCallback(function () {
        setIsOpen(function (oldState) { return !oldState; });
        handleSetCurrent && handleSetCurrent(Number(props.index));
    }, [handleSetCurrent, props.index]);
    useEffect(function () {
        if ((props.accordionCurent || props.accordionCurent == 0) && props.accordionCurent != props.index) {
            setIsOpen(false);
        }
    }, [props.accordionCurent, props.index]);
    return (React.createElement(AccordionContainer, __assign({}, props, { status: status, isOpen: isOpen, className: "accordion-container " + (props.className || '') }),
        React.createElement("div", { className: "accordion-header", onClick: function () { return !props.disabled && handleOpen(); } },
            React.createElement("div", { className: "accordion-info-text" },
                React.createElement("label", null, props.title)),
            React.createElement("div", { className: "accordion-icon" },
                React.createElement(FiChevronDown, { color: "#11182F" }))),
        props.children && (React.createElement("div", { className: "accordion-content" },
            React.createElement("div", { className: "accordion-childrens" }, props.children)))));
};
export { Accordion };
//# sourceMappingURL=index.js.map