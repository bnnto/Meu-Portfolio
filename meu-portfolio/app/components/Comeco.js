"use client";

import styles from "../page.module.css";
import { useEffect, useState } from "react";

const NOME = "Bento Guilherme";

export default function Comeco() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      setTexto(NOME.slice(0, i + 1));
      i++;
      if (i >= NOME.length) clearInterval(intervalo);
    }, 80);
    return () => clearInterval(intervalo);
  }, []);
  
  return (
    <section className={styles.home}>
      <div className={`${styles.homeTexto} fadeUp`}>
        <span className={styles.homeOla}>olá, eu sou</span>
        <h1 className={styles.homeNome}>
          {texto}<span className={styles.cursor}>|</span>
        </h1>
        <p className={styles.homeDesc}>Estudante de Ciência da Computação</p>
        <p className={styles.homeDesc}>Back end · Front end</p>
        <a href="/Curriculo-BentoGuilherme.pdf" download className={styles.btnCurriculo}>
            Baixar Currículo ↓
        </a>
      </div>

      <a href='https://github.com/bnnto' target="_blank" rel="noopener noreferrer" className={`${styles.homeFoto} fadeUp`}>
        <img src="/foto.jpeg" alt="Bento" className={styles.homeFotoImg} />
      </a>
    </section>
  );
}