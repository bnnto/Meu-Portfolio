import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.barra}>
        <a href="#sobre">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#experiencias">Experiências</a>
      </div>

      <section id="sobre" className={styles.sobre}>
        <img src="/foto.jpeg" alt="Minha Foto" className={styles.imgFluid}></img>
        <div className={styles.sobreInfo}>
          <h2>Bento Guilherme Gomes Oliveira</h2>
          <p>Estudante de Ciência da Computação - <a href="https://portal.unicap.br/" target="_blank" rel="noopener noreferrer">Universidade Católica de Pernambuco</a></p>
          <p>Atualmente estudando e aprimorando minhas habilidades nas áreas que gosto (Back e Front End).</p>
          <p>Python, C, C++, Java, MySQL, HTML, CSS, JavaScript, Django, Android Studio e mais.</p>

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
      </section>

      <section id="projetos"></section>

      <section id="experiencias"></section>
    </> 
  );
}