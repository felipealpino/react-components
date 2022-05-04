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
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';
import { FiCheck } from 'react-icons/fi';
import { CheckboxContainer } from '../Checkbox/styles';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
var CheckboxForm = function (_a) {
    var checkboxRef = _a.checkboxRef, semiRounded = _a.semiRounded, Icon = _a.icon, props = __rest(_a, ["checkboxRef", "semiRounded", "icon"]);
    var checkboxReference = useRef(null);
    if (checkboxRef)
        checkboxReference = checkboxRef;
    var _b = useField(props.name), fieldName = _b.fieldName, registerField = _b.registerField;
    useEffect(function () {
        registerField({
            name: fieldName,
            ref: checkboxReference,
            getValue: function (ref) {
                return ref.current.checked;
            },
            setValue: function (ref, value) {
                ref.current.checked = value;
            },
            clearValue: function (ref) {
                ref.current.checked = false;
            }
        });
    }, [fieldName, checkboxReference, registerField]);
    var _c = useState(props.defaultChecked || false), isChecked = _c[0], setIsChecked = _c[1];
    var handleOnClick = useCallback(function (event) {
        var checked = event.target.checked;
        setIsChecked(checked);
    }, []);
    return (React.createElement(CheckboxContainer, __assign({ className: "checkbox-form-container" }, props, { semiRounded: semiRounded }),
        React.createElement("div", null,
            React.createElement("div", { className: "container-input" },
                isChecked && Icon && React.createElement(Icon, null),
                isChecked && !Icon && React.createElement(FiCheck, null),
                React.createElement("input", __assign({}, props, { ref: checkboxReference, defaultChecked: isChecked, type: "checkbox", onChange: function (event) { return handleOnClick(event); } }))),
            React.createElement("label", { className: "container-label", htmlFor: props.label }, props.label)),
        props.error && React.createElement(InputsErrorMessage, { error: props.error })));
};
export { CheckboxForm };
//# sourceMappingURL=index.js.map