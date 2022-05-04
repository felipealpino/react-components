export declare type ElementStatus =
  | 'basic'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'dark';

export const ElementStatusConstraints = ['basic', 'primary', 'secondary', 'tertiary', 'quaternary', 'success', 'warning', 'danger', 'info', 'dark'];

export interface IColors {
  black: string | string[];
  white: string | string[];
  transparent: string;
  basicContrast: string;
  primaryContrast: string;
  secondaryContrast: string;
  tertiaryContrast: string;
  quaternaryContrast: string;
  successContrast: string;
  infoContrast: string;
  dangerContrast: string;
  warningContrast: string;
  controlContrast: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
  primaryTransparent100: string;
  primaryTransparent200: string;
  primaryTransparent300: string;
  primaryTransparent400: string;
  primaryTransparent500: string;
  primaryTransparent600: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;
  secondaryTransparent100: string;
  secondaryTransparent200: string;
  secondaryTransparent300: string;
  secondaryTransparent400: string;
  secondaryTransparent500: string;
  secondaryTransparent600: string;
  tertiary100: string;
  tertiary200: string;
  tertiary300: string;
  tertiary400: string;
  tertiary500: string;
  tertiary600: string;
  tertiary700: string;
  tertiary800: string;
  tertiary900: string;
  tertiaryTransparent100: string;
  tertiaryTransparent200: string;
  tertiaryTransparent300: string;
  tertiaryTransparent400: string;
  tertiaryTransparent500: string;
  tertiaryTransparent600: string;
  quaternary100: string;
  quaternary200: string;
  quaternary300: string;
  quaternary400: string;
  quaternary500: string;
  quaternary600: string;
  quaternary700: string;
  quaternary800: string;
  quaternary900: string;
  quaternaryTransparent100: string;
  quaternaryTransparent200: string;
  quaternaryTransparent300: string;
  quaternaryTransparent400: string;
  quaternaryTransparent500: string;
  quaternaryTransparent600: string;
  success100: string;
  success200: string;
  success300: string;
  success400: string;
  success500: string;
  success600: string;
  success700: string;
  success800: string;
  success900: string;
  successTransparent100: string;
  successTransparent200: string;
  successTransparent300: string;
  successTransparent400: string;
  successTransparent500: string;
  successTransparent600: string;
  info100: string;
  info200: string;
  info300: string;
  info400: string;
  info500: string;
  info600: string;
  info700: string;
  info800: string;
  info900: string;
  infoTransparent100: string;
  infoTransparent200: string;
  infoTransparent300: string;
  infoTransparent400: string;
  infoTransparent500: string;
  infoTransparent600: string;
  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning500: string;
  warning600: string;
  warning700: string;
  warning800: string;
  warning900: string;
  warningTransparent100: string;
  warningTransparent200: string;
  warningTransparent300: string;
  warningTransparent400: string;
  warningTransparent500: string;
  warningTransparent600: string;
  danger100: string;
  danger200: string;
  danger300: string;
  danger400: string;
  danger500: string;
  danger600: string;
  danger700: string;
  danger800: string;
  danger900: string;
  dangerTransparent100: string;
  dangerTransparent200: string;
  dangerTransparent300: string;
  dangerTransparent400: string;
  dangerTransparent500: string;
  dangerTransparent600: string;
  basic100: string;
  basic200: string;
  basic300: string;
  basic400: string;
  basic500: string;
  basic600: string;
  basic700: string;
  basic800: string;
  basic900: string;
  basic1000: string;
  basic1100: string;
  basicTransparent100: string;
  basicTransparent200: string;
  basicTransparent300: string;
  basicTransparent400: string;
  basicTransparent500: string;
  basicTransparent600: string;
  dark100: string;
  dark200: string;
  dark300: string;
  dark400: string;
  dark500: string;
  dark600: string;
  dark700: string;
  dark800: string;
  dark900: string;
  dark1000: string;
}

export const colors: IColors = {
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
  dark1000: '#09090A',
};
