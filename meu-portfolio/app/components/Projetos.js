import styles from '../page.module.css'

export default function Projetos(){
    return (
        <>
        <section id="projetos" className={styles.projetos}>
            <h5>projetos e experiências</h5>    

            <div className={styles.projetosLista}>
                <div className={styles.projetosFotos}>
                    <img src="patasnarua.png"></img>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>patas da rua</h6>

                    <p>Patas da Rua é um site focado à proteger e melhorar a qualidade de vida de animais de rua, oferecendo uma 
                    solução tecnológica usando coleiras rastreadoras que permitem monitorar esses animais em tempo real. 
                    O rastreamento permite que a ONG acompanhe o animal e organize apadrinhamentos e adoções.
                    </p>
                    
                    <div className={styles.projetosTags}>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Django</span>

                        <a 
                            href="https://github.com/bnnto/Patas-da-Rua" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            Acessar Código
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}