import styles from "./page.module.css";
import Barra from "./components/Barra";
import Skills from "./components/Skills"
import Projetos from "./components/Projetos";
import Jogodaforca from "./components/Jogodaforca";
import Rodape from "./components/Rodape";

export default function Home() {
  return (
    <>
      <Barra />

      <section className={styles.home}>
        <h4>OI MEU NOME É BENTO</h4>

      </section>

      <section id="sobre" className={styles.sobre}>
        <img src="/foto.jpeg" alt="Minha Foto" className={styles.imgFluid}></img>

        <div className={styles.sobreInfo}>
          <h2>Bento Guilherme Gomes Oliveira</h2>
          <p>Estudante de Ciência da Computação - <a href="https://portal.unicap.br/" target="_blank" rel="noopener noreferrer">Universidade Católica de Pernambuco</a></p>
          <p>Atualmente estudando e aprimorando minhas habilidades nas áreas que gosto (Back e Front End).</p>
          
        </div>
      </section>

      <Skills />

      <Projetos />

      <Jogodaforca />

      <Rodape />
    </> 
  );
}