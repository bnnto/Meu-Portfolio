import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function Tag({ texto }: { texto: string }) {
  const theme = useColorScheme() ?? 'light';
  return (
    <ThemedView style={[styles.tag, { backgroundColor: Colors[theme].tagProjeto }]}>
      <ThemedText style={[styles.texto, { color: Colors[theme].tagTexto }]}>{texto}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  texto: {
    fontSize: 13,
  },
});