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
import React, { useCallback, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PaginationContainer } from './styles';
var Pagination = function (_a) {
    var _b = _a.rounded, rounded = _b === void 0 ? true : _b, callbackGetListData = _a.callbackGetListData, props = __rest(_a, ["rounded", "callbackGetListData"]);
    var _c = useState(true), isFirstPage = _c[0], setIsFirstPage = _c[1];
    var _d = useState(false), isLastPage = _d[0], setIsLastPage = _d[1];
    var goBackPage = useCallback(function () {
        var newPage = Number(props.currentPage) - 1;
        if (newPage + 1 === 1)
            setIsFirstPage(true);
        if (newPage < 0)
            return;
        setIsLastPage(false);
        callbackGetListData('', newPage, props.option);
    }, [callbackGetListData, props.currentPage, props.option]);
    var goForwardPage = useCallback(function () {
        var newPage = Number(props.currentPage) + 1;
        if (newPage + 1 === props.totalOfPages)
            setIsLastPage(true);
        if (newPage >= props.totalOfPages)
            return;
        setIsFirstPage(false);
        callbackGetListData('', newPage, props.option);
    }, [callbackGetListData, props.currentPage, props.option, props.totalOfPages]);
    return (React.createElement(PaginationContainer, __assign({}, props, { callbackGetListData: callbackGetListData, isFirstPage: isFirstPage, isLastPage: isLastPage, rounded: rounded, className: "pagination-container " + (props.className || '') }),
        React.createElement("div", { className: "pagination-content" },
            React.createElement("label", { className: "pagination-content-icon back", onClick: goBackPage },
                React.createElement(FiChevronLeft, { color: "#FFFFFF" })),
            React.createElement("span", { className: "pagination-content-text" },
                "P\u00E1gina ",
                Number(props.currentPage) + 1,
                " de ",
                props.totalOfPages > 0 ? props.totalOfPages : 1),
            React.createElement("label", { className: "pagination-content-icon forward", onClick: goForwardPage },
                React.createElement(FiChevronRight, { color: "#FFFFFF" })))));
};
export { Pagination };
//# sourceMappingURL=index.js.map