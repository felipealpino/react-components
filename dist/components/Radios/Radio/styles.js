var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { colorGet } from '../../../shared/utils';
export var RadioContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n"])));
export var InputRadio = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  appearance: none;\n  width: ", ";\n  height: ", ";\n  border: 0.2rem solid ", ";\n  border-radius: 50%;\n  background: transparent;\n  transition: 0.2s;\n  transition-property: background, box-shadow;\n  outline: none;\n  cursor: ", ";\n  margin: 0;\n\n  &:hover {\n    box-shadow: ", ";\n  }\n\n  /* &:focus {\n    box-shadow: 0 0 0.5rem ", ";\n  } */\n\n  &:before {\n    content: '';\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background: ", ";\n    transition: opacity 0.2s;\n    opacity: 0;\n    position: absolute;\n  }\n  &:checked {\n    &:before {\n      opacity: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  appearance: none;\n  width: ", ";\n  height: ", ";\n  border: 0.2rem solid ", ";\n  border-radius: 50%;\n  background: transparent;\n  transition: 0.2s;\n  transition-property: background, box-shadow;\n  outline: none;\n  cursor: ", ";\n  margin: 0;\n\n  &:hover {\n    box-shadow: ", ";\n  }\n\n  /* &:focus {\n    box-shadow: 0 0 0.5rem ", ";\n  } */\n\n  &:before {\n    content: '';\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background: ", ";\n    transition: opacity 0.2s;\n    opacity: 0;\n    position: absolute;\n  }\n  &:checked {\n    &:before {\n      opacity: 1;\n    }\n  }\n"])), function (props) { return props.radioSize + "px"; }, function (props) { return props.radioSize + "px"; }, function (props) { return colorGet(props.disabled ? 'basic' : props.status, 500); }, function (props) { return (props.disabled ? 'not-allowed' : 'pointer'); }, function (props) { return (props.disabled ? 'none' : "0 0 0 0.3rem  " + colorGet(props.status, 200)); }, function (props) { return colorGet(props.status, 200); }, function (props) { return (props.radioSize || 30) / 2 + "px"; }, function (props) { return (props.radioSize || 30) / 2 + "px"; }, function (props) { return colorGet(props.disabled ? 'basic' : props.status, 500); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map