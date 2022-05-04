import React from 'react';
import { ToastProvider } from '../../components/Toast/context/ToastContext';
import { ToastCardsContainer } from '../../components/Toast/ToastCardsContainer';
import { theme } from '../theme/theme';
import { ThemeProvider as Provider } from './styled';
export var ThemeProvider = function (_a) {
    var children = _a.children, customTheme = _a.customTheme;
    return (React.createElement(Provider, { theme: customTheme || theme },
        React.createElement(ToastProvider, null,
            React.createElement(ToastCardsContainer, null),
            children)));
};
export { default as styled, css, ServerStyleSheet, createGlobalStyle, withTheme } from './styled';
//# sourceMappingURL=index.js.map