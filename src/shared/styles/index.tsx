import React from 'react';
import { ToastProvider } from '../../components/Toast/context/ToastContext';
import { ToastCardsContainer } from '../../components/Toast/ToastCardsContainer';
import { IDefaultTheme, theme } from '../theme/theme';
import { ThemeProvider as Provider } from './styled';

interface IThemeProviderProps {
  customTheme?: IDefaultTheme;
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children, customTheme }) => {
  return (
    <Provider theme={customTheme || theme}>
      <ToastProvider>
        <ToastCardsContainer />
        {children}
      </ToastProvider>
    </Provider>
  );
};

export { default as styled, css, ServerStyleSheet, createGlobalStyle, withTheme } from './styled';
