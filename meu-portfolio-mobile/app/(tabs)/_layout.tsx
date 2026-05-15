import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Appearance, TouchableOpacity } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function TabLayout(){
  const theme = useColorScheme() ?? 'light';

  const [fontsLoaded] = useFonts({
    AnnapurnaSIL: require('../../assets/fonts/AnnapurnaSIL-Regular.ttf'),
    AnnapurnaSIL_Bold: require('../../assets/fonts/AnnapurnaSIL-Bold.ttf'),
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return(
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors[theme].textDois,
      tabBarInactiveTintColor: Colors[theme].text,
      tabBarStyle:{
        backgroundColor: Colors[theme].background,
        marginBottom: 10,
        borderTopWidth: 0,
        elevation: 0,
      },
      headerShown: true,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: Colors[theme].background,
      },
      headerTintColor : Colors[theme].textDois,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => Appearance.setColorScheme(theme === 'light' ? 'dark' : 'light')}
          style={{ marginRight: 16 }}
        >
          <Ionicons
            name={theme === 'light' ? 'moon-outline' : 'sunny-outline'}
            size={24}
            color={Colors[theme].textDois}
          />
        </TouchableOpacity>
      ),
      }}>
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home', 
          tabBarIcon: ({ color, focused}) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="sobre" 
        options={
          {title: 'Sobre mim', 
          tabBarIcon: ({ color, focused}) => (
           <Ionicons name={focused ? 'person' : 'person-outline'} size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="projetos" 
        options={
          {title: 'Projetos', 
          tabBarIcon: ({ color, focused}) => (
            <Ionicons name={focused ? 'code-slash' : 'code-slash-outline'} size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="jogo" 
        options={
          {title: 'Jogo da Forca', 
          tabBarIcon: ({ color, focused}) => (
            <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}