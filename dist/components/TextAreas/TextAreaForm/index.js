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
import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import InputLabel from '../../../shared/components/InputLabel';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import { ContainerTextArea } from '../TextArea/styles';
var TextAreaForm = function (_a) {
    var textAreaRef = _a.textAreaRef, _b = _a.resizable, resizable = _b === void 0 ? 'both' : _b, props = __rest(_a, ["textAreaRef", "resizable"]);
    var textAreaReference = useRef(null);
    if (textAreaRef)
        textAreaReference = textAreaRef;
    var _c = useField(props.name), fieldName = _c.fieldName, registerField = _c.registerField;
    useEffect(function () {
        registerField({
            name: fieldName,
            ref: textAreaReference,
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
    }, [fieldName, textAreaReference, registerField]);
    return (React.createElement(ContainerTextArea, { className: "textareaform-container " + (props.className || ''), disabled: props.disabled, status: props.status, resizable: resizable },
        props.label && React.createElement(InputLabel, { label: props.label, status: props.status, isRequired: props.required }),
        React.createElement("textarea", __assign({ ref: textAreaReference, className: "textarea-component-tag" }, props), props.children),
        props.error && React.createElement(InputsErrorMessage, { error: props.error })));
};
export { TextAreaForm };
//# sourceMappingURL=index.js.map