var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../../shared/utils';
export var ToastCardContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  user-select: none;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.1rem 1rem;\n  height: 80px;\n  max-width: 400px;\n  min-width: 296px;\n  cursor: pointer;\n  background: ", ";\n  border-radius: 4px;\n  color: #fff;\n  box-shadow: 0 0 10px #999;\n\n  ", "\n\n  ", "\n\n\n", "\n\n", "\n\n  .toast-icon {\n    svg {\n      width: 30px;\n      height: 30px;\n    }\n  }\n\n  .toast-text-info {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    max-width: 300px;\n\n    .toast-title {\n      font-size: 18px;\n      font-weight: bold;\n\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .toast-subtitle {\n      font-size: 14px;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n"], ["\n  position: fixed;\n  user-select: none;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.1rem 1rem;\n  height: 80px;\n  max-width: 400px;\n  min-width: 296px;\n  cursor: pointer;\n  background: ", ";\n  border-radius: 4px;\n  color: #fff;\n  box-shadow: 0 0 10px #999;\n\n  ",
    "\n\n  ",
    "\n\n\n",
    "\n\n",
    "\n\n  .toast-icon {\n    svg {\n      width: 30px;\n      height: 30px;\n    }\n  }\n\n  .toast-text-info {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    max-width: 300px;\n\n    .toast-title {\n      font-size: 18px;\n      font-weight: bold;\n\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .toast-subtitle {\n      font-size: 14px;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n"])), function (_a) {
    var status = _a.status;
    return colorGet(status, 500);
}, function (_a) {
    var position = _a.position, shouldShow = _a.shouldShow, myIndexInArray = _a.myIndexInArray, timeToUnmount = _a.timeToUnmount;
    return position === 'top-right' &&
        " \n    top: " + (myIndexInArray * 100 + 10) + "px;\n    right: 12px;\n    transition: transform " + timeToUnmount + "ms ease-in-out;\n    transform: translateX(" + (shouldShow ? '0' : '200%') + ");\n  ";
}, function (_a) {
    var position = _a.position, shouldShow = _a.shouldShow, myIndexInArray = _a.myIndexInArray, timeToUnmount = _a.timeToUnmount;
    return position === 'bottom-right' &&
        " \n    bottom: " + (myIndexInArray * 100 + 10) + "px;\n    right: 12px;\n    transition: transform " + timeToUnmount + "ms ease-in-out;\n    transform: translateX(" + (shouldShow ? '0' : '200%') + ");\n  ";
}, function (_a) {
    var position = _a.position, shouldShow = _a.shouldShow, myIndexInArray = _a.myIndexInArray, timeToUnmount = _a.timeToUnmount;
    return position === 'top-left' &&
        " \n    top: " + (myIndexInArray * 100 + 10) + "px;\n    left: 12px;\n    transition: transform " + timeToUnmount + "ms ease-in-out;\n    transform: translateX(" + (shouldShow ? '0' : '-200%') + ");\n  ";
}, function (_a) {
    var position = _a.position, shouldShow = _a.shouldShow, myIndexInArray = _a.myIndexInArray, timeToUnmount = _a.timeToUnmount;
    return position === 'bottom-left' &&
        " \n    bottom: " + (myIndexInArray * 100 + 10) + "px;\n    left: 12px;\n    transition: transform " + timeToUnmount + "ms ease-in-out;\n    transform: translateX(" + (shouldShow ? '0' : '-200%') + ");\n  ";
});
var templateObject_1;
//# sourceMappingURL=styles.js.map