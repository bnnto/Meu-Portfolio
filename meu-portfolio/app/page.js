import styles from "./page.module.css";
import Barra from "./components/Barra"
import Projetos from "./components/Projetos"
import Rodape from "./components/Rodape"
import Jogodaforca from "./components/Jogodaforca"

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

          <section id="skills" className={styles.skills}>
            <div className={styles.carrossel}>
              <div className={styles.tecnol}>
                <img src="/python.svg"/>
                <img src="/kotlin.png"/>
                <img src="/java.svg"/>
                <img src="/c++.svg"/>
                <img src="/django.png"/>
                <img src="/react.svg"/>
                <img src="/linux.svg"/>
                <img src="/git.svg"/>
                <img src="/figma.svg"/>
                <img src="/js.svg"/>
                <img src="/raspb.svg"/>
                <img src="/cnormal.svg"/>
                <img src="/css.svg"/>

                <img src="/python.svg"/>
                <img src="/kotlin.png"/>
                <img src="/java.svg"/>
                <img src="/c++.svg"/>
                <img src="/django.png"/>
                <img src="/react.svg"/>
                <img src="/linux.svg"/>
                <img src="/git.svg"/>
                <img src="/figma.svg"/>
                <img src="/js.svg"/>
                <img src="/raspb.svg"/>
                <img src="/cnormal.svg"/>
                <img src="/css.svg"/>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Projetos />

      <Jogodaforca />

      <Rodape />
    </> 
  );
}