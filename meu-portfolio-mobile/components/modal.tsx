import { TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type Botao = {
  texto: string;
  onPress: () => void;
  cor?: string;
}

type Props = {
  visivel: boolean;
  onFechar: () => void;
  titulo: string;
  descricao: string;
  botoes: Botao[];
}

export function MeuModal({ visivel, onFechar, titulo, descricao, botoes }: Props) {
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
        <ThemedText type="subtitle" style={{ color: Colors[theme].textDois }}>{titulo}</ThemedText>
        <ThemedText style={{ marginTop: 8 }}>{descricao}</ThemedText>
        <ThemedView style={styles.botoes}>
          {botoes.map((btn, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.btn, { backgroundColor: btn.cor ?? Colors[theme].botao }]}
              onPress={() => { onFechar(); btn.onPress(); }}
            >
              <ThemedText style={{ color: corBotaoTexto }}>{btn.texto}</ThemedText>
            </TouchableOpacity>
          ))}
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