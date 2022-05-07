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
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import { FiChevronRight } from 'react-icons/fi';
import { SelectContainer } from '../Select/styles';
import { useField } from '@unform/core';
import InputLabel from '../../../shared/components/InputLabel';
var SelectForm = function (_a) {
    var handleOnChange = _a.handleOnChange, props = __rest(_a, ["handleOnChange"]);
    var _b = useState(false), isOpen = _b[0], setOpen = _b[1];
    var _c = useState(props.initialOption), selectedItem = _c[0], setSelectedItem = _c[1];
    var _d = useField(props.name), fieldName = _d.fieldName, registerField = _d.registerField;
    useEffect(function () {
        registerField({
            name: fieldName,
            getValue: function () {
                return selectedItem;
            },
            setValue: function (value) {
                setSelectedItem(value);
            },
            clearValue: function () {
                setSelectedItem(undefined);
            }
        });
    }, [fieldName, registerField, selectedItem]);
    var toggleSelect = useCallback(function () {
        !props.disabled && setOpen(function (oldState) { return !oldState; });
    }, [props.disabled]);
    var handleOptionClick = useCallback(function (option) {
        handleOnChange && handleOnChange(option);
        setSelectedItem(option);
        setOpen(function (oldState) { return !oldState; });
    }, [handleOnChange]);
    var headerText = useMemo(function () {
        if (selectedItem)
            return selectedItem.name;
        if (props.placeholder)
            return props.placeholder;
        return 'Selecione uma Opção';
    }, [props.placeholder, selectedItem]);
    return (React.createElement(SelectContainer, { className: "select-container " + (props.className ? props.className : ''), status: props.status, isOpen: isOpen, disabled: props.disabled, optionsFillSpace: props.optionsFillSpace },
        props.label && React.createElement(InputLabel, { label: props.label, status: props.status, isRequired: props.required }),
        React.createElement("div", { className: "select-dropdown" },
            React.createElement("div", { className: "select-dropdown-header", onClick: toggleSelect },
                headerText,
                React.createElement(FiChevronRight, { color: "#222b45" })),
            isOpen &&
                (props.options.length > 0 ? (React.createElement("div", { className: 'select-dropdown-body' }, props.options.map(function (option, index) { return (React.createElement("div", { key: index, className: "select-dropdown-item", onClick: function () { return handleOptionClick(option); }, id: props.name }, option.name)); }))) : (React.createElement("div", { className: 'select-dropdown-body' }, "Nenhuma op\u00E7\u00E3o dispon\u00EDvel .. ")))),
        props.error && React.createElement(InputsErrorMessage, { error: props.error })));
};
export { SelectForm };
//# sourceMappingURL=index.js.map