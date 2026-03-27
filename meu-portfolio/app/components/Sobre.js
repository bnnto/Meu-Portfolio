import styles from "../page.module.css";

export default function Sobre(){
    return (
    <>
    <section id="sobre" className={styles.sobre}>
        <div className={`${styles.sobreInfo} fadeUp`}>
            <h1>sobre mim</h1>
            
            <p>Sou estudante de Ciência da Computação na <a href="https://portal.unicap.br/" target="_blank" rel="noopener noreferrer">Universidade Católica de Pernambuco</a> e 
                atualmente estou no 5° período. Durante o curso aprendi diversas tecnologias, mas meu interesse maior foi em back e front end, e é com elas que pretendo 
                fazer diferença na minha carreira.
            </p>
            <p>Aqui você vai encontrar os projetos que desenvolvi ao longo do curso e alguns outros projetos no github.</p>
        </div>
    </section>
    </>
    );
}