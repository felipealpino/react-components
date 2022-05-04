var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useState, useCallback, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
export var ToastContext = React.createContext({});
var ToastProvider = function (_a) {
    var children = _a.children;
    var _b = useState([]), toastListCurrent = _b[0], setToastListCurrent = _b[1];
    var removeToastCard = useCallback(function (cardId) {
        setToastListCurrent(function (oldState) {
            return oldState.filter(function (toast) { return toast.id !== cardId; });
        });
    }, []);
    var addToast = useCallback(function (options) {
        var newToastId = uuidv4();
        var newToast = {
            id: newToastId,
            handleOnClick: removeToastCard,
            duration: options.duration,
            position: options.position,
            title: options.title,
            subtitle: options.subtitle,
            status: options.status
        };
        setToastListCurrent(function (oldState) {
            var filteredPositions = oldState.filter(function (toast) { return toast.position === newToast.position; });
            return __spreadArrays([newToast], filteredPositions);
        });
    }, [removeToastCard]);
    return React.createElement(ToastContext.Provider, { value: { addToast: addToast, toastListCurrent: toastListCurrent } }, children);
};
function useToast() {
    var context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
export { useToast, ToastProvider };
//# sourceMappingURL=ToastContext.js.map