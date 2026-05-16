import { StyleSheet, ScrollView, TouchableOpacity, Animated, Text, Image} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState, useEffect, useRef } from 'react';

const ERROS_MAX = 6;

const palavras = [
  "variavel", "react", "python", "marcio", "algoritmo", "javascript", "linux",
  "github", "django", "codigo", "hackaton", "loop", "java", "mysql", "deploy", "debug",
  "teste", "compilador", "constante", "grafo", "complexidade", "cookies",
  "commit", "repositorio", "script", "memoria", "ponteiro", "vetor", "html", "desenvolvedor", "backend",
  "frontend", "ciberseguranca", "mobile", "kotlin", "string", "encapsulamento",
  "heranca", "polimorfismo", "interpretador"
];

const imagens = [
  require('../../assets/images/forca-0.png'),
  require('../../assets/images/forca-1.png'),
  require('../../assets/images/forca-2.png'),
  require('../../assets/images/forca-3.png'),
  require('../../assets/images/forca-4.png'),
  require('../../assets/images/forca-5.png'),
  require('../../assets/images/forca-6.png'),
];

function BonecoForca({ erros, theme }: { erros: number, theme: 'light' | 'dark' }) {
  return (
    <Image
      source={imagens[erros]}
      style={{ 
        width: 600, 
        height: 300, 
        resizeMode: 'contain',
        tintColor: theme === 'dark' ? '#E2E8F0' : undefined,
      }}
    />
  );
}

const LETRAS = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Jogo() {
  const theme = useColorScheme() ?? 'light';
  const [palavraSecreta, setPalavraSecreta] = useState('');
  const [letrasTentadas, setLetrasTentadas] = useState<string[]>([]);
  const [erros, setErros] = useState(0);
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const popAnim = useRef(new Animated.Value(0)).current;
  const [jogoKey, setJogoKey] = useState(0);
  
  const letrasCorretas = letrasTentadas.filter(l => palavraSecreta.includes(l));
  const venceu = palavraSecreta.length > 0 && palavraSecreta.split('').every(l => letrasCorretas.includes(l));
  const perdeu = erros >= ERROS_MAX;
  const jogoAcabou = venceu || perdeu;
  const erradas = letrasTentadas.filter(l => !palavraSecreta.includes(l));

  function iniciarJogo() {
    const nova = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSecreta(nova);
    setLetrasTentadas([]);
    setErros(0);
    popAnim.setValue(0);
    shakeAnim.setValue(0); 
    setJogoKey(prev => prev + 1); 
  }

  useEffect(() => { iniciarJogo(); }, []);

  useEffect(() => {
    if (perdeu) {
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 10, duration: 80, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -10, duration: 80, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 8, duration: 80, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -8, duration: 80, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 80, useNativeDriver: true }),
      ]).start();
    }
    if (venceu) {
      Animated.spring(popAnim, { toValue: 1, useNativeDriver: true, tension: 100, friction: 5 }).start();
    }
  }, [venceu, perdeu]);

  function tentarLetra(letra: string) {
    if (letrasTentadas.includes(letra) || jogoAcabou) return;
    setLetrasTentadas(prev => [...prev, letra]);
    if (!palavraSecreta.includes(letra)) setErros(prev => prev + 1);
  }

  return (
    <ScrollView
      style={{ backgroundColor: Colors[theme].background }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.titulo, { color: Colors[theme].textDois }]}>
        jogo da forca
      </Text>

      <ThemedView style={[styles.categoria, { borderColor: Colors[theme].textDois + '40', backgroundColor: Colors[theme].textDois + '15' }]}>
        <ThemedText style={{ color: Colors[theme].textDois, fontSize: 13 }}>Categoria: Programação</ThemedText>
      </ThemedView>

      <BonecoForca erros={erros} theme={theme} />

      <Animated.View key={jogoKey} style={[ styles.palavraContainer, { flexDirection: 'row', gap: 8, transform: [{ translateX: shakeAnim } ]} ]}>
        {palavraSecreta.split('').map((letra, i) => (
          <ThemedView key={i} style={[styles.letraBox, { borderBottomColor: Colors[theme].textDois }]}>
            <ThemedText style={[styles.letraTexto, { color: Colors[theme].textDois }]}>
              {letrasTentadas.includes(letra) ? letra : ''}
            </ThemedText>
          </ThemedView>
        ))}
      </Animated.View>

      <ThemedText style={{ color: Colors[theme].text, fontSize: 17 }}>
        Erros ({erros}/{ERROS_MAX}):{' '}
        <ThemedText style={{ color: '#dc2626', fontFamily: Fonts?.semibold }}>
          {erradas.join(', ')}
        </ThemedText>
      </ThemedText>

      <ThemedView style={styles.teclado}>
        {LETRAS.map((letra) => {
          const tentada = letrasTentadas.includes(letra);
          const acertou = tentada && palavraSecreta.includes(letra);
          const errou = tentada && !palavraSecreta.includes(letra);

          return (
            <TouchableOpacity
              key={letra}
              onPress={() => tentarLetra(letra)}
              disabled={tentada || jogoAcabou}
              style={[
                styles.tecla,
                { backgroundColor: Colors[theme].botao },
                acertou && styles.acerto,
                errou && styles.erro,
                (tentada || jogoAcabou) && styles.desabilitada,
              ]}
            >
              <ThemedText style={[styles.teclaTexto, { color: Colors[theme].textoQuadrado }]}>
                {letra}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </ThemedView>

      {venceu && (
        <Animated.View style={{ transform: [{ scale: popAnim }] }}>
          <ThemedText style={[styles.mensagem, { color: '#2d8a4e' }]}>Você ganhou! 🎉</ThemedText>
        </Animated.View>
      )}
      {perdeu && (
        <ThemedView style={{ alignItems: 'center', gap: 4, backgroundColor: 'transparent' }}>
          <ThemedText style={[styles.mensagem, { color: '#dc2626' }]}>Você perdeu!</ThemedText>
          <ThemedText style={{ color: '#dc2626' }}>
            A palavra era: <ThemedText style={{ fontFamily: Fonts?.semibold, color: '#dc2626' }}>{palavraSecreta}</ThemedText>
          </ThemedText>
        </ThemedView>
      )}

      <TouchableOpacity
        onPress={iniciarJogo}
        style={[styles.btnReiniciar, { backgroundColor: Colors[theme].botao }]}
      >
        <ThemedText style={{ color: Colors[theme].textoQuadrado, fontFamily: Fonts?.semibold }}>
          Reiniciar
        </ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 20,
  },
  titulo: {
    fontFamily: Fonts?.serifBold,
    fontSize: 36,
    lineHeight: 36,
    textAlign: 'center',
    width: '100%',
  },
  categoria: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  letraBox: {
    borderBottomWidth: 2,
    minWidth: 16,
    alignItems: 'center',
    paddingBottom: 2,
  },
  letraTexto: {
    fontSize: 18,
    fontFamily: Fonts?.semibold,
    minWidth: 14,
    textAlign: 'center',
  },
  teclado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 7,
    maxWidth: 360,
    backgroundColor: 'transparent',
  },
  tecla: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teclaTexto: {
    fontSize: 14,
    fontFamily: Fonts?.semibold,
  },
  acerto: {
    backgroundColor: '#2d8a4e',
  },
  erro: {
    backgroundColor: '#dc2626',
  },
  desabilitada: {
    opacity: 0.5,
  },
  mensagem: {
    fontSize: 18,
    fontFamily: Fonts?.semibold,
  },
  btnReiniciar: {
    borderRadius: 999,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 8,
  },
  palavraContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',        
    justifyContent: 'center',
    gap: 8,
    marginTop: -60,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
});