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
import React, { useRef, useEffect, useCallback } from 'react';
import { useField } from '@unform/core';
import { masker } from '../../../shared/utils/masker';
import { InputContainer } from '../Input/styles';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import InputLabel from '../../../shared/components/InputLabel';
var InputForm = function (_a) {
    var inputRef = _a.inputRef, Icon = _a.icon, onChange = _a.onChange, props = __rest(_a, ["inputRef", "icon", "onChange"]);
    var inputReference = useRef(null);
    if (inputRef)
        inputReference = inputRef;
    var _b = useField(props.name), fieldName = _b.fieldName, registerField = _b.registerField;
    useEffect(function () {
        registerField({
            name: fieldName,
            ref: inputReference,
            getValue: function (ref) {
                return ref.current.value;
            },
            setValue: function (ref, value) {
                ref.current.value = value;
            },
            clearValue: function (ref) {
                ref.current.value = '';
            }
        });
    }, [fieldName, inputReference, registerField]);
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
            React.createElement("input", __assign({ id: fieldName, ref: inputReference, onChange: handleChange }, props, { className: "inputform-component-tag" })),
            Icon && React.createElement(Icon, { color: props.iconcolor, fill: props.iconfill || 'transparent' })),
        props.error && React.createElement(InputsErrorMessage, { error: props.error })));
};
export { InputForm };
//# sourceMappingURL=index.js.map