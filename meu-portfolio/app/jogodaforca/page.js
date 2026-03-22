"use client"

import styles from "./jogo.module.css"
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const ERROS_MAX = 6;
const palavras = ["variavel", "react", "python", "marcio", "algoritmo", "javascript", "linux", 
  "github", "django", "codigo", "hackaton", "loop", "java", "mysql", "deploy", "debug", 
  "teste", "inteligenciaartificial", "compilador", "constante", "grafo", "complexidade", "cookies",
  "commit", "repositorio", "script", "memoria", "ponteiro", "vetor", "html", "desenvolvedor", "backend",
  "frontend", "ciberseguranca", "bancodedados", "mobile", "kotlin", "string", "encapsulamento",
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
    <div className={styles.container}>
      <h1>jogo da forca</h1>
      <p className={styles.categoria}>Categoria: Progamação</p>

      <Boneco erros={erros} />

      <p className={styles.palavra}>{displayPalavra}</p>

      <p className={styles.erradas}>Erros: ({erros}/{ERROS_MAX}): <span>{erradas.join(", ")}</span></p>

      <Teclado
        letrasTentadas={letrasTentadas}
        palavraSecreta={palavraSecreta}
        jogoAcabou={jogoAcabou}
        onLetra={tentarLetra}
      />

      {venceu && <p className={styles.mensagem}>🎉 Você ganhou!</p>}
      {perdeu && <p className={styles.mensagem}>💀 Você perdeu! A palavra era: <strong>{palavraSecreta}</strong></p>}

      {jogoAcabou && (
        <button className={styles.btnReiniciar} onClick={iniciarJogo}>
          Jogar Novamente
        </button>
      )}
    </div>
    </> 
  );
}