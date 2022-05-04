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
import React, { Fragment } from 'react';
import { useToast } from '../context/ToastContext';
import { ToastCard } from '../ToastCard';
var ToastCardsContainer = function () {
    var toastListCurrent = useToast().toastListCurrent;
    return (React.createElement(Fragment, null, toastListCurrent.map(function (toast) { return (React.createElement(ToastCard, __assign({ key: toast.id }, toast))); })));
};
export { ToastCardsContainer };
//# sourceMappingURL=index.js.map