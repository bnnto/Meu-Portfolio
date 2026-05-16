import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function N({ children }: { children: string }) {
  const theme = useColorScheme() ?? 'light';
  return (
    <ThemedText style={{ fontFamily: Fonts?.semibold, color: Colors[theme].textDois }}>
      {children}
    </ThemedText>
  );
}