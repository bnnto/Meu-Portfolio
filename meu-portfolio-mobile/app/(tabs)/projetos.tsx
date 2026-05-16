import { StyleSheet, ScrollView, Image, TouchableOpacity, Linking} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { MeuModal } from '@/components/modal';
import { useState } from 'react';
import { N } from '@/components/negrito';
import { Tag } from '@/components/tag';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Projetos(){
  const theme = useColorScheme() ?? 'light';
  const [modalPatas, setModalPatas] = useState(false);
  const [modalPortfolio, setModalPortfolio] = useState(false);
  const [modalColiceu, setModalColiceu] = useState(false);
  const [modalLabirinto, setModalLabirinto] = useState(false);

  return(
    <ScrollView style={{ backgroundColor: Colors[theme].background }} contentContainerStyle={styles.container}>
      <ThemedText type="title" style={[styles.titulo, { color: Colors[theme].textDois }]}>projetos e experiências</ThemedText>
      
      <ThemedView style={styles.projeto}>
        <TouchableOpacity onPress={() => setModalPatas(true)}>
          <Image
              source={require('../../assets/images/patasdarua.png')}
              alt="Patas da Rua"
              style={styles.projetoFotoImg}
          />
        </TouchableOpacity>
        <ThemedText type="title" style={[styles.titulo, { color: Colors[theme].textDois }]}>patas na rua</ThemedText>
        <ThemedText style={styles.descricao}>
          Patas da Rua é um site focado à 
          <N> proteger e melhorar a qualidade de vida </N>
          de animais de rua, oferecendo uma solução tecnológica usando 
          <N> coleiras rastreadoras </N> 
          que permitem monitorar esses animais em 
          <N> tempo real </N>
          . O rastreamento permite que a
          <N> ONG </N>
          acompanhe o animal e organize
          <N> apadrinhamentos e adoções.</N>
        </ThemedText>

        <ThemedView style={styles.tags}>
          <Tag texto="HTML"/>
          <Tag texto="CSS"/>
          <Tag texto="JavaScript"/>
          <Tag texto="Django"/>
        </ThemedView>

        <TouchableOpacity onPress={() => setModalPatas(true)}>
          <ThemedView style={[styles.retanguloCodigo, { backgroundColor: Colors[theme].iconeTag }]}>
            <ThemedView style={styles.retanguloConteudo}>
              <Ionicons name="logo-github" size={16} color={Colors[theme].tagTexto} />
              <ThemedText style={[styles.textoCodigo, { color: Colors[theme].tagTexto }]}>
                Acessar Código
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
      
      <ThemedView style={styles.projeto}>
        <TouchableOpacity onPress={() => setModalPortfolio(true)}>
          <Image
              source={require('../../assets/images/portdark.png')}
              alt="Portfolio"
              style={styles.projetoFotoImg}
          />
        </TouchableOpacity>
        <ThemedText type="title" style={[styles.titulo, { color: Colors[theme].textDois }]}>portfolio pessoal</ThemedText>
        <ThemedText style={styles.descricao}>
          Portfólio pessoal criado para reunir minhas informações, projetos, 
          contato e jogo da forca, ao mesmo tempo em que serve como um 
          <N> aprimoramento </N> 
          para minhas habilidades em desenvolvimento front-end com 
          <N> React </N> 
          e 
          <N> CSS.</N>
        </ThemedText>

        <ThemedView style={styles.tags}>
          <Tag texto="React.js"/>
          <Tag texto="Node.js"/>
          <Tag texto="Next.js"/>
          <Tag texto="HTML"/>
          <Tag texto="CSS"/>
          <Tag texto="JavaScript"/>
        </ThemedView>

        <TouchableOpacity onPress={() => setModalPortfolio(true)}>
          <ThemedView style={[styles.retanguloCodigo, { backgroundColor: Colors[theme].iconeTag }]}>
            <ThemedView style={styles.retanguloConteudo}>
              <Ionicons name="logo-github" size={16} color={Colors[theme].tagTexto} />
              <ThemedText style={[styles.textoCodigo, { color: Colors[theme].tagTexto }]}>
                Acessar Código
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.projeto}>
        <TouchableOpacity onPress={() => setModalColiceu(true)}>
          <Image
              source={require('../../assets/images/coliceu.jpeg')}
              alt="Coliceu"
              style={styles.projetoFotoImg}
          />
        </TouchableOpacity>
        <ThemedText type="title" style={[styles.titulo, { color: Colors[theme].textDois }]}>coliceu</ThemedText>
        <ThemedText style={styles.descricao}>
          O 
          <N> Coliceu </N> 
          é um aplicativo de mapeamento arqueológico feito em 
          <N> Kotlin </N> 
          e 
          <N> Java </N> 
          que permite que o arqueólogo possa mapear 
          <N> sítios arqueológicos </N> 
          diretamente a partir de imagens adicionar   
          <N> pontos-zero, </N> 
          registrar artefatos descobertos e organizar seus detalhes de forma 
          <N> clara </N> 
          e 
          <N> acessível.</N>
        </ThemedText>

        <ThemedView style={styles.tags}>
          <Tag texto="Koltin"/>
          <Tag texto="Java"/>
          <Tag texto="Android Studio"/>
        </ThemedView>

        <TouchableOpacity onPress={() => setModalColiceu(true)}>
          <ThemedView style={[styles.retanguloCodigo, { backgroundColor: Colors[theme].iconeTag }]}>
            <ThemedView style={styles.retanguloConteudo}>
              <Ionicons name="logo-github" size={16} color={Colors[theme].tagTexto} />
              <ThemedText style={[styles.textoCodigo, { color: Colors[theme].tagTexto }]}>
                Acessar Código
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.projeto}>
        <TouchableOpacity onPress={() => setModalLabirinto(true)}>
          <Image
              source={require('../../assets/images/labirinto.png')}
              alt="Labirinto"
              style={styles.projetoFotoImg}
          />
        </TouchableOpacity>
        <ThemedText type="title" style={[styles.titulo, { color: Colors[theme].textDois }]}>labirinto</ThemedText>
        <ThemedText style={styles.descricao}> 
          <N>Labirinto </N> 
          é um jogo feito 100% em Java para jogar no 
          <N> terminal </N>
          , onde você anda pelo labirinto e pode encontrar 
          <N> inimigos </N> 
          e 
          <N> armadilhas </N> 
          pelo caminho, além de 
          <N> tesouros </N> 
          o jogo tem classes, nível de dificuldade, saves, loja de itens, consumíveis e muito 
          <N> mais!</N>
        </ThemedText>

        <ThemedView style={styles.tags}>
          <Tag texto="Java"/>
        </ThemedView>

        <TouchableOpacity onPress={() => setModalLabirinto(true)}>
          <ThemedView style={[styles.retanguloCodigo, { backgroundColor: Colors[theme].iconeTag }]}>
            <ThemedView style={styles.retanguloConteudo}>
              <Ionicons name="logo-github" size={16} color={Colors[theme].tagTexto} />
              <ThemedText style={[styles.textoCodigo, { color: Colors[theme].tagTexto }]}>
                Acessar Código
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.projeto}>
        <TouchableOpacity>
          <Image
              source={require('../../assets/images/hackaton.jpeg')}
              alt="Hackathon"
              style={styles.projetoFotoImg}
          />
        </TouchableOpacity>
        <ThemedText type="title" style={[styles.titulo, { color: Colors[theme].textDois }]}>hackathon - extensão em ação</ThemedText>
        <ThemedText style={styles.descricao}>
          O 
          <N> Hackathon </N> 
          em questão teve foco na comunidade de 
          <N> Santo Amaro </N>
          , na qual necessitava de projetos que não fossem a curto prazo. Portanto, eu e meu grupo pensamos, conversamos e criamos um projeto, que ainda está sendo desenvolvido, chamado 
          <N> "Mulheres do Amanhã" </N>. 
          Temos a ideia de dar uma visão de futuro para cada 
          <N> mulher </N> 
          da comunidade, sendo no 
          <N> âmbito pessoal e profissional.</N>
        </ThemedText>

        <ThemedView style={styles.tags}>
          <Tag texto="Em desenvolvimento"/>
        </ThemedView>
      </ThemedView>
      <MeuModal 
        visivel={modalPatas} 
        onFechar={() => setModalPatas(false)}
        titulo="Abrir o Github"
        descricao="Deseja abrir o Repositório do Patas da Rua no navegador?"
        botoes={[
          { texto: 'Cancelar', onPress: () => {} },
          { texto: 'Abrir', onPress: () => Linking.openURL('https://github.com/bnnto/Patas-da-Rua'), cor: '#065F46' },
        ]}
      />
      <MeuModal 
        visivel={modalPortfolio} 
        onFechar={() => setModalPortfolio(false)}
        titulo="Abrir o Github"
        descricao="Deseja abrir o Repositório do Meu Portfolio no navegador?"
        botoes={[
          { texto: 'Cancelar', onPress: () => {} },
          { texto: 'Abrir', onPress: () => Linking.openURL('https://github.com/bnnto/Meu-Portfolio'), cor: '#065F46' },
        ]}
      />
      <MeuModal 
        visivel={modalColiceu} 
        onFechar={() => setModalColiceu(false)}
        titulo="Abrir o Github"
        descricao="Deseja abrir o Repositório do Coliceu no navegador?"
        botoes={[
          { texto: 'Cancelar', onPress: () => {} },
          { texto: 'Abrir', onPress: () => Linking.openURL('https://github.com/joao0cb/Projeto-Coliceu'), cor: '#065F46' },
        ]}
      />
      <MeuModal 
        visivel={modalLabirinto} 
        onFechar={() => setModalLabirinto(false)}
        titulo="Abrir o Github"
        descricao="Deseja abrir o Repositório do Labirinto no navegador?"
        botoes={[
          { texto: 'Cancelar', onPress: () => {} },
          { texto: 'Abrir', onPress: () => Linking.openURL('https://github.com/LucasMN0/Labirinto'), cor: '#065F46' },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 32,
  },
  projeto: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'transparent',
    paddingBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff20',
  },
  tituloPrincipal: {
    fontSize: 36,
    textAlign: 'center',
  },
  titulo: {
    fontFamily: Fonts?.serifBold,
    fontSize: 32,
    textAlign: 'center',
  },
  descricao: {
    textAlign: 'center',
    lineHeight: 24,
  },
  projetoFotoImg: {
    borderRadius: 22,
    width: 300,
    height: 200,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  retanguloCodigo: {
    borderRadius: 999,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  retanguloConteudo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'transparent',
  },
  textoCodigo: {
    fontSize: 14,
  },
});