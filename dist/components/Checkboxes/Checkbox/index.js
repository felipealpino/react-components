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
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import { CheckboxContainer } from './styles';
import { FiCheck } from 'react-icons/fi';
import InputLabel from '../../../shared/components/InputLabel';
var Checkbox = function (_a) {
    var Icon = _a.icon, semiRounded = _a.semiRounded, props = __rest(_a, ["icon", "semiRounded"]);
    var _b = useState(props.defaultChecked || false), isChecked = _b[0], setIsChecked = _b[1];
    var handleOnClick = useCallback(function (event) {
        var checked = event.target.checked;
        setIsChecked(checked);
    }, []);
    return (React.createElement(CheckboxContainer, __assign({ className: "checkbox-container" }, props, { semiRounded: semiRounded }),
        React.createElement("div", null,
            React.createElement("div", { className: "container-input" },
                isChecked && Icon && React.createElement(Icon, null),
                isChecked && !Icon && React.createElement(FiCheck, null),
                React.createElement("input", __assign({}, props, { defaultChecked: isChecked, type: "checkbox", onChange: function (event) { return handleOnClick(event); } }))),
            props.label && React.createElement(InputLabel, { label: props.label, status: props.status, isRequired: props.required })),
        props.error && React.createElement(InputsErrorMessage, { error: props.error })));
};
export { Checkbox };
//# sourceMappingURL=index.js.map