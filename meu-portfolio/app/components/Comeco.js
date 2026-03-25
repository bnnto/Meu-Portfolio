import styles from "../page.module.css";

export default function Comeco() {
  return (
    <section className={styles.home}>
      <div className={`${styles.homeTexto} fadeUp`}>
        <span className={styles.homeOla}>olá, eu sou</span>
        <h1 className={styles.homeNome}>Bento Guilherme</h1>
        <p className={styles.homeDesc}>Estudante de Ciência da Computação</p>
        <p className={styles.homeDesc}>Back end · Front end</p>
        <a href="Currículo-BentoGuilherme.pdf" target="_blank" className={styles.btnCurriculo}>
            baixar currículo ↓
        </a>
      </div>

      <a href='https://github.com/bnnto' target="_blank" rel="noopener noreferrer" className={`${styles.homeFoto} fadeUp`}>
        <img src="/foto.jpeg" alt="Bento" className={styles.homeFotoImg} />
      </a>
    </section>
  );
}