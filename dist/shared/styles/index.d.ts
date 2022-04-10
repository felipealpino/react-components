import React from 'react';
import { IDefaultTheme } from '../theme/theme';
interface IThemeProviderProps {
    customTheme?: IDefaultTheme;
}
export declare const ThemeProvider: React.FC<IThemeProviderProps>;
export { default as styled, css, ServerStyleSheet, createGlobalStyle, withTheme } from './styled';
