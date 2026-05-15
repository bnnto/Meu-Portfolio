import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const botaoDark = '#1a2540';
const botaoLight = '#4f2b02';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#f5f5dc',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    botao: botaoLight,
  },
  dark: {
    text: '#E2E8F0',
    background: '#0f1729',
    tint: tintColorDark,
    icon: '#9BA1A6',
    azulClaro: '#1a2540',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    botao: botaoDark,
  },
};

export const Fonts = Platform.select({
  android: {
    sans: 'Poppins_400Regular',
    semibold: 'Poppins_600SemiBold',
    serif: 'AnnapurnaSIL',
    serifBold: 'AnnapurnaSIL_Bold',
    mono: 'monospace',
  },
  ios: {
    sans: 'Poppins_400Regular',
    semibold: 'Poppins_600SemiBold',
    serif: 'AnnapurnaSIL',
    serifBold: 'AnnapurnaSIL_Bold',
    mono: 'ui-monospace',
  },
  web: {
    sans: "Poppins_400Regular",
    semibold: "Poppins_600SemiBold",
    serif: "AnnapurnaSIL",
    serifBold: "AnnapurnaSIL_Bold",
    mono: "monospace",
  },
  default: {
    sans: 'Poppins_400Regular',
    semibold: 'Poppins_600SemiBold',
    serif: 'AnnapurnaSIL',
    serifBold: 'AnnapurnaSIL_Bold',
    mono: 'monospace',
  },
});
