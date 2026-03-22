import styles from '../page.module.css'

export default function Projetos(){
    return (
        <>
        <section id="projetos" className={styles.projetos}>
            <h5>projetos e experiências</h5>    

            <div className={styles.projetosLista}>
                <div className={styles.projetosFotos}>
                    <a href='https://github.com/bnnto/Patas-da-Rua' target="_blank" rel="noopener noreferrer">
                        <img src="patasdarua.png" />
                    </a>
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

            <div className={styles.projetosLista}>
                <div className={`${styles.projetosFotos} ${styles.fotoMenor}`}>
                    <a href='https://github.com/bnnto/Meu-Portfolio' target="_blank" rel="noopener noreferrer">
                        <img src="portfolio.png" />
                    </a>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>portfólio pessoal</h6>

                    <p>Portfólio pessoal criado para reunir minhas informações, projetos, contato e jogo da forca, ao mesmo tempo em que serve como um 
                        aprimoramento para minhas habilidades em desenvolvimento front-end com React e CSS.
                    </p>
                    
                    <div className={styles.projetosTags}>
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Next.js</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>

                        <a 
                            href="https://github.com/bnnto/Meu-Portfolio" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            Acessar Código
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.projetosLista}>
                <div className={`${styles.projetosFotos} ${styles.fotoGrande}`}>
                    <a href='https://github.com/joao0cb/Projeto-Coliceu' target="_blank" rel="noopener noreferrer">
                        <img src="coliceu.jpeg"/>
                    </a>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>coliceu</h6>

                    <p>O Coliceu é um aplicativo de mapeamento arqueológico feito em Kotlin e Java que permite que o arqueólogo possa mapear sítios arqueológicos
                        diretamente a partir de imagens adicionar pontos-zero, registrar artefatos descobertos e organizar seus detalhes de 
                        forma clara e acessível.
                    </p>
                    
                    <div className={styles.projetosTags}>
                        <span>Kotlin</span>
                        <span>Java</span>
                        <span>Android Studio</span>

                        <a 
                            href="https://github.com/joao0cb/Projeto-Coliceu" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            Acessar Código
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.projetosLista}>
                <div className={styles.projetosFotos}>
                    <a href='https://github.com/LucasMN0/Labirinto' 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img src="labirinto.png"/>
                    </a>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>labirinto</h6>

                    <p>Labirinto é um jogo feito 100% em Java para jogar no terminal, onde você anda pelo labirinto e pode encontrar inimigos
                        e armadilhas pelo caminho, além de tesouros o jogo tem classes, nível de dificuldade, saves, loja de itens, consumíveis
                        e muito mais!
                    </p>
                    
                    <div className={styles.projetosTags}>
                        <span>Java</span>

                        <a 
                            href="https://github.com/LucasMN0/Labirinto" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            Acessar Código
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.projetosLista}>
                <div className={styles.projetosFotos}>
                    <img src="hackaton.jpeg"/>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>hackaton - extensão em ação</h6>

                    <p>
                        aaaaaaaaaa
                    </p>
                </div>
            </div>
        </section>
        <a href="https://github.com/bnnto" className={styles.maisProj}>
            <span className={styles.texto}>veja mais projetos aqui</span>
            <img src="github.svg" className={styles.img} />
        </a>
        </>
    );
}