var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var AvatarContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: gray;\n  border-radius: 50%;\n  flex-shrink: 0;\n  overflow: hidden;\n  width: ", ";\n  height: ", ";\n\n  img {\n    height: 100%;\n    font-family: cover;\n    object-fit: cover;\n    width: 100%;\n  }\n\n  ", "\n"], ["\n  background: gray;\n  border-radius: 50%;\n  flex-shrink: 0;\n  overflow: hidden;\n  width: ", ";\n  height: ", ";\n\n  img {\n    height: 100%;\n    font-family: cover;\n    object-fit: cover;\n    width: 100%;\n  }\n\n  ", "\n"])), function (_a) {
    var width = _a.width;
    return (width ? width : '50px');
}, function (_a) {
    var height = _a.height;
    return (height ? height : '50px');
}, function (props) { return props.onClick && 'cursor: pointer'; });
var templateObject_1;
//# sourceMappingURL=styles.js.map