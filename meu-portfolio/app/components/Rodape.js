import styles from "../page.module.css";

export default function Rodape(){
    return (
        <>
        <footer id="contato" className={styles.footer}>
            <div className={styles.retang}>
                <div className={styles.footerEsq}>
                    <p className={styles.footerNome}>© Bento Guilherme 2026</p>
                </div>
                <div className={styles.footerDir}>
                    <h3>contato</h3>
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