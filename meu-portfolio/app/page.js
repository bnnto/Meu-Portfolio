import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.barra}>
        <a href="#sobre">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>

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

      <section id="projetos" className={styles.projetos}>
        

      </section>

      <footer id="contato" className={styles.footer}>
        <div className={styles.retang}>
          <div className={styles.footerEsq}>
            <p className={styles.footerNome}>Bento Guilherme</p>
            <p className={styles.footerC}>© 2026 por <b>bnnto</b></p>
          </div>
          <div className={styles.footerDir}>
            <h3 className={styles.footerContato}>Contato</h3>
            <div className={styles.divSociais}>
              <a href="https://github.com/bnnto" target="_blank" rel="noopener noreferrer" className={styles.minhasSociais}>
                <img src="/github.svg"/>
              </a>
              <a href="https://www.linkedin.com/in/bento-guilherme/" target="_blank" rel="noopener noreferrer" className={styles.minhasSociais}>
                <img src="/linkedin.svg"/>
              </a>
              <a href="mailto:gbento555@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.minhasSociais}>
                <img src="/email.svg"/>
              </a>
              <a href="/Currículo-BentoGuilherme.pdf" target="_blank" rel="noopener noreferrer" className={styles.minhasSociais}>
                <img src="/curriculo.svg"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </> 
  );
}