import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';

export default function Home(){
    const theme = useColorScheme() ?? 'light';

    const downloadCurriculo = async () => {
        const asset = Asset.fromModule(require('../../assets/files/Curriculo-BentoGuilherme.pdf'));
        await asset.downloadAsync();
        await Sharing.shareAsync(asset.localUri!);
    };

    return(
        <ThemedView style={styles.container}>
            <ThemedText type="default" style={{ letterSpacing: 1.5 }}>olá, eu sou</ThemedText>
            <ThemedText type="title" style={{ fontFamily: Fonts?.serifBold }}>Bento Guilherme</ThemedText>
            <ThemedText type="default">Estudante de Ciência da Computação</ThemedText>
            <ThemedText type="default">Back end · Front end</ThemedText>
            <TouchableOpacity 
                style={[styles.botao, { backgroundColor: Colors[theme].botao }]}
                onPress={downloadCurriculo}
            >
                <ThemedText>baixar currículo ↓</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
    marginTop: 16,
  },
});