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
import React from 'react';
import { ContainerTextArea } from './styles';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import InputLabel from '../../../shared/components/InputLabel';
var TextArea = function (_a) {
    var _b = _a.resizable, resizable = _b === void 0 ? 'both' : _b, props = __rest(_a, ["resizable"]);
    return (React.createElement(ContainerTextArea, { className: "textareaform-container " + (props.className || ''), status: props.status, resizable: resizable },
        props.label && React.createElement(InputLabel, { label: props.label, status: props.status, isRequired: props.required }),
        React.createElement("textarea", __assign({ className: "textarea-component-tag" }, props), props.children),
        props.error && React.createElement(InputsErrorMessage, { error: props.error })));
};
export { TextArea };
//# sourceMappingURL=index.js.map