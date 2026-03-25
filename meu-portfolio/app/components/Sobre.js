import styles from "../page.module.css";

export default function Sobre(){
    return (
    <>
    <section id="sobre" className={styles.sobre}>
        <div className={`${styles.sobreInfo} fadeUp`}>
            <h1>sobre mim</h1>
            
            <p>Estudante de Ciência da Computação - <a href="https://portal.unicap.br/" target="_blank" rel="noopener noreferrer">Universidade Católica de Pernambuco</a></p>
            <p>Atualmente estudando e aprimorando minhas habilidades nas áreas que gosto (Back e Front End).</p>
        </div>
    </section>
    </>
    );
}