function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Icon = _interopDefault(require('react-eva-icons'));
var styled = _interopDefault(require('styled-components'));
var core = require('@unform/core');

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var colors = {
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  basicContrast: '#222b45',
  primaryContrast: '#fff',
  secondaryContrast: '#fff',
  tertiaryContrast: '#fff',
  quaternaryContrast: '#fff',
  successContrast: '#fff',
  infoContrast: '#fff',
  dangerContrast: '#fff',
  warningContrast: '#fff',
  controlContrast: '#222b45',
  primary100: '#FEEED2',
  primary200: '#FDD9A5',
  primary300: '#FBBE78',
  primary400: '#F8A356',
  primary500: '#F47920',
  primary600: '#D15B17',
  primary700: '#AF4010',
  primary800: '#8D2A0A',
  primary900: '#751B06',
  primaryTransparent100: 'rgba(244, 121, 32, 0.08)',
  primaryTransparent200: 'rgba(244, 121, 32, 0.16)',
  primaryTransparent300: 'rgba(244, 121, 32, 0.24)',
  primaryTransparent400: 'rgba(244, 121, 32, 0.32)',
  primaryTransparent500: 'rgba(244, 121, 32, 0.4)',
  primaryTransparent600: 'rgba(244, 121, 32, 0.48)',
  secondary100: '#C9F3FB',
  secondary200: '#94E2F8',
  secondary300: '#5DC4EA',
  secondary400: '#35A0D6',
  secondary500: '#35A0D6',
  secondary600: '#0058A1',
  secondary700: '#0058A1',
  secondary800: '#002E6D',
  secondary900: '#00215A',
  secondaryTransparent100: 'rgba(52, 197, 208, 0.08)',
  secondaryTransparent200: 'rgba(52, 197, 208, 0.16)',
  secondaryTransparent300: 'rgba(52, 197, 208, 0.24)',
  secondaryTransparent400: 'rgba(52, 197, 208, 0.32)',
  secondaryTransparent500: 'rgba(52, 197, 208, 0.4)',
  secondaryTransparent600: 'rgba(52, 197, 208, 0.48)',
  tertiary100: '#C8FBF2',
  tertiary200: '#94F7EE',
  tertiary300: '#5CE7E6',
  tertiary400: '#34C5D0',
  tertiary500: '#0097B1',
  tertiary600: '#007598',
  tertiary700: '#00587F',
  tertiary800: '#003F66',
  tertiary900: '#002E54',
  tertiaryTransparent100: 'rgba(52, 197, 208, 0.08)',
  tertiaryTransparent200: 'rgba(52, 197, 208, 0.16)',
  tertiaryTransparent300: 'rgba(52, 197, 208, 0.24)',
  tertiaryTransparent400: 'rgba(52, 197, 208, 0.32)',
  tertiaryTransparent500: 'rgba(52, 197, 208, 0.4)',
  tertiaryTransparent600: 'rgba(52, 197, 208, 0.48)',
  quaternary100: '#E9D7F9',
  quaternary200: '#D2B1F4',
  quaternary300: '#AD83DE',
  quaternary400: '#855CBD',
  quaternary500: '#542E91',
  quaternary600: '#41217C',
  quaternary700: '#301768',
  quaternary800: '#210E54',
  quaternary900: '#160845',
  quaternaryTransparent100: 'rgba(133, 92, 189, 0.08)',
  quaternaryTransparent200: 'rgba(133, 92, 189, 0.16)',
  quaternaryTransparent300: 'rgba(133, 92, 189, 0.24)',
  quaternaryTransparent400: 'rgba(133, 92, 189, 0.32)',
  quaternaryTransparent500: 'rgba(133, 92, 189, 0.4)',
  quaternaryTransparent600: 'rgba(133, 92, 189, 0.48)',
  success100: '#f0fff5',
  success200: '#ccfce3',
  success300: '#8cfac7',
  success400: '#2ce69b',
  success500: '#00d68f',
  success600: '#00b887',
  success700: '#00997a',
  success800: '#007d6c',
  success900: '#004a45',
  successTransparent100: 'rgba(0, 214, 143, 0.08)',
  successTransparent200: 'rgba(0, 214, 143, 0.16)',
  successTransparent300: 'rgba(0, 214, 143, 0.24)',
  successTransparent400: 'rgba(0, 214, 143, 0.32)',
  successTransparent500: 'rgba(0, 214, 143, 0.4)',
  successTransparent600: 'rgba(0, 214, 143, 0.48)',
  info100: '#f2f8ff',
  info200: '#c7e2ff',
  info300: '#94cbff',
  info400: '#42aaff',
  info500: '#0095ff',
  info600: '#006fd6',
  info700: '#0057c2',
  info800: '#0041a8',
  info900: '#002885',
  infoTransparent100: 'rgba(0, 149, 255, 0.08)',
  infoTransparent200: 'rgba(0, 149, 255, 0.16)',
  infoTransparent300: 'rgba(0, 149, 255, 0.24)',
  infoTransparent400: 'rgba(0, 149, 255, 0.32)',
  infoTransparent500: 'rgba(0, 149, 255, 0.4)',
  infoTransparent600: 'rgba(0, 149, 255, 0.48)',
  warning100: '#fffdf2',
  warning200: '#fff1c2',
  warning300: '#ffe59e',
  warning400: '#ffc94d',
  warning500: '#ffaa00',
  warning600: '#db8b00',
  warning700: '#b86e00',
  warning800: '#945400',
  warning900: '#703c00',
  warningTransparent100: 'rgba(255, 170, 0, 0.08)',
  warningTransparent200: 'rgba(255, 170, 0, 0.16)',
  warningTransparent300: 'rgba(255, 170, 0, 0.24)',
  warningTransparent400: 'rgba(255, 170, 0, 0.32)',
  warningTransparent500: 'rgba(255, 170, 0, 0.4)',
  warningTransparent600: 'rgba(255, 170, 0, 0.48)',
  danger100: '#fff2f2',
  danger200: '#ffd6d9',
  danger300: '#ffa8b4',
  danger400: '#ff708d',
  danger500: '#ff3d71',
  danger600: '#db2c66',
  danger700: '#b81d5b',
  danger800: '#94124e',
  danger900: '#700940',
  dangerTransparent100: 'rgba(255, 61, 113, 0.08)',
  dangerTransparent200: 'rgba(255, 61, 113, 0.16)',
  dangerTransparent300: 'rgba(255, 61, 113, 0.24)',
  dangerTransparent400: 'rgba(255, 61, 113, 0.32)',
  dangerTransparent500: 'rgba(255, 61, 113, 0.4)',
  dangerTransparent600: 'rgba(255, 61, 113, 0.48)',
  basic100: '#ffffff',
  basic200: '#f7f9fc',
  basic300: '#edf1f7',
  basic400: '#e4e9f2',
  basic500: '#c5cee0',
  basic600: '#8f9bb3',
  basic700: '#2e3a59',
  basic800: '#222b45',
  basic900: '#192038',
  basic1000: '#1b1b38',
  basic1100: '#13132b',
  basicTransparent100: 'rgba(143, 155, 179, 0.08)',
  basicTransparent200: 'rgba(143, 155, 179, 0.16)',
  basicTransparent300: 'rgba(143, 155, 179, 0.24)',
  basicTransparent400: 'rgba(143, 155, 179, 0.32)',
  basicTransparent500: 'rgba(143, 155, 179, 0.4)',
  basicTransparent600: 'rgba(143, 155, 179, 0.48)',
  control500: '#fff',
  controlTransparent100: 'rgba(255, 255, 255, 0.08)',
  controlTransparent200: 'rgba(255, 255, 255, 0.16)',
  controlTransparent300: 'rgba(255, 255, 255, 0.24)',
  controlTransparent400: 'rgba(255, 255, 255, 0.32)',
  controlTransparent500: 'rgba(255, 255, 255, 0.4)',
  controlTransparent600: 'rgba(255, 255, 255, 0.48)'
};

var colorGet = function colorGet(status, statusComplement) {
  if (status === void 0) {
    status = 'primary';
  }

  if (statusComplement === void 0) {
    statusComplement = '';
  }

  return "" + colors["" + status + statusComplement];
};

var _templateObject;
var ContainerPagination = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n  ", "\n\n  .pagination-content {\n    display: flex;\n\n    span {\n      margin: auto;\n      font-weight: 700;\n    }\n\n    .pagination-content-icon {\n      cursor: pointer;\n      margin: 0px 10px;\n      transition: background-color 0.1s ease-in-out;\n      background-color: ", ";\n      border-radius: ", ";\n\n      i {\n        display: flex;\n        align-items: center;\n        transition: 0.1s ease-in-out;\n\n        svg {\n          width: 25px;\n          height: 25px;\n          fill: ", ";\n        }\n      }\n\n      &:hover {\n        background-color: ", ";\n\n        i svg {\n          fill: ", ";\n        }\n      }\n    }\n  }\n"])), function (_ref) {
  var fixed = _ref.fixed;
  return fixed && 'position: absolute; bottom: 35px; left: 0;';
}, function (_ref2) {
  var status = _ref2.status;
  return colorGet(status, 500);
}, function (_ref3) {
  var rounded = _ref3.rounded;
  return rounded ? '15px' : '4px';
}, function (_ref4) {
  var status = _ref4.status;
  return colorGet(status, 'Contrast');
}, function (_ref5) {
  var status = _ref5.status;
  return colorGet(status, 600);
}, function (_ref6) {
  var status = _ref6.status;
  return colorGet(status, 'Contrast');
});

var _excluded = ["rounded"];

var Pagination = function Pagination(_ref) {
  var _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? true : _ref$rounded,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var changePage = React.useCallback(function (action) {
    if (action === 'forward') {
      var newPage = Number(props.currentPage) + 1;
      if (newPage >= props.totalOfPages) return;
      props.callbackGetListData('', newPage, props.option);
    }

    if (action === 'back') {
      var _newPage = Number(props.currentPage) - 1;

      if (_newPage < 0) return;
      props.callbackGetListData('', _newPage, props.option);
    }
  }, [props.totalOfPages, props.currentPage, props.callbackGetListData, props.option]);
  return React__default.createElement(ContainerPagination, Object.assign({}, props, {
    rounded: rounded,
    status: props.status,
    className: "pagination-container " + props.className
  }), React__default.createElement("div", {
    className: 'pagination-content'
  }, React__default.createElement("label", {
    className: 'pagination-content-icon',
    onClick: function onClick() {
      return changePage('back');
    }
  }, React__default.createElement(Icon, {
    name: 'arrow-ios-back',
    fill: 'white'
  })), React__default.createElement("span", {
    className: 'pagination-content-text'
  }, "P\xE1gina ", Number(props.currentPage) + 1, " de ", props.totalOfPages > 0 ? props.totalOfPages : 1), React__default.createElement("label", {
    className: 'pagination-content-icon',
    onClick: function onClick() {
      return changePage('forward');
    }
  }, React__default.createElement(Icon, {
    name: 'arrow-ios-forward',
    fill: 'white'
  }))));
};

var _templateObject$1;
var SwipeToggleContainer = styled.label(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider {\n    position: absolute;\n    cursor: ", ";\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ", ";\n    border: ", ";\n    border-radius: ", ";\n    transition: 0.6s ease all;\n  }\n\n  .center-ball {\n    position: absolute;\n    content: '';\n    height: 28px;\n    width: 28px;\n    background-color: white;\n    transition: 0.4s;\n    border-radius: ", ";\n    margin: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    label {\n      cursor: ", ";\n    }\n\n    ", ";\n    ", ";\n    ", ";\n\n    i {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      svg {\n        fill: ", ";\n      }\n    }\n\n    .animated-icon-div {\n      width: 18px;\n      height: 18px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: 0.4;\n\n      .animated-icon {\n        background-color: ", ";\n        height: 1.5px;\n        width: 12px;\n        border-radius: 8px;\n        transform: ", ";\n        position: absolute;\n        right: ", ";\n        transition: 0.4s;\n\n        &::after {\n          content: '';\n          background-color: ", ";\n          position: absolute;\n          height: 1.5px;\n          width: ", ";\n          border-radius: ", ";\n          transform: rotate(90deg);\n          left: ", ";\n          bottom: ", ";\n          transition: 0.4s;\n        }\n      }\n    }\n  }\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref2) {
  var statusCheck = _ref2.statusCheck,
      status = _ref2.status,
      outline = _ref2.outline;
  return statusCheck && !outline ? colorGet(status, 500) : statusCheck && outline ? colorGet(status, 400) : 'rgba(143, 155, 179, 0.16)';
}, function (_ref3) {
  var statusCheck = _ref3.statusCheck,
      status = _ref3.status,
      outline = _ref3.outline;
  return statusCheck && !outline ? "1px solid " + colorGet(status, 500) : statusCheck && outline ? "1px solid " + colorGet(status, 600) : '1px solid rgba(143, 155, 179, 1)';
}, function (_ref4) {
  var rounded = _ref4.rounded;
  return rounded ? '100px' : '4px';
}, function (_ref5) {
  var rounded = _ref5.rounded;
  return rounded ? '100px' : '4px';
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref7) {
  var statusCheck = _ref7.statusCheck;
  return statusCheck && '-webkit-transform: translateX(20px)';
}, function (_ref8) {
  var statusCheck = _ref8.statusCheck;
  return statusCheck && ' -ms-transform: translateX(20px)';
}, function (_ref9) {
  var statusCheck = _ref9.statusCheck;
  return statusCheck && 'transform: translateX(20px)';
}, function (_ref10) {
  var status = _ref10.status,
      statusCheck = _ref10.statusCheck;
  return statusCheck ? colorGet(status, 500) : colorGet('danger', 500);
}, function (_ref11) {
  var status = _ref11.status,
      statusCheck = _ref11.statusCheck;
  return statusCheck ? colorGet(status, 500) : colorGet('danger', '500');
}, function (_ref12) {
  var statusCheck = _ref12.statusCheck;
  return statusCheck ? 'rotate(-45deg)' : 'rotate(45deg)';
}, function (_ref13) {
  var statusCheck = _ref13.statusCheck;
  return statusCheck ? '0px' : 'unset';
}, function (_ref14) {
  var statusCheck = _ref14.statusCheck,
      status = _ref14.status;
  return statusCheck ? colorGet(status, 500) : colorGet('danger', '500');
}, function (_ref15) {
  var statusCheck = _ref15.statusCheck;
  return statusCheck ? '6px' : '12px';
}, function (_ref16) {
  var statusCheck = _ref16.statusCheck;
  return statusCheck ? '8px 0px 0px 8px' : '8px';
}, function (_ref17) {
  var statusCheck = _ref17.statusCheck;
  return statusCheck ? '-2.2px' : 'unset';
}, function (_ref18) {
  var statusCheck = _ref18.statusCheck;
  return statusCheck ? '3px' : 'unset';
});

var SwipeToggle = function SwipeToggle(props) {
  var _useState = React.useState(false),
      statusCheck = _useState[0],
      setStatusCheck = _useState[1];

  var inputRef = React.useRef(null);
  var handleChangeInput = React.useCallback(function () {
    if (props.handleOnChange) props.handleOnChange(statusCheck);
  }, [props.handleOnChange, statusCheck]);
  React.useEffect(function () {
    setStatusCheck(props.isChecked || false);
  }, [props.isChecked]);
  return React__default.createElement(SwipeToggleContainer, Object.assign({}, props, {
    className: "swipe-toggle-container " + (props.className || ''),
    statusCheck: statusCheck
  }), React__default.createElement("input", {
    type: 'checkbox',
    ref: inputRef,
    onChange: handleChangeInput
  }), React__default.createElement("span", {
    className: 'slider',
    onClick: function onClick() {
      return !props.disabled && setStatusCheck(!statusCheck);
    }
  }, React__default.createElement("div", {
    className: 'center-ball'
  }, props.animatedIcon && React__default.createElement("div", {
    className: 'animated-icon-div'
  }, React__default.createElement("div", {
    className: 'animated-icon'
  })), statusCheck && React__default.createElement("label", null, props.iconNameEnabled && React__default.createElement(Icon, {
    name: props.iconNameEnabled,
    fill: ''
  }), " "), !statusCheck && React__default.createElement("label", null, props.iconNameDisabled && React__default.createElement(Icon, {
    name: props.iconNameDisabled,
    fill: ''
  })))));
};

var _templateObject$2;
var InputContainer = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  color: #2e3a59;\n  font-family: 'Open Sans', sans-serif;\n\n  .input-label {\n    font-size: 14px;\n    font-weight: 500;\n    white-space: nowrap;\n    line-height: 30px;\n    color: ", ";\n    text-transform: unset;\n    margin: 4px 0px;\n    letter-spacing: 0px;\n    font-size: 14px;\n    font-weight: 700;\n    user-select: none;\n    pointer-events: none;\n\n    .mandatory-star {\n      color: ", ";\n      font-size: 14px;\n      margin-left: 3px;\n    }\n  }\n\n  .container-input-icon {\n    position: relative;\n  }\n\n  input {\n    width: 100%;\n    height: 40px;\n    outline: none;\n    font-size: 15px;\n    font-weight: 500;\n    padding: 0.4375rem 1rem;\n    border-radius: 4px;\n    border: 1px solid ", ";\n    background: #f7f9fc;\n    transition: 0.1s ease-in-out;\n    transition-property: border;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n  }\n\n  input:focus {\n    border: 1px solid ", ";\n  }\n\n  input:disabled {\n    cursor: not-allowed;\n  }\n\n  .error {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 600;\n  }\n\n  .icon {\n    position: absolute;\n    margin-top: auto;\n    margin-left: auto;\n    margin-bottom: auto;\n    text-align: center;\n    right: 0;\n    top: 0;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    aspect-ratio: 1;\n    i {\n      display: flex;\n      svg {\n        width: 23px;\n        height: 23px;\n      }\n    }\n  }\n"])), function (_ref) {
  var status = _ref.status;
  return "" + colorGet(status, 500);
}, colorGet('danger', 500), function (_ref2) {
  var status = _ref2.status,
      error = _ref2.error;
  return "" + colorGet(error ? 'danger' : status, 400);
}, function (_ref3) {
  var status = _ref3.status;
  return colorGet(status, 600);
}, colorGet('danger', 600));

var Input = function Input(props) {
  return React__default.createElement(InputContainer, Object.assign({}, props, {
    className: "input-container " + (props.className || '')
  }), React__default.createElement("label", {
    className: 'input-label'
  }, props.label, props.mandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), React__default.createElement("div", {
    className: 'container-input-icon'
  }, React__default.createElement("input", Object.assign({}, props)), props.icon && React__default.createElement("div", {
    className: 'icon'
  }, React__default.createElement(Icon, {
    name: props.icon.name,
    fill: props.icon.fill
  }))), React__default.createElement("label", {
    className: 'error'
  }, props.error));
};

function masker(val, mask) {
  var k = 0;
  var maskared = '';

  for (var i = 0; i <= mask.length - 1; ++i) {
    if (mask[i] == '#') {
      if (val[k]) {
        maskared += val[k++];
      }
    } else if (mask[i]) {
      maskared += mask[i];
    }
  }

  return maskared;
}

var _excluded$1 = ["inputRef", "mask", "onChange"];

var InputForm = function InputForm(_ref) {
  var inputRef = _ref.inputRef,
      mask = _ref.mask,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var inputReference = React.useRef(null);
  if (inputRef) inputReference = inputRef;

  var _useField = core.useField(props.name),
      fieldName = _useField.fieldName,
      registerField = _useField.registerField;

  React.useEffect(function () {
    registerField({
      name: fieldName,
      ref: inputReference,
      getValue: function getValue(ref) {
        return ref.current.value;
      },
      setValue: function setValue(ref, value) {
        ref.current.value = value;
      },
      clearValue: function clearValue(ref) {
        ref.current.value = '';
      }
    });
  }, [fieldName, inputReference, registerField]);
  var handleChange = React.useCallback(function (ev) {
    if (mask && ev.nativeEvent.inputType !== 'deleteContentBackward') {
      ev.target.value = masker(ev.target.value.replace(/[^a-zA-Z0-9]/g, ''), mask);
    }

    if (onChange) {
      onChange(ev);
    }
  }, [mask, onChange]);
  return React__default.createElement(InputContainer, Object.assign({}, props, {
    className: "input-container " + (props.className || '')
  }), React__default.createElement("label", {
    className: 'input-label'
  }, props.label, props.mandatory && React__default.createElement("span", {
    className: 'mandatory-star'
  }, "*")), React__default.createElement("div", {
    className: 'container-input-icon'
  }, React__default.createElement("input", Object.assign({
    id: fieldName,
    ref: inputReference,
    onChange: handleChange
  }, props)), props.icon && React__default.createElement("div", {
    className: 'icon'
  }, React__default.createElement(Icon, {
    name: props.icon.name,
    fill: props.icon.fill
  }))), React__default.createElement("label", {
    className: 'error'
  }, props.error));
};

var _templateObject$3;
var ContainerTextArea = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: relative;\n\n  textarea {\n    width: 100%;\n    box-sizing: border-box;\n    height: 32px;\n    border-radius: 4px;\n    border: 1px solid var(--black);\n    outline: none;\n  }\n\n  label {\n    width: inherit;\n    font-size: 12px;\n    display: flex;\n    font-weight: 700;\n    text-transform: uppercase;\n    white-space: nowrap;\n\n    .mandatory-star {\n      color: var(--main-danger-color);\n      font-size: 14px;\n      margin-left: 3px;\n    }\n  }\n\n  span {\n    display: block;\n    color: var(--main-danger-color);\n    font-size: 11px;\n  }\n"])));

var _templateObject$4;
var SelectContainer = styled.div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: relative;\n\n  select {\n    width: 100%;\n    box-sizing: border-box;\n    height: 32px;\n    border-radius: 4px;\n    border: 1px solid var(--black);\n    outline: none;\n    transition: 0.1s ease-in-out border;\n\n    :focus {\n      border: 3px solid var(--main-azul-anil-logo);\n    }\n  }\n\n  label {\n    width: inherit;\n    font-size: 12px;\n    display: flex;\n    font-weight: 700;\n    text-transform: uppercase;\n    white-space: nowrap;\n    \n    .mandatory-star {\n      color: var(--main-danger-color);\n      font-size: 14px;\n      margin-left: 3px;\n    }\n  }\n\n  span {\n    display: block;\n    color: var(--main-danger-color);\n    font-size: 11px;\n  }\n"])));

var _templateObject$5;
var TooltipContainer = styled.div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n  .tooltip-container {\n    position: relative;\n    font-size: 10px;\n  }\n  .tooltip-box {\n    position: absolute;\n    background: rgba(0,0,0,0.8);\n    color: #fff;\n    padding: 5px;\n    border-radius: 5px;\n    top: calc(100% + 5px);\n    display: none;\n    z-index: 4;\n    white-space: nowrap;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .tooltip-box.visible {\n    display: block;\n    width: fit-content;\n  }\n  .tooltip-arrow {\n    position: absolute;\n    top: -10px;\n    left: 50%;\n    transform: translateX(-50%);\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent rgba(0, 0, 0, 0.8) transparent;\n  }\n"])));

var _templateObject$6;
var ButtonContainer = styled.button(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  color: #ffffff;\n  padding: 10px 15px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: 0.1s ease-in-out;\n  transition-property: background;\n  /* filter: drop-shadow(0px 2px 9px rgba(0, 0, 0, 0.14)); */\n  \n  background: ", ";\n  cursor: ", ";\n  border: 2px solid ", ";\n  opacity: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n\n  i {\n    display: flex;\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (_ref) {
  var status = _ref.status;
  return colorGet(status, 500);
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref3) {
  var status = _ref3.status;
  return colorGet(status, 600);
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return !disabled ? '1' : '0.6';
}, function (_ref5) {
  var status = _ref5.status;
  return colorGet(status, 600);
});

var Button = function Button(props) {
  return React__default.createElement(ButtonContainer, Object.assign({}, props, {
    className: "button-container " + (props.className || '')
  }), props.children);
};

var formElements = {
  input: {
    padding: '16px',
    floatingLabel: 'translate(-10px, -40px) scale(0.75)'
  },
  inputs: {
    tiny: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: '1rem',
      placeholderFontSize: '0.9375rem',
      placeholderFontWeight: 400,
      placeholderLineHeight: '1.25rem',
      padding: '0.1875rem 1rem',
      maxWidht: '20rem'
    },
    small: {
      fontSize: '0.8125rem',
      fontWeight: 600,
      lineHeight: '1.5rem',
      placeholderFontSize: '0.9375rem',
      placeholderFontWeight: 400,
      placeholderLineHeight: '1.25rem',
      padding: '0.1875rem 1rem',
      maxWidht: '20rem'
    },
    medium: {
      fontSize: '0.9375rem',
      fontWeight: 600,
      lineHeight: '1.5rem',
      placeholderFontSize: '0.9375rem',
      placeholderFontWeight: 400,
      placeholderLineHeight: '1.25rem',
      padding: '0.4375rem 1rem',
      maxWidht: '20rem'
    },
    large: {
      fontSize: '0.9375rem',
      fontWeight: 600,
      lineHeight: '1.5rem',
      placeholderFontSize: '0.9375rem',
      placeholderFontWeight: 400,
      placeholderLineHeight: '1.25rem',
      padding: '0.6875rem 1rem',
      maxWidht: '30rem'
    },
    giant: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
      placeholderFontSize: '0.9375rem',
      placeholderFontWeight: 400,
      placeholderLineHeight: '1.25rem',
      padding: '0.9375rem 1rem',
      maxWidht: '30rem'
    }
  },
  checkbox: {
    border: 'none',
    borderRadius: '0',
    sizes: {
      small: {
        checkmark: '10px',
        height: '20px',
        width: '20px'
      },
      medium: {
        checkmark: '15px',
        height: '25px',
        width: '25px'
      },
      large: {
        checkmark: '20px',
        height: '30px',
        width: '30px'
      }
    }
  },
  fileInput: {
    backgroundColor: '#3880ff',
    color: '#fff'
  },
  radio: {
    border: 'none',
    borderRadius: '50px',
    sizes: {
      small: {
        innerCircle: '8px',
        height: '20px',
        width: '20px'
      },
      medium: {
        innerCircle: '13px',
        height: '25px',
        width: '25px'
      },
      large: {
        innerCircle: '18px',
        height: '30px',
        width: '30px'
      }
    }
  }
};

var fonts = {
  body: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '0.9375rem',
    color: colors.basic1000,
    fontWeight: 400,
    lineHeight: '3rem'
  },
  h1: {
    fontFamily: 'inherit',
    fontSize: '2.25rem',
    fontWeight: 400,
    lineHeight: '1.25rem'
  },
  h2: {
    fontFamily: 'inherit',
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: '2.5rem'
  },
  h3: {
    fontFamily: 'inherit',
    fontSize: '1.875rem',
    fontWeight: 700,
    lineHeight: '2.5rem'
  },
  h4: {
    fontFamily: 'inherit',
    fontSize: '1.625rem',
    fontWeight: 700,
    lineHeight: '2rem'
  },
  h5: {
    fontFamily: 'inherit',
    fontSize: '1.375rem',
    fontWeight: 700,
    lineHeight: '2rem'
  },
  h6: {
    fontFamily: 'inherit',
    fontSize: '1.125rem',
    fontWeight: 700,
    lineHeight: '1.5em'
  },
  p: {
    fontFamily: 'inherit',
    fontSize: '0.9375rem',
    fontWeight: 400,
    lineHeight: '1.25rem'
  },
  a: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    color: colors.primary500
  },
  label: {
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1rem'
  },
  caption: {
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1rem'
  },
  li: {
    fontFamily: 'inherit',
    fontSize: '0.9375rem',
    color: colors.basic100,
    fontWeight: 400,
    lineHeight: '1.25rem'
  }
};
var fontWeights = {
  light: 300,
  normal: 400,
  bold: 600
};

var breakpoints = ['480px', '768px', '1024px', '1280px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
var media = {
  sm: "@media (min-width: " + breakpoints.sm + ")",
  md: "@media (min-width: " + breakpoints.md + ")",
  lg: "@media (min-width: " + breakpoints.lg + ")",
  xl: "@media (min-width: " + breakpoints.xl + ")"
};

var theme = {
  colors: colors,
  fonts: fonts,
  fontWeights: fontWeights,
  formElements: formElements,
  breakpoints: breakpoints,
  media: media,
  siteMaxWidth: '1440px',
  maxWidths: {
    sm: '544px',
    md: '768px',
    lg: '1012px',
    xl: '1280px'
  },
  gridColumns: 12,
  borders: [0, '1px solid'],
  radii: ['0', '3px', '6px'],
  shadows: {
    sm: '0 1px 1px rgba(27, 31, 35, 0.1)',
    md: '0 1px 5px rgba(27, 31, 35, 0.15)',
    lg: '0 1px 15px rgba(27, 31, 35, 0.15)',
    xl: '0 10px 50px rgba(27, 31, 35, 0.07)'
  },
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
  accordionSizes: {
    tiny: {
      minHeight: "2.5rem"
    },
    small: {
      minHeight: "3.5rem"
    },
    medium: {
      minHeight: "4.5rem"
    },
    large: {
      minHeight: "5.5rem"
    },
    giant: {
      minHeight: "6.5rem"
    }
  },
  buttonSizes: {
    tiny: {
      fontSize: "0.625rem",
      lineHeight: "0.75rem",
      padding: "0.3125rem 0.625rem"
    },
    small: {
      fontSize: "0.75rem",
      lineHeight: "1rem",
      padding: "0.4375rem 0.875rem"
    },
    medium: {
      fontSize: "0.875rem",
      lineHeight: "1rem",
      padding: "0.6875rem 1.125rem"
    },
    large: {
      fontSize: "1rem",
      lineHeight: "1.25rem",
      padding: "0.8125rem 1.125rem"
    },
    giant: {
      fontSize: "1.125rem",
      lineHeight: "1.5rem",
      padding: "0.9375rem 1.375rem"
    }
  },
  cardSizes: {
    tiny: {
      height: "13.5rem"
    },
    small: {
      height: "21.1875rem"
    },
    medium: {
      height: "28.875rem"
    },
    large: {
      height: "36.5625rem"
    },
    giant: {
      height: "44.25rem"
    }
  },
  spinnerSizes: {
    tiny: {
      fontSize: "1rem"
    },
    small: {
      fontSize: "1.25rem"
    },
    medium: {
      fontSize: "1.5rem"
    },
    large: {
      fontSize: "1.75rem"
    },
    giant: {
      fontSize: "2rem"
    }
  },
  modalSizes: {
    sm: {
      height: "270px",
      maxHeight: '90vh',
      maxWidth: '90vw',
      width: "480px"
    },
    md: {
      height: "360px",
      maxHeight: '90vh',
      maxWidth: '90vw',
      width: "640px"
    },
    lg: {
      height: "90vh",
      width: "90vw"
    }
  },
  wysiwyg: {
    maxWidth: '720px',
    tightness: {
      tight: {
        lineHeight: 1.2
      },
      "default": {
        lineHeight: 1.9
      },
      loose: {
        lineHeight: 2.5
      }
    }
  }
};

function getBackgroundColor(status) {
  if (!status) {
    return colors.primary500;
  }

  var color = status + "500";
  return colors[color] ? "" + colors[color] : colors.primary500;
}

function getContrastColor(status) {
  if (!status) {
    return colors.primaryContrast;
  }

  var color = status + "Contrast";
  return colors[color] ? "" + colors[color] : colors.primaryContrast;
}

function getValidationErrors(err) {
  var validationErrors = {};
  err.inner.forEach(function (error) {
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
}

var formatDate = function formatDate(date, typeMonth) {
  return new Date(date).toLocaleDateString('pt-br', {
    year: 'numeric',
    month: typeMonth,
    day: 'numeric',
    timeZone: 'UTC'
  });
};

exports.BaseTheme = theme;
exports.Button = Button;
exports.Input = Input;
exports.InputForm = InputForm;
exports.Pagination = Pagination;
exports.SwipeToggle = SwipeToggle;
exports.formatDate = formatDate;
exports.getBackgroundColor = getBackgroundColor;
exports.getContrastColor = getContrastColor;
exports.getValidationErrors = getValidationErrors;
exports.masker = masker;
//# sourceMappingURL=index.js.map
