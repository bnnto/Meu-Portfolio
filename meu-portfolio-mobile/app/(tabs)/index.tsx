import { StyleSheet, TouchableOpacity, Linking, Image, Text, Animated, Alert } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';
import Feather from '@expo/vector-icons/Feather';
import { MeuModal } from '@/components/modal';

const NOME = "Bento Guilherme";

export default function Home(){
  const theme = useColorScheme() ?? 'light';
  const [texto, setTexto] = useState('');
  const corBotaoTexto = theme === 'light' ? '#FDF6E3' : Colors[theme].textDois;
  const cursorOpacity = useRef(new Animated.Value(1)).current;
  const [modalVisivel, setModalVisivel] = useState(false);

  const downloadCurriculo = async () => {
    try {
      const asset = Asset.fromModule(require('../../assets/files/Curriculo-BentoGuilherme.pdf'));
      await asset.downloadAsync();
      await Sharing.shareAsync(asset.localUri!, {
        mimeType: 'application/pdf',
        dialogTitle: 'Salvar Currículo',
      });
    } catch (e) {
      console.error('Erro ao compartilhar currículo: ', e);
    }
  };

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      setTexto(NOME.slice(0, i + 1));
      i++;
      if (i >= NOME.length) clearInterval(intervalo);
    }, 80);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const piscar = Animated.loop(
      Animated.sequence([
        Animated.timing(cursorOpacity, { toValue: 0, duration: 400, useNativeDriver: true }),
        Animated.timing(cursorOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
      ])
    );
    piscar.start();
    return () => piscar.stop();
  }, []);

  return(
      <ThemedView style={styles.container}>
          <ThemedText type="default" style={{ letterSpacing: 1.5, marginBottom: -10}}>olá, eu sou</ThemedText>
          <ThemedView style={styles.nomeContainer}>
            <Text style={[styles.nomeTexto, { color: Colors[theme].textDois, fontSize: 35}]}>
              {texto}
            </Text>
            <Animated.Text style={[styles.nomeTexto, { color: Colors[theme].textDois, opacity: cursorOpacity }]}>
              |
            </Animated.Text>
          </ThemedView>
          <ThemedText type="default">Estudante de Ciência da Computação</ThemedText>
          <ThemedText type="default">Back end · Front end</ThemedText>
          <TouchableOpacity 
              style={[styles.botao, { backgroundColor: Colors[theme].botao }]}
              onPress={downloadCurriculo}
          >
            <ThemedView style={styles.botaoConteudo}>
              <ThemedText style={{ color: corBotaoTexto }}>salvar currículo  </ThemedText>
              <Feather name="save" size={18} color={corBotaoTexto} />
            </ThemedView>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisivel(true)}>
            <Image
                source={require('../../assets/images/foto.jpeg')}
                alt="Minha foto"
                style={styles.homeFotoImg}
            />
          </TouchableOpacity>
          <MeuModal visivel={modalVisivel} onFechar={() => setModalVisivel(false)} />
      </ThemedView>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  botao: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
    marginTop: 16,
  },
  botaoConteudo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  homeFotoImg: {
    marginTop: 25,
    borderRadius: 150,
    width: 300,
    height: 300,
  },
  nomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nomeTexto: {
    fontFamily: Fonts?.serifBold,
    fontSize: 30,
  },
  modal: {
  borderRadius: 16,
  padding: 24,
  gap: 12,
  },
  modalBotoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 8,
    backgroundColor: 'transparent',
  },
  modalBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
  },
});