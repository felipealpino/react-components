import React, { Fragment, useCallback } from 'react';
import { Button } from '../Button';
import { useToast } from './context/ToastContext';
var ExampleToUse = function () {
    var addToast = useToast().addToast;
    var captalizeFirstLetter = useCallback(function (text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }, []);
    var handleClickButton = useCallback(function (toastStatus, position) {
        var state = {
            title: captalizeFirstLetter(toastStatus) + " Toast",
            subtitle: "This is a beautiful " + captalizeFirstLetter(toastStatus) + " Toast \uD83D\uDE03",
            duration: 4000,
            position: position,
            status: toastStatus
        };
        addToast(state);
    }, [addToast, captalizeFirstLetter]);
    return (React.createElement(Fragment, null,
        React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '10rem' } },
            React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                React.createElement("div", { style: { display: 'flex', gap: '10px' } },
                    React.createElement(Button, { onClick: function () { return handleClickButton('success', 'top-left'); }, status: "success" }, "Success"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('warning', 'top-left'); }, status: "warning" }, "Warning"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('danger', 'top-left'); }, status: "danger" }, "Danger"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('info', 'top-left'); }, status: "info" }, "Information")),
                React.createElement("div", { style: { display: 'flex', gap: '10px', justifySelf: 'flex-end' } },
                    React.createElement(Button, { onClick: function () { return handleClickButton('success', 'top-right'); }, status: "success" }, "Success"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('warning', 'top-right'); }, status: "warning" }, "Warning"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('danger', 'top-right'); }, status: "danger" }, "Danger"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('info', 'top-right'); }, status: "info" }, "Information"))),
            React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                React.createElement("div", { style: { display: 'flex', gap: '10px' } },
                    React.createElement(Button, { onClick: function () { return handleClickButton('success', 'bottom-left'); }, status: "success" }, "Success"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('warning', 'bottom-left'); }, status: "warning" }, "Warning"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('danger', 'bottom-left'); }, status: "danger" }, "Danger"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('info', 'bottom-left'); }, status: "info" }, "Information")),
                React.createElement("div", { style: { display: 'flex', gap: '10px', justifySelf: 'flex-end' } },
                    React.createElement(Button, { onClick: function () { return handleClickButton('success', 'bottom-right'); }, status: "success" }, "Success"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('warning', 'bottom-right'); }, status: "warning" }, "Warning"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('danger', 'bottom-right'); }, status: "danger" }, "Danger"),
                    React.createElement(Button, { onClick: function () { return handleClickButton('info', 'bottom-right'); }, status: "info" }, "Information"))))));
};
export { ExampleToUse };
//# sourceMappingURL=ExampleToUse.js.map