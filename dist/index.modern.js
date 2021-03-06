import React, { useState, useCallback, useEffect, useMemo, Fragment, useRef, useContext } from 'react';
import styled__default, { createGlobalStyle as createGlobalStyle$1, css as css$1, withTheme as withTheme$1, ServerStyleSheet as ServerStyleSheet$1, ThemeProvider as ThemeProvider$2 } from 'styled-components';
import { FiXCircle, FiChevronDown, FiAlertCircle, FiCheck, FiChevronLeft, FiChevronRight, FiCheckCircle, FiAlertTriangle, FiInfo, FiXOctagon } from 'react-icons/fi';
import { useField } from '@unform/core';
import { v4 } from 'uuid';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
  dark100: '#E1E1E6',
  dark200: '#C4C4CC',
  dark300: '#8D8D99',
  dark400: '#7C7C8A',
  dark500: '#505059',
  dark600: '#323238',
  dark700: '#29292E',
  dark800: '#202024',
  dark900: '#121214',
  dark1000: '#09090A'
};

var colorGet = function colorGet(status, statusComplement, isTransparent) {
  if (status === void 0) {
    status = 'primary';
  }

  if (statusComplement === void 0) {
    statusComplement = '';
  }

  return "" + colors["" + status + (isTransparent ? 'Transparent' : '') + statusComplement];
};

var _templateObject;
var AccordionContainer = styled__default.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  background: ", ";\n  min-height: 3rem;\n  width: inherit;\n\n  .accordion-header {\n    padding: 0.7rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: ", ";\n  }\n\n  .accordion-info-text {\n    > label {\n      cursor: inherit;\n    }\n  }\n\n  .accordion-icon {\n    transition: 0.2s ease-in-out;\n    transition-property: transform;\n    transform: ", ";\n    display: flex;\n    \n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n\n  .accordion-content {\n    overflow: hidden;\n    background: #ffffff;\n    padding: ", ";\n    max-height: ", ";\n    transition-property: max-height, padding;\n    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n    transition-duration: 500ms;\n    .accordion-childrens {\n      transition-duration: 300ms;\n      transition-property: visibility, opacity;\n      opacity: ", ";\n      visibility: ", ";\n    }\n  }\n"])), function (_ref) {
  var status = _ref.status;
  return colorGet(status, 400);
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref3) {
  var isOpen = _ref3.isOpen;
  return "rotate(" + (isOpen ? '-180deg' : '0deg') + ")";
}, function (_ref4) {
  var isOpen = _ref4.isOpen;
  return isOpen ? '1rem 0.7rem' : '0rem 0.7rem';
}, function (_ref5) {
  var isOpen = _ref5.isOpen;
  return isOpen ? '1000px' : '0px';
}, function (_ref6) {
  var isOpen = _ref6.isOpen;
  return isOpen ? '1' : '0';
}, function (_ref7) {
  var isOpen = _ref7.isOpen;
  return isOpen ? 'visible' : 'hidden';
});

var _excluded = ["status"];

var Accordion = function Accordion(_ref) {
  var _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'basic' : _ref$status,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var handleOpen = useCallback(function () {
    setIsOpen(function (oldState) {
      return !oldState;
    });
    props.handleSetCurrent && props.handleSetCurrent(Number(props.index));
  }, []);
  useEffect(function () {
    if ((props.accordionCurent || props.accordionCurent == 0) && props.accordionCurent != props.index) {
      setIsOpen(false);
    }
  }, [props.accordionCurent]);
  return React.createElement(AccordionContainer, Object.assign({}, props, {
    status: status,
    isOpen: isOpen,
    className: "accordion-container " + (props.className || '')
  }), React.createElement("div", {
    className: 'accordion-header',
    onClick: function onClick() {
      return !props.disabled && handleOpen();
    }
  }, React.createElement("div", {
    className: 'accordion-info-text'
  }, React.createElement("label", null, props.title)), props.disabled && React.createElement("div", {
    className: 'accordion-icon'
  }, React.createElement(FiXCircle, {
    color: '#11182F'
  })), !props.disabled && React.createElement("div", {
    className: 'accordion-icon'
  }, React.createElement(FiChevronDown, {
    color: '#11182F'
  }))), props.children && React.createElement("div", {
    className: 'accordion-content'
  }, React.createElement("div", {
    className: 'accordion-childrens'
  }, props.children)));
};

var _templateObject$1;
var AccordionsContainer = styled__default.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n"])), function (_ref) {
  var gap = _ref.gap;
  return gap;
});

var _excluded$1 = ["gap"];

var Accordions = function Accordions(_ref) {
  var _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? '0px' : _ref$gap,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var _useState = useState(0),
      accordionCurent = _useState[0],
      setAccrodionCurrent = _useState[1];

  var handleSetCurrent = useCallback(function (index) {
    setAccrodionCurrent(index);
  }, []);
  var getChildren = useMemo(function () {
    var accordions = props.children;
    var newAccordions;

    if (accordions.length <= 1) {
      newAccordions = [].concat(accordions);
      return newAccordions;
    }

    newAccordions = accordions.map(function (accordion, index) {
      return _extends({}, accordion, {
        props: _extends({
          index: index,
          handleSetCurrent: handleSetCurrent,
          accordionCurent: accordionCurent
        }, accordion.props)
      });
    });
    return newAccordions;
  }, [accordionCurent, props.children]);
  return React.createElement(AccordionsContainer, Object.assign({}, props, {
    gap: gap,
    className: 'accordions-list'
  }), getChildren);
};

var _templateObject$2;
var AvatarContainer = styled__default.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  background: gray;\n  border-radius: 50%;\n  flex-shrink: 0;\n  overflow: hidden;\n  width: ", ";\n  height: ", ";\n\n  img {\n    height: 100%;\n    font-family: cover;\n    object-fit: cover;\n    width: 100%;\n  }\n\n  ", "\n"])), function (_ref) {
  var width = _ref.width;
  return width ? width : '50px';
}, function (_ref2) {
  var height = _ref2.height;
  return height ? height : '50px';
}, function (props) {
  return props.onClick && "cursor: pointer";
});

var Avatar = function Avatar(props) {
  return React.createElement(AvatarContainer, Object.assign({}, props), React.createElement("img", {
    src: props.image,
    alt: 'avatar'
  }));
};

var removeDuplicatesFromArray = function removeDuplicatesFromArray(arrayWithDuplicatedItens) {
  return [].concat(new Set(arrayWithDuplicatedItens.map(function (s) {
    return JSON.stringify(s);
  }))).map(function (s) {
    return JSON.parse(s);
  });
};

var errorMessageBuilder = function errorMessageBuilder(inputName, errors) {
  var found = errors.find(function (error) {
    return error.name === inputName;
  });
  if (found) return found.message;
  return undefined;
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

function getContrastColor(status) {
  if (!status) {
    return colors.primaryContrast;
  }

  var color = status + "Contrast";
  return colors[color] ? "" + colors[color] : colors.primaryContrast;
}

var deleteObjectKeys = function deleteObjectKeys(obj, keys) {
  keys.forEach(function (key) {
    return delete obj[key];
  });
  return obj;
};

var combineContext = function combineContext() {
  for (var _len = arguments.length, components = new Array(_len), _key = 0; _key < _len; _key++) {
    components[_key] = arguments[_key];
  }

  return components.reduce(function (AccumulatedComponents, CurrentComponent) {
    return function (_ref) {
      var children = _ref.children;
      return React.createElement(AccumulatedComponents, null, React.createElement(CurrentComponent, null, children));
    };
  }, function (_ref2) {
    var children = _ref2.children;
    return React.createElement(Fragment, null, children);
  });
};

var objectToQuery = function objectToQuery(obj, shouldStringfy) {
  var str = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
      if (shouldStringfy) str.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(obj[key])));else str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return str.join('&');
};

var calcAge = function calcAge(birthdate) {
  var age = Math.floor((Date.now() - +new Date("" + birthdate.split('-').join('/'))) / 31557600000);
  if (isNaN(age) || age < 0) return '';
  return age;
};

var formatDate = function formatDate(date, typeMonth) {
  return new Date(date).toLocaleDateString('pt-br', {
    year: 'numeric',
    month: typeMonth,
    day: 'numeric',
    timeZone: 'UTC'
  });
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

var _templateObject$3;
var BaseStyles = createGlobalStyle$1(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  *, *::before, *::after {\n    box-sizing: inherit;\n    box-sizing: border-box;\n    font-variant-numeric: lining-nums;\n    -webkit-font-smoothing: antialiased;\n    outline: none;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 100%;\n  }\n\n  body {\n    font-family: sans-serif;\n    color: ", ";\n    /* background-color: #202024; */\n  }\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 6px;\n    height:6px;\n  }\n  /* Track */\n  ::-webkit-scrollbar-track {\n    /* background-color: #202024; */\n  }\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background-color: #ababab;\n    border-radius: 10px;\n  }\n\n  body,\n  html,\n  li,\n  ol,\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  ol,\n  ul,\n  li {\n    list-style: none;\n  }\n\n  \n\n  button, input {\n    overflow: visible;\n  }\n\n  input {\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n    cursor: text;\n    border-image: initial;\n    font: 400 13.3333px Arial;\n    /* -webkit-rtl-ordering: logical;\n    -webkit-writing-mode: horizontal-tb;\n    writing-mode:horizontal-tb; */\n    text-rendering: auto;\n  }\n"])), colorGet('basic', 800));

var _templateObject$4;
var ButtonContainer = styled__default.button(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  all: none;\n  border: none;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  color: #ffffff;\n  padding: 10px 15px;\n  font-weight: 600;\n  font-size: 16px;\n  transition: 0.1s ease-in-out;\n  transition-property: background;\n  min-width: 110px;\n  width: fit-content;\n  height: max-content;\n  min-height: 50px;\n  user-select: none;\n\n  background: ", ";\n  cursor: ", ";\n  border: 2px solid ", ";\n  opacity: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"])), function (_ref) {
  var status = _ref.status,
      outline = _ref.outline;
  return outline ? colorGet(status, 300) : colorGet(status, 500);
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref3) {
  var status = _ref3.status;
  return colorGet(status, 500);
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return !disabled ? '1' : '0.6';
}, function (_ref5) {
  var status = _ref5.status,
      disabled = _ref5.disabled;
  return !disabled && colorGet(status, 600);
});

var _excluded$2 = ["icon"];

var Button = function Button(_ref) {
  var Icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  var handleOnClickButton = useCallback(function (event) {
    if (props.disabled) return;
    props.onClick && props.onClick(event);
  }, [props.disabled, props.onClick]);
  return React.createElement(ButtonContainer, Object.assign({}, props, {
    className: "button-container " + (props.className || ''),
    onClick: function onClick(event) {
      return handleOnClickButton(event);
    }
  }), Icon && props.iconposition === 'left' && React.createElement(Icon, {
    color: props.iconcolor,
    fill: props.iconfill || 'transparent'
  }), props.children, Icon && props.iconposition === 'right' && React.createElement(Icon, {
    color: props.iconcolor,
    fill: props.iconfill || 'transparent'
  }));
};

var _templateObject$5;
var InputsErrorMessageContainer = styled__default.label(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n  svg {\n    padding-right: 5px;\n    width: 25px;\n    height: 25px;\n  }\n  display: flex;\n  align-items: center;\n  padding-top: 5px;\n  color: ", ";\n  font-size: 12px;\n  font-weight: 600;\n"])), colorGet('danger', 600));

var InputsErrorMessage = function InputsErrorMessage(props) {
  return React.createElement(InputsErrorMessageContainer, {
    className: 'error'
  }, React.createElement(FiAlertCircle, {
    color: colorGet('danger', 500)
  }), props.error);
};

var _templateObject$6;
var CheckboxContainer = styled__default.div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  width: max-content;\n\n  > div {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n\n    .container-input {\n      background: ", ";\n      border: 2px solid ", ";\n      width: 30px;\n      height: 30px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: ", ";\n\n      > svg {\n        width: 25px;\n        height: 25px;\n        color: ", ";\n      }\n\n      input[type='checkbox'] {\n        cursor: ", ";\n        background: transparent;\n        width: inherit;\n        height: inherit;\n        margin: 0;\n        opacity: 0;\n        position: absolute;\n      }\n    }\n\n    .container-label {\n      font-weight: 600;\n      font-size: 12px;\n      color: #222b45;\n    }\n  }\n"])), function (_ref) {
  var status = _ref.status,
      disabled = _ref.disabled;
  return disabled ? colorGet('basic', 300) : colorGet(status, 400);
}, function (_ref2) {
  var status = _ref2.status,
      disabled = _ref2.disabled;
  return disabled ? colorGet('basic', 400) : colorGet(status, 600);
}, function (_ref3) {
  var semiRounded = _ref3.semiRounded;
  return semiRounded ? '4px' : '0px';
}, function (_ref4) {
  var status = _ref4.status,
      disabled = _ref4.disabled;
  return disabled ? colorGet(status, 400) : colorGet(status, 900);
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled ? 'not-allowed' : 'pointer';
});

var _excluded$3 = ["icon", "iconcolor", "semiRounded"];

var Checkbox = function Checkbox(_ref) {
  var Icon = _ref.icon,
      semiRounded = _ref.semiRounded,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var _useState = useState(props.defaultChecked || false),
      isChecked = _useState[0],
      setIsChecked = _useState[1];

  var handleOnClick = useCallback(function (event) {
    var checked = event.target.checked;
    setIsChecked(checked);
  }, []);
  return React.createElement(CheckboxContainer, Object.assign({
    className: 'checkbox-container'
  }, props, {
    semiRounded: semiRounded
  }), React.createElement("div", null, React.createElement("div", {
    className: 'container-input'
  }, isChecked && Icon && React.createElement(Icon, null), isChecked && !Icon && React.createElement(FiCheck, null), React.createElement("input", Object.assign({}, props, {
    defaultChecked: isChecked,
    type: 'checkbox',
    onChange: function onChange(event) {
      return handleOnClick(event);
    }
  }))), React.createElement("label", {
    className: 'container-label',
    htmlFor: props.label
  }, props.label)), props.error && React.createElement(InputsErrorMessage, {
    error: props.error
  }));
};

var _excluded$4 = ["checkboxRef", "semiRounded", "icon"];

var CheckboxForm = function CheckboxForm(_ref) {
  var checkboxRef = _ref.checkboxRef,
      semiRounded = _ref.semiRounded,
      Icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  var checkboxReference = useRef(null);
  if (checkboxRef) checkboxReference = checkboxRef;

  var _useField = useField(props.name),
      fieldName = _useField.fieldName,
      registerField = _useField.registerField;

  useEffect(function () {
    registerField({
      name: fieldName,
      ref: checkboxReference,
      getValue: function getValue(ref) {
        return ref.current.checked;
      },
      setValue: function setValue(ref, value) {
        ref.current.checked = value;
      },
      clearValue: function clearValue(ref) {
        ref.current.checked = false;
      }
    });
  }, [fieldName, checkboxReference, registerField]);

  var _useState = useState(props.defaultChecked || false),
      isChecked = _useState[0],
      setIsChecked = _useState[1];

  var handleOnClick = useCallback(function (event) {
    var checked = event.target.checked;
    setIsChecked(checked);
  }, []);
  return React.createElement(CheckboxContainer, Object.assign({
    className: 'checkbox-form-container'
  }, props, {
    semiRounded: semiRounded
  }), React.createElement("div", null, React.createElement("div", {
    className: 'container-input'
  }, isChecked && Icon && React.createElement(Icon, null), isChecked && !Icon && React.createElement(FiCheck, null), React.createElement("input", Object.assign({}, props, {
    ref: checkboxReference,
    defaultChecked: isChecked,
    type: 'checkbox',
    onChange: function onChange(event) {
      return handleOnClick(event);
    }
  }))), React.createElement("label", {
    className: 'container-label',
    htmlFor: props.label
  }, props.label)), props.error && React.createElement(InputsErrorMessage, {
    error: props.error
  }));
};

var _templateObject$7;
var InputContainer = styled__default.div(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteralLoose(["\n  margin: 0.5rem 0px;\n\n  .container-input-icon {\n    position: relative;\n\n    svg {\n      width: 20px;\n      height: 20px;\n      position: absolute;\n      z-index: 1;\n      top: 50%;\n      transform: translateY(-50%);\n      right: 0.5rem;\n    }\n\n    input {\n      width: 100%;\n      height: 40px;\n      outline: none;\n      font-size: 15px;\n      font-weight: 500;\n      padding: 0.4375rem 1rem;\n      border-radius: 4px;\n      border: 2px solid ", ";\n      background: ", ";\n      transition: 0.1s ease-in-out;\n      transition-property: border, background;\n      text-overflow: ellipsis;\n      -webkit-box-orient: vertical;\n    }\n    \n    input:focus {\n      border: 2px solid ", ";\n      background: ", ";\n    }\n\n    input:disabled {\n      cursor: not-allowed;\n      border: 2px solid ", ";\n    }\n  }\n"])), function (_ref) {
  var status = _ref.status,
      error = _ref.error;
  return "" + colorGet(error ? 'danger' : status, 400);
}, colorGet('basic', 200), function (_ref2) {
  var status = _ref2.status;
  return colorGet(status, 600);
}, colorGet('basic', 300), colorGet('basic', 500));

var _templateObject$8;
var InputLabelContainer = styled__default.label(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteralLoose(["\n  white-space: nowrap;\n  color: ", ";\n  text-transform: unset;\n  margin: 4px 0px;\n  font-size: 14px;\n  font-weight: 700;\n  user-select: none;\n  pointer-events: none;\n  display: flex;\n\n  .mandatory-star {\n    color: ", ";\n    font-size: 14px;\n    margin-left: 3px;\n  }\n"])), function (_ref) {
  var status = _ref.status;
  return "" + colorGet(status, 500);
}, colorGet('danger', 500));

var _excluded$5 = ["className"];

var InputLabel = function InputLabel(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$5);

  return React.createElement(InputLabelContainer, Object.assign({
    className: "input-label " + (className ? className : '')
  }, props), props.label, props.mandatory && React.createElement("span", {
    className: 'mandatory-star'
  }, "*"));
};

var _excluded$6 = ["icon"];

var Input = function Input(_ref) {
  var Icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$6);

  var handleChange = useCallback(function (event) {
    if (props.mask && event.nativeEvent.inputType !== 'deleteContentBackward') {
      event.target.value = masker(event.target.value.replace(/[^a-zA-Z0-9]/g, ''), props.mask);
    }

    if (props.onChange) props.onChange(event);
  }, []);
  return React.createElement(InputContainer, Object.assign({}, props, {
    className: "input-container " + (props.className || '')
  }), props.label && React.createElement(InputLabel, {
    label: props.label,
    status: props.status,
    mandatory: props.mandatory
  }), React.createElement("div", {
    className: 'container-input-icon'
  }, React.createElement("input", Object.assign({}, props, {
    onChange: handleChange,
    className: 'input-component-tag'
  })), Icon && React.createElement(Icon, {
    color: props.iconcolor,
    fill: props.iconfill || 'transparent'
  })), props.error && React.createElement(InputsErrorMessage, {
    error: props.error
  }));
};

var _excluded$7 = ["inputRef", "icon"];

var InputForm = function InputForm(_ref) {
  var inputRef = _ref.inputRef,
      Icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$7);

  var inputReference = useRef(null);
  if (inputRef) inputReference = inputRef;

  var _useField = useField(props.name),
      fieldName = _useField.fieldName,
      registerField = _useField.registerField;

  useEffect(function () {
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
  var handleChange = useCallback(function (ev) {
    if (props.mask && ev.nativeEvent.inputType !== 'deleteContentBackward') {
      ev.target.value = masker(ev.target.value.replace(/[^a-zA-Z0-9]/g, ''), props.mask);
    }

    if (props.onChange) props.onChange(ev);
  }, []);
  return React.createElement(InputContainer, Object.assign({}, props, {
    className: "input-container " + (props.className || '')
  }), props.label && React.createElement(InputLabel, {
    label: props.label,
    status: props.status,
    mandatory: props.mandatory
  }), React.createElement("div", {
    className: 'container-input-icon'
  }, React.createElement("input", Object.assign({
    id: fieldName,
    ref: inputReference,
    onChange: handleChange
  }, props, {
    className: 'inputform-component-tag'
  })), Icon && React.createElement(Icon, {
    color: props.iconcolor,
    fill: props.iconfill || 'transparent'
  })), props.error && React.createElement(InputsErrorMessage, {
    error: props.error
  }));
};

var _templateObject$9;
var PaginationContainer = styled__default.div(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n\n  .pagination-content {\n    display: flex;\n\n    span {\n      margin: auto;\n      font-weight: 700;\n    }\n\n    .pagination-content-icon {\n      cursor: pointer;\n      margin: 0px 10px;\n      transition: background-color 0.1s ease-in-out;\n      background-color: ", ";\n      border-radius: ", ";\n      display: flex;\n      transition: 0.1s ease-in-out;\n\n      svg {\n        width: 25px;\n        height: 25px;\n        color: ", ";\n      }\n\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  }\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var status = _ref.status;
  return colorGet(status, 500);
}, function (_ref2) {
  var rounded = _ref2.rounded;
  return rounded ? '15px' : '4px';
}, function (_ref3) {
  var status = _ref3.status;
  return colorGet(status, 'Contrast');
}, function (_ref4) {
  var status = _ref4.status;
  return colorGet(status, 600);
}, function (_ref5) {
  var isFirstPage = _ref5.isFirstPage;
  return isFirstPage && "\n    .pagination-content-icon.back {\n      opacity: 0.3;\n    }\n  \n  ";
}, function (_ref6) {
  var isLastPage = _ref6.isLastPage;
  return isLastPage && "\n    .pagination-content-icon.forward {\n      opacity: 0.3;\n    }\n  \n  ";
});

var _excluded$8 = ["rounded"];

var Pagination = function Pagination(_ref) {
  var _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? true : _ref$rounded,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$8);

  var _useState = useState(true),
      isFirstPage = _useState[0],
      setIsFirstPage = _useState[1];

  var _useState2 = useState(false),
      isLastPage = _useState2[0],
      setIsLastPage = _useState2[1];

  var goBackPage = useCallback(function () {
    var newPage = Number(props.currentPage) - 1;
    if (newPage + 1 === 1) setIsFirstPage(true);
    if (newPage < 0) return;
    setIsLastPage(false);
    props.callbackGetListData('', newPage, props.option);
  }, [props.currentPage, props.option]);
  var goForwardPage = useCallback(function () {
    var newPage = Number(props.currentPage) + 1;
    if (newPage + 1 === props.totalOfPages) setIsLastPage(true);
    if (newPage >= props.totalOfPages) return;
    setIsFirstPage(false);
    props.callbackGetListData('', newPage, props.option);
  }, [props.currentPage, props.option, props.totalOfPages]);
  return React.createElement(PaginationContainer, Object.assign({}, props, {
    isFirstPage: isFirstPage,
    isLastPage: isLastPage,
    rounded: rounded,
    className: "pagination-container " + (props.className || '')
  }), React.createElement("div", {
    className: 'pagination-content'
  }, React.createElement("label", {
    className: 'pagination-content-icon back',
    onClick: goBackPage
  }, React.createElement(FiChevronLeft, {
    color: '#FFFFFF'
  })), React.createElement("span", {
    className: 'pagination-content-text'
  }, "P\xE1gina ", Number(props.currentPage) + 1, " de ", props.totalOfPages > 0 ? props.totalOfPages : 1), React.createElement("label", {
    className: 'pagination-content-icon forward',
    onClick: goForwardPage
  }, React.createElement(FiChevronRight, {
    color: '#FFFFFF'
  }))));
};

var _templateObject$a;
var SelectContainer = styled__default.div(_templateObject$a || (_templateObject$a = _taggedTemplateLiteralLoose(["\n  font-size: 15px;\n\n  .select-dropdown {\n    opacity: ", ";\n    border: 2px solid ", ";\n    width: auto;\n    border-radius: 4px;\n    background-color: white;\n\n    position: relative;\n    width: 100%;\n  }\n\n  .select-dropdown-header {\n    padding: 15px;\n    cursor: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    svg {\n      margin-left: 10px;\n      width: 25px;\n      height: 25px;\n      transition: 0.2s ease-in-out;\n      transform: rotate(", ");\n    }\n  }\n\n  .select-dropdown-body {\n    padding: 5px;\n    position: ", ";\n    top: 55px;\n    background: white;\n    width: inherit;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    z-index: 1;\n    border: ", ";\n    border-top: ", ";\n  }\n\n  .select-dropdown-item {\n    padding: 10px;\n  }\n\n  .select-dropdown-item:hover {\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.isDisabled ? '0.5' : '1';
}, function (_ref) {
  var status = _ref.status;
  return "" + colorGet(status, 500);
}, function (props) {
  return props.isDisabled ? 'not-allowed' : 'pointer';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? '90deg' : '0deg';
}, function (_ref3) {
  var optionsFillSpace = _ref3.optionsFillSpace;
  return optionsFillSpace ? 'initial' : 'absolute';
}, function (_ref4) {
  var optionsFillSpace = _ref4.optionsFillSpace,
      status = _ref4.status;
  return optionsFillSpace ? 'none' : "1px solid " + colorGet(status, 500);
}, function (_ref5) {
  var optionsFillSpace = _ref5.optionsFillSpace,
      status = _ref5.status;
  return optionsFillSpace && "1px solid " + colorGet(status, 500);
});

var _excluded$9 = ["handleOnChange"];

var Select = function Select(_ref) {
  var handleOnChange = _ref.handleOnChange,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$9);

  var _useState = useState(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var _useState2 = useState(props.initialOption),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  var toggleSelect = useCallback(function () {
    !props.disabled && setOpen(function (oldState) {
      return !oldState;
    });
  }, [props.disabled]);
  var handleOptionClick = useCallback(function (option) {
    handleOnChange && handleOnChange(option);
    setSelectedItem(option);
    setOpen(function (oldState) {
      return !oldState;
    });
  }, [handleOnChange]);
  var headerText = useMemo(function () {
    if (selectedItem) return selectedItem.name;
    if (props.placeholder) return props.placeholder;
    return 'Selecione uma Op????o';
  }, [props.placeholder, selectedItem]);
  return React.createElement(SelectContainer, {
    className: "select-container " + (props.className ? props.className : ''),
    status: props.status,
    isOpen: isOpen,
    isDisabled: props.disabled,
    optionsFillSpace: props.optionsFillSpace
  }, props.label && React.createElement(InputLabel, {
    label: props.label,
    status: props.status,
    mandatory: props.mandatory
  }), React.createElement("div", {
    className: 'select-dropdown'
  }, React.createElement("div", {
    className: 'select-dropdown-header',
    onClick: toggleSelect
  }, headerText, React.createElement(FiChevronRight, {
    color: '#222b45'
  })), isOpen && (props.options.length > 0 ? React.createElement("div", {
    className: "select-dropdown-body"
  }, props.options.map(function (option, index) {
    return React.createElement("div", {
      key: index,
      className: 'select-dropdown-item',
      onClick: function onClick() {
        return handleOptionClick(option);
      },
      id: props.name
    }, option.name);
  })) : React.createElement("div", {
    className: "select-dropdown-body"
  }, "Nenhuma op\xE7\xE3o dispon\xEDvel .. "))), props.error && React.createElement(InputsErrorMessage, {
    error: props.error
  }));
};

var _excluded$a = ["handleOnChange"];

var SelectForm = function SelectForm(_ref) {
  var handleOnChange = _ref.handleOnChange,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$a);

  var _useState = useState(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var _useState2 = useState(props.initialOption),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  var _useField = useField(props.name),
      fieldName = _useField.fieldName,
      registerField = _useField.registerField;

  useEffect(function () {
    registerField({
      name: fieldName,
      getValue: function getValue() {
        return selectedItem;
      },
      setValue: function setValue(value) {
        setSelectedItem(value);
      },
      clearValue: function clearValue() {
        setSelectedItem(undefined);
      }
    });
  }, [fieldName, registerField, selectedItem]);
  var toggleSelect = useCallback(function () {
    !props.disabled && setOpen(function (oldState) {
      return !oldState;
    });
  }, [props.disabled]);
  var handleOptionClick = useCallback(function (option) {
    handleOnChange && handleOnChange(option);
    setSelectedItem(option);
    setOpen(function (oldState) {
      return !oldState;
    });
  }, [handleOnChange]);
  var headerText = useMemo(function () {
    if (selectedItem) return selectedItem.name;
    if (props.placeholder) return props.placeholder;
    return 'Selecione uma Op????o';
  }, [props.placeholder, selectedItem]);
  return React.createElement(SelectContainer, {
    className: "select-container " + (props.className ? props.className : ''),
    status: props.status,
    isOpen: isOpen,
    isDisabled: props.disabled,
    optionsFillSpace: props.optionsFillSpace
  }, props.label && React.createElement(InputLabel, {
    label: props.label,
    status: props.status,
    mandatory: props.mandatory
  }), React.createElement("div", {
    className: 'select-dropdown'
  }, React.createElement("div", {
    className: 'select-dropdown-header',
    onClick: toggleSelect
  }, headerText, React.createElement(FiChevronRight, {
    color: '#222b45'
  })), isOpen && (props.options.length > 0 ? React.createElement("div", {
    className: "select-dropdown-body"
  }, props.options.map(function (option, index) {
    return React.createElement("div", {
      key: index,
      className: 'select-dropdown-item',
      onClick: function onClick() {
        return handleOptionClick(option);
      },
      id: props.name
    }, option.name);
  })) : React.createElement("div", {
    className: "select-dropdown-body"
  }, "Nenhuma op\xE7\xE3o dispon\xEDvel .. "))), props.error && React.createElement(InputsErrorMessage, {
    error: props.error
  }));
};

var _templateObject$b, _templateObject2;
var SpinnerContainer = styled__default.div(_templateObject$b || (_templateObject$b = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (_ref) {
  var fixed = _ref.fixed;
  return fixed && " \n    position: fixed;\n    inset: 0;\n    background: " + colorGet('basic', 600, true) + ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ";
});
var SpinnerBall = styled__default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  /* 12sm 16md 24lg 32xl */\n  width: ", ";\n  height: ", ";\n  border: 4px solid ", ";\n  border-top: 4px solid ", ";\n  border-left: 4px solid ", ";\n  border-right: 4px solid ", ";\n  border-radius: 50%;\n  animation: spin 1s cubic-bezier(1, 1, 1, 1) infinite;\n  margin: auto;\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])), function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (_ref2) {
  var status = _ref2.status;
  return colorGet(status, 600);
}, function (_ref3) {
  var status = _ref3.status;
  return colorGet(status, 300);
}, function (_ref4) {
  var status = _ref4.status;
  return colorGet(status, 300);
}, function (_ref5) {
  var status = _ref5.status;
  return colorGet(status, 300);
});

var _excluded$b = ["fixed", "size"];

var Spinner = function Spinner(_ref) {
  var _ref$fixed = _ref.fixed,
      fixed = _ref$fixed === void 0 ? true : _ref$fixed,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '30px' : _ref$size,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$b);

  return React.createElement(SpinnerContainer, Object.assign({
    className: "spinner-container " + (props.className || ''),
    fixed: fixed
  }, props), React.createElement(SpinnerBall, {
    className: 'spinner-ball',
    status: props.status,
    size: size
  }));
};

var _templateObject$c;
var SwipeToggleContainer = styled__default.label(_templateObject$c || (_templateObject$c = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider {\n    position: absolute;\n    cursor: ", ";\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ", ";\n    border: ", ";\n    border-radius: ", ";\n    transition: 0.6s ease all;\n    opacity: ", ";\n  }\n\n  .center-ball {\n    position: absolute;\n    content: '';\n    height: 28px;\n    width: 28px;\n    background-color: white;\n    transition: 0.4s;\n    border-radius: ", ";\n    margin: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: ", ";\n\n    ", ";\n    ", ";\n    ", ";\n\n    svg {\n      width: 20px;\n      height: 20px;\n      color: ", ";\n    }\n\n    .animated-icon-div {\n      width: 18px;\n      height: 18px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: 0.4;\n\n      .animated-icon {\n        background-color: ", ";\n        height: 1.5px;\n        width: 12px;\n        border-radius: 8px;\n        transform: ", ";\n        position: absolute;\n        right: ", ";\n        transition: 0.4s;\n\n        &::after {\n          content: '';\n          background-color: ", ";\n          position: absolute;\n          height: 1.5px;\n          width: ", ";\n          border-radius: ", ";\n          transform: rotate(90deg);\n          left: ", ";\n          bottom: ", ";\n          transition: 0.4s;\n        }\n      }\n    }\n  }\n"])), function (_ref) {
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
  var disabled = _ref5.disabled;
  return disabled ? '0.6' : '1';
}, function (_ref6) {
  var rounded = _ref6.rounded;
  return rounded ? '100px' : '4px';
}, function (_ref7) {
  var disabled = _ref7.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref8) {
  var statusCheck = _ref8.statusCheck;
  return statusCheck && '-webkit-transform: translateX(20px)';
}, function (_ref9) {
  var statusCheck = _ref9.statusCheck;
  return statusCheck && ' -ms-transform: translateX(20px)';
}, function (_ref10) {
  var statusCheck = _ref10.statusCheck;
  return statusCheck && 'transform: translateX(20px)';
}, function (_ref11) {
  var status = _ref11.status,
      statusCheck = _ref11.statusCheck;
  return statusCheck ? colorGet(status, 500) : colorGet('danger', 500);
}, function (_ref12) {
  var status = _ref12.status,
      statusCheck = _ref12.statusCheck;
  return statusCheck ? colorGet(status, 500) : colorGet('danger', '500');
}, function (_ref13) {
  var statusCheck = _ref13.statusCheck;
  return statusCheck ? 'rotate(-45deg)' : 'rotate(45deg)';
}, function (_ref14) {
  var statusCheck = _ref14.statusCheck;
  return statusCheck ? '0px' : 'unset';
}, function (_ref15) {
  var statusCheck = _ref15.statusCheck,
      status = _ref15.status;
  return statusCheck ? colorGet(status, 500) : colorGet('danger', '500');
}, function (_ref16) {
  var statusCheck = _ref16.statusCheck;
  return statusCheck ? '6px' : '12px';
}, function (_ref17) {
  var statusCheck = _ref17.statusCheck;
  return statusCheck ? '8px 0px 0px 8px' : '8px';
}, function (_ref18) {
  var statusCheck = _ref18.statusCheck;
  return statusCheck ? '-2.2px' : 'unset';
}, function (_ref19) {
  var statusCheck = _ref19.statusCheck;
  return statusCheck ? '3px' : 'unset';
});

var _excluded$c = ["iconNameEnabled", "iconNameDisabled"];

var SwipeToggle = function SwipeToggle(_ref) {
  var IconEnabled = _ref.iconNameEnabled,
      IconDisabled = _ref.iconNameDisabled,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$c);

  var _useState = useState(false),
      statusCheck = _useState[0],
      setStatusCheck = _useState[1];

  var inputRef = useRef(null);
  var handleChangeInput = useCallback(function () {
    if (props.handleOnChange) props.handleOnChange(statusCheck);
  }, [props.handleOnChange, statusCheck]);
  useEffect(function () {
    setStatusCheck(props.isChecked || false);
  }, [props.isChecked]);
  return React.createElement(SwipeToggleContainer, Object.assign({}, props, {
    className: "swipe-toggle-container " + (props.className || ''),
    statusCheck: statusCheck
  }), React.createElement("input", {
    type: 'checkbox',
    ref: inputRef,
    onChange: handleChangeInput
  }), React.createElement("span", {
    className: 'slider',
    onClick: function onClick() {
      return !props.disabled && setStatusCheck(!statusCheck);
    }
  }, React.createElement("div", {
    className: 'center-ball'
  }, props.animatedIcon && React.createElement("div", {
    className: 'animated-icon-div'
  }, React.createElement("div", {
    className: 'animated-icon'
  })), statusCheck && IconEnabled && React.createElement(IconEnabled, null), !statusCheck && IconDisabled && React.createElement(IconDisabled, null))));
};

var _templateObject$d;
var TabContainer = styled__default.div(_templateObject$d || (_templateObject$d = _taggedTemplateLiteralLoose(["\n  border-bottom: 3px solid ", ";\n  padding: 10px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-direction: ", ";\n"])), colorGet('basic', 400), function (_ref) {
  var iconposition = _ref.iconposition;
  return iconposition === 'top' || iconposition === 'bottom' ? 'column' : 'row';
});

var _excluded$d = ["className", "iconposition", "icon"];

var Tab = function Tab(_ref) {
  var className = _ref.className,
      _ref$iconposition = _ref.iconposition,
      iconposition = _ref$iconposition === void 0 ? 'left' : _ref$iconposition,
      Icon = _ref.icon,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$d);

  return React.createElement(TabContainer, Object.assign({
    iconposition: iconposition,
    className: "tab-option " + (className ? className : '')
  }, props, {
    onClick: function onClick() {
      return props.handleOnClickTab(props.index);
    }
  }), Icon && (iconposition === 'left' || iconposition === 'top') && React.createElement(Icon, {
    color: colorGet('basic', 800),
    fill: props.iconfill || 'transparent'
  }), React.createElement("span", null, props.label), Icon && (iconposition === 'right' || iconposition === 'bottom') && React.createElement(Icon, {
    color: colorGet('basic', 800),
    fill: props.iconfill || 'transparent'
  }));
};

var _templateObject$e;
var TabsContainer = styled__default.div(_templateObject$e || (_templateObject$e = _taggedTemplateLiteralLoose(["\n  background: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n\n  .tab-options-list {\n    min-height: 50px;\n    font-weight: 600;\n    user-select: none;\n    display: flex;\n    overflow-x: auto;\n    padding-bottom: 2px;\n    justify-content: ", ";\n  }\n\n  .selected {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n\n    svg {\n      color: ", " !important;\n    }\n  }\n\n  .rendered-components-container {\n    .rendered-tab {\n      display: none;\n    }\n\n    .rendered-tab.--show {\n      display: block;\n    }\n  }\n"])), function (_ref) {
  var tabsPosition = _ref.tabsPosition;
  return tabsPosition;
}, function (_ref2) {
  var status = _ref2.status;
  return colorGet(status, 600);
}, function (_ref3) {
  var status = _ref3.status;
  return status && colorGet(status, 600);
}, function (_ref4) {
  var status = _ref4.status;
  return colorGet(status, 600);
});

var _excluded$e = ["children", "className"];

var Tabs = function Tabs(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$e);

  var _useState = useState(0),
      selectedTab = _useState[0],
      setSelectedTab = _useState[1];

  useEffect(function () {
    props.selectedTabIndex && setSelectedTab(props.selectedTabIndex);
  }, [props.selectedTabIndex]);
  var handleOnChangeTab = useCallback(function (clickedTab) {
    setSelectedTab(clickedTab);
  }, []);
  var renderedResetedTab = useMemo(function () {
    var foundTab = props.tabs.find(function (tab) {
      return tab.index === selectedTab;
    });
    if (!foundTab) throw new Error("TAB NOT FOUND");
    return foundTab.componentToRender;
  }, [props.tabs, selectedTab]);
  return React.createElement(TabsContainer, Object.assign({
    className: "tabs-container " + (className ? className : '')
  }, props), React.createElement("ul", {
    className: 'tab-options-list'
  }, props.tabs.map(function (tab) {
    return React.createElement(Tab, Object.assign({}, tab, {
      key: tab.index,
      className: "" + (selectedTab === tab.index ? 'selected' : ''),
      selectedTab: selectedTab,
      handleOnClickTab: function handleOnClickTab(clickedTab) {
        return handleOnChangeTab(clickedTab);
      }
    }));
  })), React.createElement("div", {
    className: 'rendered-components-container'
  }, !props.shouldResetTabsStates && props.tabs.map(function (tab) {
    return React.createElement("div", {
      key: tab.index,
      className: "rendered-tab " + (tab.index === selectedTab ? '--show' : '')
    }, tab.componentToRender);
  }), props.shouldResetTabsStates && renderedResetedTab));
};

var TabsContext = React.createContext({});

var TabsProvider = function TabsProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(0),
      selectedTab = _useState[0],
      setSelectedTab = _useState[1];

  return React.createElement(TabsContext.Provider, {
    value: {
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab
    }
  }, children);
};

function useTabs() {
  var context = useContext(TabsContext);

  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }

  return context;
}

var _templateObject$f;
var ContainerTextArea = styled__default.div(_templateObject$f || (_templateObject$f = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: relative;\n\n  textarea {\n    box-sizing: border-box;\n    border-radius: 4px;\n    border: 2px solid ", ";\n    outline: none;\n    font-size: 15px;\n    font-weight: 500;\n    padding: 0.4375rem 1rem;\n    background: #f7f9fc;\n    transition: 0.1s ease-in-out;\n    transition-property: border;\n    text-overflow: ellipsis;\n    resize: ", ";\n  }\n\n  span {\n    display: block;\n    color: ", ";\n    font-size: 11px;\n  }\n"])), function (props) {
  return colorGet(props.status, 500);
}, function (_ref) {
  var resizable = _ref.resizable;
  return resizable;
}, colorGet('danger', 500));

var _excluded$f = ["resizable"];

var TextArea = function TextArea(_ref) {
  var _ref$resizable = _ref.resizable,
      resizable = _ref$resizable === void 0 ? 'both' : _ref$resizable,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$f);

  return React.createElement(ContainerTextArea, {
    className: "textareaform-container " + (props.className || ''),
    status: props.status,
    resizable: resizable
  }, props.label && React.createElement(InputLabel, {
    label: props.label,
    status: props.status,
    mandatory: props.mandatory
  }), React.createElement("textarea", Object.assign({
    className: 'textarea-component-tag'
  }, props), props.children), props.error && React.createElement(InputsErrorMessage, {
    error: props.error
  }));
};

var _excluded$g = ["textAreaRef", "resizable"];

var TextAreaForm = function TextAreaForm(_ref) {
  var textAreaRef = _ref.textAreaRef,
      _ref$resizable = _ref.resizable,
      resizable = _ref$resizable === void 0 ? 'both' : _ref$resizable,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$g);

  var textAreaReference = useRef(null);
  if (textAreaRef) textAreaReference = textAreaRef;

  var _useField = useField(props.name),
      fieldName = _useField.fieldName,
      registerField = _useField.registerField;

  useEffect(function () {
    registerField({
      name: fieldName,
      ref: textAreaReference,
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
  }, [fieldName, textAreaReference, registerField]);
  return React.createElement(ContainerTextArea, {
    className: "textareaform-container " + (props.className || ''),
    status: props.status,
    resizable: resizable
  }, props.label && React.createElement(InputLabel, {
    label: props.label,
    status: props.status,
    mandatory: props.mandatory
  }), React.createElement("textarea", Object.assign({
    ref: textAreaReference,
    className: 'textarea-component-tag'
  }, props), props.children), props.error && React.createElement(InputsErrorMessage, {
    error: props.error
  }));
};

var ToastContext = React.createContext({});

var ToastProvider = function ToastProvider(_ref) {
  var children = _ref.children;

  var _useState = useState([]),
      toastListCurrent = _useState[0],
      setToastListCurrent = _useState[1];

  var removeToastCard = useCallback(function (cardId) {
    setToastListCurrent(function (oldState) {
      return oldState.filter(function (toast) {
        return toast.id !== cardId;
      });
    });
  }, []);
  var addToast = useCallback(function (options) {
    var newToastId = v4();
    var newToast = {
      id: newToastId,
      handleOnClick: removeToastCard,
      duration: options.duration,
      position: options.position,
      title: options.title,
      subtitle: options.subtitle,
      status: options.status
    };
    setToastListCurrent(function (oldState) {
      var filteredPositions = oldState.filter(function (toast) {
        return toast.position === newToast.position;
      });
      return [newToast].concat(filteredPositions);
    });
  }, [removeToastCard]);
  return React.createElement(ToastContext.Provider, {
    value: {
      addToast: addToast,
      toastListCurrent: toastListCurrent
    }
  }, children);
};

function useToast() {
  var context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

var _templateObject$g;
var TooltipContainer = styled__default.div(_templateObject$g || (_templateObject$g = _taggedTemplateLiteralLoose(["\n  position: relative;\n  font-size: 10px;\n  width: fit-content;\n\n  .tooltip-box {\n    position: absolute;\n    font-size: 14px;\n    background: ", ";\n    color: #fff;\n    padding: 5px;\n    border-radius: 5px;\n    display: none;\n    z-index: 4;\n    white-space: nowrap;\n    left: 50%;\n    transform: translateX(-50%);\n\n    /* tooltip show bottom  */\n    ", "\n\n    /* tooltip show top  */\n    ", "\n  }\n\n  .tooltip-box {\n    display: ", ";\n    width: fit-content;\n  }\n\n  .tooltip-arrow {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    border-width: 5px;\n    border-style: solid;\n\n    /* tooltip show bottom  */\n    ", "\n\n    /* tooltip show top  */\n    ", "\n  }\n"])), function (_ref) {
  var status = _ref.status;
  return colorGet(status, 500);
}, function (_ref2) {
  var position = _ref2.position;
  return position === 'bottom' && "\n        top: calc(100% + 5px)};\n      ";
}, function (_ref3) {
  var position = _ref3.position;
  return position === 'top' && "\n        bottom: calc(100% + 5px)};\n    ";
}, function (_ref4) {
  var show = _ref4.show;
  return show ? 'block' : 'none';
}, function (_ref5) {
  var position = _ref5.position,
      status = _ref5.status;
  return position === 'bottom' && "\n        top: -10px;\n        border-color: transparent transparent " + colorGet(status, 500) + " transparent;\n    ";
}, function (_ref6) {
  var position = _ref6.position,
      status = _ref6.status;
  return position === 'top' && "\n        bottom: -10px;\n        border-color: " + colorGet(status, 500) + " transparent transparent  transparent;\n    ";
});

var _excluded$h = ["clickable", "status", "position"];

var Tooltip = function Tooltip(_ref) {
  var _ref$clickable = _ref.clickable,
      clickable = _ref$clickable === void 0 ? false : _ref$clickable,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'danger' : _ref$status,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom' : _ref$position,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$h);

  var _useState = useState(false),
      show = _useState[0],
      setShow = _useState[1];

  console.log(show);
  return React.createElement(TooltipContainer, Object.assign({}, props, {
    position: position,
    status: status,
    show: show,
    className: "tooltip-container " + (props.className || ''),
    onMouseLeave: function onMouseLeave() {
      return !clickable && setShow(false);
    },
    onMouseEnter: function onMouseEnter() {
      return !clickable && setShow(true);
    },
    onClick: function onClick() {
      return clickable && setShow(!show);
    }
  }), React.createElement("div", {
    className: 'tooltip-box'
  }, props.text, React.createElement("span", {
    className: 'tooltip-arrow'
  })), React.createElement("div", {
    className: 'tooltip-children'
  }, props.children));
};

var _templateObject$h;
var ToastCardContainer = styled__default.div(_templateObject$h || (_templateObject$h = _taggedTemplateLiteralLoose(["\n  position: fixed;\n  user-select: none;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.1rem 1rem;\n  height: 80px;\n  max-width: 400px;\n  min-width: 296px;\n  cursor: pointer;\n  background: ", ";\n  border-radius: 4px;\n  color: #fff;\n  box-shadow: 0 0 10px #999;\n\n  ", "\n\n  ", "\n\n\n", "\n\n", "\n\n  .toast-icon {\n    svg {\n      width: 30px;\n      height: 30px;\n    }\n  }\n\n  .toast-text-info {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    max-width: 300px;\n\n    .toast-title {\n      font-size: 18px;\n      font-weight: bold;\n\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .toast-subtitle {\n      font-size: 14px;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n"])), function (_ref) {
  var status = _ref.status;
  return colorGet(status, 500);
}, function (_ref2) {
  var position = _ref2.position,
      shouldShow = _ref2.shouldShow,
      myIndexInArray = _ref2.myIndexInArray,
      timeToUnmount = _ref2.timeToUnmount;
  return position === 'top-right' && " \n    top: " + (myIndexInArray * 100 + 10) + "px;\n    right: 12px;\n    transition: transform " + timeToUnmount + "ms ease-in-out;\n    transform: translateX(" + (shouldShow ? '0' : '200%') + ");\n  ";
}, function (_ref3) {
  var position = _ref3.position,
      shouldShow = _ref3.shouldShow,
      myIndexInArray = _ref3.myIndexInArray,
      timeToUnmount = _ref3.timeToUnmount;
  return position === 'bottom-right' && " \n    bottom: " + (myIndexInArray * 100 + 10) + "px;\n    right: 12px;\n    transition: transform " + timeToUnmount + "ms ease-in-out;\n    transform: translateX(" + (shouldShow ? '0' : '200%') + ");\n  ";
}, function (_ref4) {
  var position = _ref4.position,
      shouldShow = _ref4.shouldShow,
      myIndexInArray = _ref4.myIndexInArray,
      timeToUnmount = _ref4.timeToUnmount;
  return position === 'top-left' && " \n    top: " + (myIndexInArray * 100 + 10) + "px;\n    left: 12px;\n    transition: transform " + timeToUnmount + "ms ease-in-out;\n    transform: translateX(" + (shouldShow ? '0' : '-200%') + ");\n  ";
}, function (_ref5) {
  var position = _ref5.position,
      shouldShow = _ref5.shouldShow,
      myIndexInArray = _ref5.myIndexInArray,
      timeToUnmount = _ref5.timeToUnmount;
  return position === 'bottom-left' && " \n    bottom: " + (myIndexInArray * 100 + 10) + "px;\n    left: 12px;\n    transition: transform " + timeToUnmount + "ms ease-in-out;\n    transform: translateX(" + (shouldShow ? '0' : '-200%') + ");\n  ";
});

var _excluded$i = ["duration", "position"];

var ToastCard = function ToastCard(_ref) {
  var _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 5000 : _ref$duration,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top-right' : _ref$position,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$i);

  var _useToast = useToast(),
      toastListCurrent = _useToast.toastListCurrent;

  var _useState = useState(false),
      shouldShow = _useState[0],
      setShouldShow = _useState[1];

  var timeToUnmount = 700;

  var _useState2 = useState(-1),
      myIndexInArray = _useState2[0],
      setMyIndexInArray = _useState2[1];

  var intervalIdShow = useRef(null);
  var intervalIdRemove = useRef(null);
  var mounted = useRef(false);
  var handleOnClickToastCard = useCallback(function () {
    setShouldShow(false);
    intervalIdRemove.current = setTimeout(function () {
      props.handleOnClick(props.id);
    }, timeToUnmount);
  }, [props.handleOnClick, props.id]);
  var toastIcon = useMemo(function () {
    if (props.status === 'success') return React.createElement(FiCheckCircle, null);
    if (props.status === 'warning') return React.createElement(FiAlertTriangle, null);
    if (props.status === 'info') return React.createElement(FiInfo, null);
    if (props.status === 'danger') return React.createElement(FiXOctagon, null);
    return;
  }, [props.status]);
  var handleMouseEnter = useCallback(function () {
    intervalIdShow.current && clearTimeout(intervalIdShow.current);
    intervalIdRemove.current && clearTimeout(intervalIdRemove.current);
  }, []);
  var removeToastFromScreen = useCallback(function () {
    intervalIdShow.current = setTimeout(function () {
      mounted.current && setShouldShow(false);
    }, duration);
    intervalIdRemove.current = setTimeout(function () {
      props.handleOnClick(props.id);
    }, duration + timeToUnmount);
  }, [duration, props.handleOnClick, props.id]);
  var handleMouseLeave = useCallback(function () {
    removeToastFromScreen();
  }, [removeToastFromScreen]);
  useEffect(function () {
    setShouldShow(true);
    removeToastFromScreen();
  }, [removeToastFromScreen]);
  useEffect(function () {
    var myIndex = toastListCurrent.findIndex(function (toast) {
      return toast.id === props.id;
    });
    setMyIndexInArray(myIndex);
  }, [props.id, toastListCurrent]);
  useEffect(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return React.createElement(ToastCardContainer, Object.assign({}, props, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    myIndexInArray: myIndexInArray,
    position: position,
    duration: duration,
    className: "toast-card " + (props.className ? props.className : ''),
    onClick: handleOnClickToastCard,
    shouldShow: shouldShow,
    timeToUnmount: timeToUnmount
  }), React.createElement("div", {
    className: 'toast-text-info'
  }, React.createElement("div", {
    className: 'toast-title'
  }, props.title), React.createElement("div", {
    className: 'toast-subtitle'
  }, props.subtitle)), React.createElement("div", {
    className: 'toast-icon'
  }, toastIcon));
};

var ToastCardsContainer = function ToastCardsContainer() {
  var _useToast = useToast(),
      toastListCurrent = _useToast.toastListCurrent;

  return React.createElement(Fragment, null, toastListCurrent.map(function (toast) {
    return React.createElement(ToastCard, Object.assign({
      key: toast.id
    }, toast));
  }));
};

var styled = styled__default,
    css = css$1,
    withTheme = withTheme$1,
    createGlobalStyle = createGlobalStyle$1,
    ThemeProvider = ThemeProvider$2;
var ServerStyleSheet = ServerStyleSheet$1;

var ThemeProvider$1 = function ThemeProvider$1(_ref) {
  var children = _ref.children,
      customTheme = _ref.customTheme;
  return React.createElement(ThemeProvider, {
    theme: customTheme || theme
  }, React.createElement(ToastProvider, null, React.createElement(ToastCardsContainer, null), children));
};

export { Accordion, Accordions, Avatar, BaseStyles, theme as BaseTheme, Button, Checkbox, CheckboxForm, Input, InputForm, Pagination, Select, SelectForm, ServerStyleSheet, Spinner, SwipeToggle, Tabs, TabsContext, TabsProvider, TextArea, TextAreaForm, ThemeProvider$1 as ThemeProvider, ToastContext, ToastProvider, Tooltip, calcAge, colorGet, combineContext, createGlobalStyle, css, deleteObjectKeys, errorMessageBuilder, formatDate, getContrastColor, masker, objectToQuery, removeDuplicatesFromArray, styled, useTabs, useToast, withTheme };
//# sourceMappingURL=index.modern.js.map
