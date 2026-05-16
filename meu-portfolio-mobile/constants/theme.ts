import { Platform, Appearance } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const botaoDark = '#1a2540';
const botaoLight = '#4f2b02';

const textoDark = '#e2e8f0';
const textoLight = 'beige';

const tagProjetoLight = '#4f2b02';
const tagProjetoDark = '#1a2540';

const tagTextoLight = '#fdf6e3';
const tagTextoDark = '#e2e8f0';

const iconeTagLight = '#2F3E2B'; 
const iconeTagDark = '#28478e';

export function toggleTheme(current: 'light' | 'dark'){
  Appearance.setColorScheme(current === 'light' ? 'dark' : 'light');
}

export const Colors = {
  light: {
    text: '#4f2b02',
    textDois: '#3E1F00',
    background: '#f5f5dc',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    botao: botaoLight,
    textoQuadrado: textoLight,
    tagProjeto: tagProjetoLight,
    tagTexto: tagTextoLight,
    iconeTag: iconeTagLight,
  },
  dark: {
    text: '#94A3B8',
    textDois: '#E2E8F0',
    background: '#0f1729',
    tint: tintColorDark,
    icon: '#9BA1A6',
    azulClaro: '#1a2540',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    botao: botaoDark,
    textoQuadrado: textoDark,
    tagProjeto: tagProjetoDark,
    tagTexto: tagTextoDark,
    iconeTag: iconeTagDark,
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
