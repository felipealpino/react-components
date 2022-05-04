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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useMemo, useState, useCallback } from 'react';
import { AccordionsContainer } from '../../../components/Accordion/Accordions/styles';
var Accordions = function (_a) {
    var _b = _a.gap, gap = _b === void 0 ? '0px' : _b, props = __rest(_a, ["gap"]);
    var _c = useState(0), accordionCurent = _c[0], setAccrodionCurrent = _c[1];
    var handleSetCurrent = useCallback(function (index) {
        setAccrodionCurrent(index);
    }, []);
    var getChildren = useMemo(function () {
        var accordions = props.children;
        var newAccordions;
        if (accordions.length <= 1) {
            newAccordions = __spreadArrays(accordions);
            return newAccordions;
        }
        newAccordions = accordions.map(function (accordion, index) {
            return __assign(__assign({}, accordion), { props: __assign({ index: index,
                    handleSetCurrent: handleSetCurrent,
                    accordionCurent: accordionCurent }, accordion.props) });
        });
        return newAccordions;
    }, [accordionCurent, handleSetCurrent, props.children]);
    return (React.createElement(AccordionsContainer, __assign({}, props, { gap: gap, className: "accordions-list" }), getChildren));
};
export { Accordions };
//# sourceMappingURL=index.js.map