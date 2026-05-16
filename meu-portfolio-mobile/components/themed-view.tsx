import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  const flatStyle = Array.isArray(style) ? Object.assign({}, ...style) : style;
  const isTransparent = flatStyle?.backgroundColor === 'transparent';

  return <View style={[{ backgroundColor: isTransparent ? 'transparent' : backgroundColor }, style]} {...otherProps} />;
}
