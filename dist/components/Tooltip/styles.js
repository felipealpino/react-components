var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../shared/utils/colorGet';
export var TooltipContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  font-size: 10px;\n  width: fit-content;\n\n  .tooltip-box {\n    position: absolute;\n    font-size: 14px;\n    background: ", ";\n    color: #fff;\n    padding: 5px;\n    border-radius: 5px;\n    display: none;\n    z-index: 4;\n    white-space: nowrap;\n    left: 50%;\n    transform: translateX(-50%);\n\n    /* tooltip show bottom  */\n    ", "\n\n    /* tooltip show top  */\n    ", "\n  }\n\n  .tooltip-box {\n    display: ", ";\n    width: fit-content;\n  }\n\n  .tooltip-arrow {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    border-width: 5px;\n    border-style: solid;\n\n    /* tooltip show bottom  */\n    ", "\n\n    /* tooltip show top  */\n    ", "\n  }\n"], ["\n  position: relative;\n  font-size: 10px;\n  width: fit-content;\n\n  .tooltip-box {\n    position: absolute;\n    font-size: 14px;\n    background: ", ";\n    color: #fff;\n    padding: 5px;\n    border-radius: 5px;\n    display: none;\n    z-index: 4;\n    white-space: nowrap;\n    left: 50%;\n    transform: translateX(-50%);\n\n    /* tooltip show bottom  */\n    ",
    "\n\n    /* tooltip show top  */\n    ",
    "\n  }\n\n  .tooltip-box {\n    display: ", ";\n    width: fit-content;\n  }\n\n  .tooltip-arrow {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    border-width: 5px;\n    border-style: solid;\n\n    /* tooltip show bottom  */\n    ",
    "\n\n    /* tooltip show top  */\n    ",
    "\n  }\n"])), function (_a) {
    var status = _a.status;
    return colorGet(status, 500);
}, function (_a) {
    var position = _a.position;
    return position === 'bottom' &&
        "\n        top: calc(100% + 5px)};\n      ";
}, function (_a) {
    var position = _a.position;
    return position === 'top' &&
        "\n        bottom: calc(100% + 5px)};\n    ";
}, function (_a) {
    var show = _a.show;
    return (show ? 'block' : 'none');
}, function (_a) {
    var position = _a.position, status = _a.status;
    return position === 'bottom' &&
        "\n        top: -10px;\n        border-color: transparent transparent " + colorGet(status, 500) + " transparent;\n    ";
}, function (_a) {
    var position = _a.position, status = _a.status;
    return position === 'top' &&
        "\n        bottom: -10px;\n        border-color: " + colorGet(status, 500) + " transparent transparent  transparent;\n    ";
});
var templateObject_1;
//# sourceMappingURL=styles.js.map