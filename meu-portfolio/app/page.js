"use client";

import Barra from "./components/Barra";
import Comeco from "./components/Comeco";
import Sobre from "./components/Sobre";
import Skills from "./components/Skills";
import Projetos from "./components/Projetos";
import Jogodaforca from "./components/Jogodaforca";
import Rodape from "./components/Rodape";
import useFadeUp from "./hooks/useFadeUp";

export default function Home() {
  useFadeUp();
  return (
    <>
      <Barra />

      <Comeco />

      <Sobre />

      <Skills />

      <Projetos />

      <Jogodaforca />

      <Rodape />
    </> 
  );
}