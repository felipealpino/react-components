import * as styledComponents from 'styled-components';
import { IDefaultTheme } from '../theme';
declare const styled: styledComponents.ThemedStyledInterface<IDefaultTheme>, css: styledComponents.ThemedCssFunction<IDefaultTheme>, withTheme: styledComponents.BaseWithThemeFnInterface<IDefaultTheme>, createGlobalStyle: <P extends object = {}>(first: TemplateStringsArray | styledComponents.CSSObject | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, IDefaultTheme>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, IDefaultTheme>>[]) => styledComponents.GlobalStyleComponent<P, IDefaultTheme>, ThemeProvider: styledComponents.BaseThemeProviderComponent<IDefaultTheme, IDefaultTheme>;
declare const ServerStyleSheet: typeof styledComponents.ServerStyleSheet;
export { css, ServerStyleSheet, createGlobalStyle, ThemeProvider, withTheme };
export default styled;
