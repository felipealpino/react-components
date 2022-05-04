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
import { InputContainer } from './styles';
import { masker } from '../../../shared/utils';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import InputLabel from '../../../shared/components/InputLabel';
var Input = function (_a) {
    var Icon = _a.icon, onChange = _a.onChange, props = __rest(_a, ["icon", "onChange"]);
    var handleChange = useCallback(function (event) {
        if (props.mask && event.nativeEvent.inputType !== 'deleteContentBackward') {
            event.target.value = masker(event.target.value.replace(/[^a-zA-Z0-9]/g, ''), props.mask);
        }
        if (onChange)
            onChange(event);
    }, [onChange, props.mask]);
    return (React.createElement(InputContainer, __assign({}, props, { className: "input-container " + (props.className || '') }),
        props.label && React.createElement(InputLabel, { label: props.label, status: props.status, mandatory: props.mandatory }),
        React.createElement("div", { className: "container-input-icon" },
            React.createElement("input", __assign({}, props, { onChange: handleChange, className: "input-component-tag" })),
            Icon && React.createElement(Icon, { color: props.iconcolor, fill: props.iconfill || 'transparent' })),
        props.error && React.createElement(InputsErrorMessage, { error: props.error })));
};
export { Input };
//# sourceMappingURL=index.js.map