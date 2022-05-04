import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { colorGet } from '../../utils';
import { InputsErrorMessageContainer } from './styles';
var InputsErrorMessage = function (props) {
    return (React.createElement(InputsErrorMessageContainer, { className: "error" },
        React.createElement(FiAlertCircle, { color: colorGet('danger', 500) }),
        props.error));
};
export default InputsErrorMessage;
//# sourceMappingURL=inputsErrorMessage.js.map