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
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useToast } from '../context/ToastContext';
import { ToastCardContainer } from './styles';
import { FiCheckCircle, FiInfo, FiAlertTriangle, FiXOctagon } from 'react-icons/fi';
// toast comes from the right and leaves to top
// toast in the center of the page
var ToastCard = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 5000 : _b, _c = _a.position, position = _c === void 0 ? 'top-right' : _c, handleOnClick = _a.handleOnClick, props = __rest(_a, ["duration", "position", "handleOnClick"]);
    var toastListCurrent = useToast().toastListCurrent;
    var _d = useState(false), shouldShow = _d[0], setShouldShow = _d[1];
    var timeToUnmount = 700; //700ms
    var _e = useState(-1), myIndexInArray = _e[0], setMyIndexInArray = _e[1];
    var intervalIdShow = useRef(null);
    var intervalIdRemove = useRef(null);
    var mounted = useRef(false);
    var handleOnClickToastCard = useCallback(function () {
        setShouldShow(false);
        intervalIdRemove.current = setTimeout(function () {
            handleOnClick(props.id);
        }, timeToUnmount);
    }, [handleOnClick, props.id]);
    var toastIcon = useMemo(function () {
        if (props.status === 'success')
            return React.createElement(FiCheckCircle, null);
        if (props.status === 'warning')
            return React.createElement(FiAlertTriangle, null);
        if (props.status === 'info')
            return React.createElement(FiInfo, null);
        if (props.status === 'danger')
            return React.createElement(FiXOctagon, null);
        return;
    }, [props.status]);
    var handleMouseEnter = useCallback(function () {
        intervalIdShow.current && clearTimeout(intervalIdShow.current);
        intervalIdRemove.current && clearTimeout(intervalIdRemove.current);
    }, []);
    var removeToastFromScreen = useCallback(function () {
        intervalIdShow.current = setTimeout(function () {
            mounted.current && setShouldShow(false);
        }, duration);
        intervalIdRemove.current = setTimeout(function () {
            //removing from array
            handleOnClick(props.id);
        }, duration + timeToUnmount);
    }, [duration, handleOnClick, props.id]);
    var handleMouseLeave = useCallback(function () {
        removeToastFromScreen();
    }, [removeToastFromScreen]);
    useEffect(function () {
        setShouldShow(true);
        removeToastFromScreen();
    }, [removeToastFromScreen]);
    useEffect(function () {
        var myIndex = toastListCurrent.findIndex(function (toast) { return toast.id === props.id; });
        setMyIndexInArray(myIndex);
    }, [props.id, toastListCurrent]);
    useEffect(function () {
        mounted.current = true;
        return function () {
            mounted.current = false;
        };
    }, []);
    return (React.createElement(ToastCardContainer, __assign({}, props, { handleOnClick: handleOnClick, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, myIndexInArray: myIndexInArray, position: position, duration: duration, className: "toast-card " + (props.className ? props.className : ''), onClick: handleOnClickToastCard, shouldShow: shouldShow, timeToUnmount: timeToUnmount }),
        React.createElement("div", { className: "toast-text-info" },
            React.createElement("div", { className: "toast-title" }, props.title),
            React.createElement("div", { className: "toast-subtitle" }, props.subtitle)),
        React.createElement("div", { className: "toast-icon" }, toastIcon)));
};
export { ToastCard };
//# sourceMappingURL=index.js.map