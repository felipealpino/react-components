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
import InputLabel from '../../../shared/components/InputLabel';
import { InputRadio, RadioContainer } from './styles';
var Radio = function (_a) {
    var handleOnCheck = _a.handleOnCheck, _b = _a.radioSize, radioSize = _b === void 0 ? 30 : _b, props = __rest(_a, ["handleOnCheck", "radioSize"]);
    var handleOnChange = useCallback(function (event) {
        !!handleOnCheck && handleOnCheck(event);
    }, [handleOnCheck]);
    return (React.createElement(RadioContainer, null,
        React.createElement(InputRadio, { radioSize: radioSize, status: props.status, id: props.id, name: props.name, type: "radio", disabled: props.disabled, 
            // value={value}
            onChange: function (event) { return handleOnChange(event); } }),
        !!props.label && React.createElement(InputLabel, { label: props.label, status: props.disabled ? 'basic' : props.status, isRequired: props.required })));
};
export { Radio };
//# sourceMappingURL=index.js.map