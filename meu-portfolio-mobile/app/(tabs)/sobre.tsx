import { StyleSheet, Linking, Image, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MeuModal } from '@/components/modal';
import { useState } from 'react';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import PythonIcon from '../../assets/images/python.svg';
import JavaIcon from '../../assets/images/java.svg';
import CppIcon from '../../assets/images/c++.svg';
import ReactIcon from '../../assets/images/react.svg';
import NodeIcon from '../../assets/images/node.svg';
import NextIcon from '../../assets/images/next.svg';
import FastApiIcon from '../../assets/images/fastapi.svg';
import LinuxIcon from '../../assets/images/linux.svg';
import GitIcon from '../../assets/images/git.svg';
import FigmaIcon from '../../assets/images/figma.svg';
import JsIcon from '../../assets/images/js.svg';
import RaspbIcon from '../../assets/images/raspb.svg';
import CssIcon from '../../assets/images/css.svg';
import KotlinIcon from '../../assets/images/kotlin.svg';
import DjangoIcon from '../../assets/images/django.svg';
import { Dimensions } from 'react-native';
import { N } from '@/components/negrito';

const { height } = Dimensions.get('window');

export default function Sobre(){
  const [modalVisivel, setModalVisivel] = useState(false);
  const theme = useColorScheme() ?? 'light';

  const habilidades = [
    { name: "Python", Icone: PythonIcon },
    { name: "Kotlin", Icone: KotlinIcon },
    { name: "Java", Icone: JavaIcon },
    { name: "C++", Icone: CppIcon },
    { name: "Django", Icone: DjangoIcon },
    { name: "React.js", Icone: ReactIcon },
    { name: "Node.js", Icone: NodeIcon },
    { name: "Next.js", Icone: NextIcon },
    { name: "FastAPI", Icone: FastApiIcon },
    { name: "Linux", Icone: LinuxIcon },
    { name: "Git", Icone: GitIcon },
    { name: "Figma", Icone: FigmaIcon },
    { name: "JavaScript", Icone: JsIcon },
    { name: "Raspberry Pi", Icone: RaspbIcon },
    { name: "CSS", Icone: CssIcon },
  ];

  return(
    <ScrollView style={{ backgroundColor: Colors[theme].background }} contentContainerStyle={styles.container}>
      <ThemedView style={[styles.topoContainer, { height: height - 300 }]}>
        <ThemedText type="title" style={[styles.titulo, { color: Colors[theme].textDois }]}>sobre mim</ThemedText>
        <ThemedText style={{ textAlign: 'center'}}>
          Sou estudante de 
          <N> Ciência da Computação </N> 
          na{" "}
          <ThemedText 
            onPress={() => setModalVisivel(true)}
            style={{ fontFamily: Fonts?.semibold, color: Colors[theme].textDois, textDecorationLine: 'underline' }}
          >
          Universidade Católica de Pernambuco
          </ThemedText>
          {" "} e atualmente estou no 5° período. Durante o curso aprendi diversas tecnologias, mas meu interesse maior foi em 
          <N> back e front end, </N> 
          e é com elas que pretendo fazer diferença na minha 
          <N> carreira</N>.
        </ThemedText>

        <ThemedText style={{ textAlign: 'center'}}>
          Aqui você vai encontrar os 
          <ThemedText style={[styles.textoForte, { color: Colors[theme].textDois }]}> projetos </ThemedText>
          que desenvolvi ao longo do curso e alguns outros projetos no 
          <ThemedText style={[styles.textoForte, { color: Colors[theme].textDois }]}> github.</ThemedText>
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.setaContainer}>
        <ThemedText style={{ fontFamily: Fonts?.serifBold, color: Colors[theme].textDois, fontSize: 22 }}>Veja minhas habilidades abaixo </ThemedText>
        <Ionicons name="chevron-down-outline" size={16} color={Colors[theme].textDois} />
      </ThemedView> 

      <ThemedView style={styles.quadradinhos}>
        <ThemedText type="title" style={[styles.titulo, { marginBottom: 30, color: Colors[theme].textDois }]}>habilidades</ThemedText>
        <ThemedView style={styles.grade}>
          {habilidades.map((hab, index) => (
            <ThemedView style={[styles.quadradinho, { backgroundColor: Colors[theme].botao }]} key={index}>
              <hab.Icone fill='white' width={36} height={36} />
              <ThemedText style={[styles.quadradinhoNome, {color: Colors[theme].textoQuadrado}]}>{hab.name}</ThemedText>
            </ThemedView>
          ))}
        </ThemedView>
      </ThemedView>

      <MeuModal 
        visivel={modalVisivel} 
        onFechar={() => setModalVisivel(false)}
        titulo="Abrir o Site da UNICAP"
        descricao="Deseja abrir o site da Universidade Católica de Pernambuco?"
        botoes={[
          { texto: 'Cancelar', onPress: () => {} },
          { texto: 'Abrir', onPress: () => Linking.openURL('https://github.com/bnnto'), cor: '#065F46' },
        ]}
      />
    </ScrollView>
  );
}

const styles =  StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  container: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 16,
  },
  quadradinhos: {
    width: '100%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  quadradinho: {
    width: 90,
    height: 90,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    gap: 6,
    padding: 8,
  },
  titulo: {
    fontFamily: Fonts?.serifBold, 
    fontSize: 36,
  },
  textoForte: {
    fontFamily: Fonts?.semibold,
  },
  quadradinhoNome: {
    fontSize: 12, 
    textAlign: 'center', 
  },
  quadIcone: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'transparent',
  },
  setaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  topoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: 'transparent',
  },
});