"use client"

import styles from "./jogo.module.css";
import page from "../page.module.css";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { toggleTheme } from "../components/Barra";
import Link from "next/link";

const ERROS_MAX = 6;
const palavras = ["variavel", "react", "python", "marcio", "algoritmo", "javascript", "linux", 
  "github", "django", "codigo", "hackaton", "loop", "java", "mysql", "deploy", "debug", 
  "teste", "compilador", "constante", "grafo", "complexidade", "cookies",
  "commit", "repositorio", "script", "memoria", "ponteiro", "vetor", "html", "desenvolvedor", "backend",
  "frontend", "ciberseguranca", "mobile", "kotlin", "string", "encapsulamento",
  "heranca", "polimorfismo", "interpretador"]

function Boneco({ erros }){
  return (
    <img
      src={`/forca/forca-${erros}.png`}
      className={styles.imagem}/>
  );
}

function Teclado({ letrasTentadas, palavraSecreta, jogoAcabou, onLetra}){

  const letras = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className={styles.teclado}>
      {letras.map((letra) => {
        const tentada = letrasTentadas.includes(letra);
        const acertou = tentada && palavraSecreta.includes(letra);
        const errou = tentada && !palavraSecreta.includes(letra);

        return (
          <button
            key={letra}
            onClick={() => onLetra(letra)}
            disabled={tentada || jogoAcabou}
            className={`${styles.tecla} ${acertou ? styles.acerto : ""} ${errou ? styles.erro : ""}`}>
            {letra}
          </button>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [palavraSecreta, setPalavraSecreta] = useState("");
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  const [erros, setErros] = useState(0);

  const letrasCorretas = letrasTentadas.filter(l => palavraSecreta.includes(l));
  const venceu = palavraSecreta.length > 0 && palavraSecreta.split("").every(l => letrasCorretas.includes(l));
  const perdeu = erros >= ERROS_MAX;
  const jogoAcabou = venceu || perdeu;

  function iniciarJogo(){
    const nova = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSecreta(nova);
    setLetrasTentadas([]);
    setErros(0);
  }

  useEffect(() => {
    iniciarJogo();
  }, []);

  useEffect(() => {
  if (venceu) {
      let params = {
        particleCount: 200,
        spread: 90,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        angle: 45
      };

      confetti(params);

      confetti({
        ...params,
        origin: { x: 1, y: 0.5 },
        angle: 135
      });
    }
  }, [venceu]);

  useEffect(() => {
    function handleKeyDown(e) {
      const letra = e.key.toLowerCase()
      if (/^[a-z]$/.test(letra) && !jogoAcabou) {
        tentarLetra(letra)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [jogoAcabou, letrasTentadas])

  function tentarLetra(letra) {
    if (letrasTentadas.includes(letra) || jogoAcabou) return;

    setLetrasTentadas(prev => [...prev, letra]);

    if (!palavraSecreta.includes(letra)) {
      setErros(prev => prev + 1);
    }
  }

  const displayPalavra = palavraSecreta
    .split("")
    .map(letra => (letrasTentadas.includes(letra) ? letra : "_"))
    .join(" ");

  const erradas = letrasTentadas.filter(l => !palavraSecreta.includes(l));

  return (
    <>
    <div className={styles.containerCima}>
      <Link href="/">Voltar para Portfólio</Link>
      <h1>jogo da forca</h1>
    
      <div className={styles.containerCimaDireita}>
        <button 
        className={`${styles.btnReiniciar} ${jogoAcabou ? styles.shakeRen : ''}`}
        onClick={iniciarJogo}>
          Reiniciar
        </button>
        <button onClick={toggleTheme} className={page.lightDark}>
          <img src="/moon.svg" className="lua" />
          <img src="/sun.svg" className="sol" />
        </button>
      </div>
    </div>
    <div className={styles.container}>
      <p className={styles.categoria}>Categoria: Progamação</p>

      <Boneco erros={erros} />

      <p className={`${styles.palavra} ${perdeu ? styles.shake : ''} ${venceu ? styles.venceu : ''}`}>
        {displayPalavra.split('').map((letra, i) => (
          <span key={i} className={styles.letra} style={venceu ? {animationDelay: `${i * 0.08}s`} : {}}>
            {letra}
          </span>
        ))}
      </p>

      <p className={styles.erradas}>Erros: ({erros}/{ERROS_MAX}): <span className={styles.erradasL}>{erradas.join(", ")}</span></p>

      <Teclado
        letrasTentadas={letrasTentadas}
        palavraSecreta={palavraSecreta}
        jogoAcabou={jogoAcabou}
        onLetra={tentarLetra}
      />

      <div className={styles.mensagemBox}>
        {venceu && <p className={`${styles.mensagem} ${styles.mensagemVitoria}`}>Você ganhou!!!</p>}
        {perdeu && <p className={`${styles.mensagem} ${styles.mensagemDerrota}`}>Você perdeu! A palavra era: <strong>{palavraSecreta}</strong></p>}
      </div> 
    </div>
    </> 
  );
}