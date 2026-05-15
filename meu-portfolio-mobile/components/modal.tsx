import { TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type Props = {
  visivel: boolean;
  onFechar: () => void;
}

export function MeuModal({ visivel, onFechar }: Props) {
  const theme = useColorScheme() ?? 'light';
  const corBotaoTexto = theme === 'light' ? '#FDF6E3' : Colors[theme].textDois;

  return (
    <Modal
      isVisible={visivel}
      onBackdropPress={onFechar}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <ThemedView style={styles.modal}>
        <ThemedText type="subtitle" style={{ color: Colors[theme].textDois }}>Abrir GitHub?</ThemedText>
        <ThemedText style={{ marginTop: 8 }}>Deseja abrir o GitHub no navegador?</ThemedText>
        <ThemedView style={styles.botoes}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: Colors[theme].botao }]}
            onPress={onFechar}
          >
            <ThemedText style={{ color: corBotaoTexto }}>Cancelar</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#065F46' }]}
            onPress={() => { onFechar(); Linking.openURL('https://github.com/bnnto'); }}
          >
            <ThemedText style={{ color: corBotaoTexto }}>Abrir</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    borderRadius: 16,
    padding: 24,
    gap: 12,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 8,
    backgroundColor: 'transparent',
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
  },
});