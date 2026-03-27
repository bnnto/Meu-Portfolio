import styles from '../page.module.css';

export default function Projetos(){
    return (
        <>
        <section id="projetos" className={`${styles.projetos} fadeUp`}>
            <h5>projetos e experiências</h5>    

            <div className={`${styles.projetosLista} fadeUp`}>
                <div className={styles.projetosFotos}>
                    <a href='https://github.com/bnnto/Patas-da-Rua' target="_blank" rel="noopener noreferrer">
                        <img src="patasdarua.png" />
                    </a>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>patas da rua</h6>

                    <p>Patas da Rua é um site focado à <b>proteger e melhorar a qualidade de vida</b> de animais de rua, oferecendo uma 
                    solução tecnológica usando <b>coleiras rastreadoras</b> que permitem monitorar esses animais em <b>tempo real</b>. 
                    O rastreamento permite que a <b>ONG</b> acompanhe o animal e organize <b>apadrinhamentos e adoções</b>.
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

            <div className={`${styles.projetosLista} fadeUp`}>
                <div className={`${styles.projetosFotos} ${styles.fotoMenor}`}>
                    <a href='https://github.com/bnnto/Meu-Portfolio' target="_blank" rel="noopener noreferrer">
                        <img src="/portdark.png" />
                    </a>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>portfólio pessoal</h6>

                    <p>Portfólio pessoal criado para reunir minhas informações, projetos, contato e jogo da forca, ao mesmo tempo em que serve como um 
                        <b>aprimoramento</b> para minhas habilidades em desenvolvimento front-end com <b>React</b> e <b>CSS</b>.
                    </p>
                    
                    <div className={styles.projetosTags}>
                        <span>React.js</span>
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

            <div className={`${styles.projetosLista} fadeUp`}>
                <div className={`${styles.projetosFotos} ${styles.fotoGrande}`}>
                    <a href='https://github.com/joao0cb/Projeto-Coliceu' target="_blank" rel="noopener noreferrer">
                        <img src="coliceu.jpeg"/>
                    </a>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>coliceu</h6>

                    <p>O <b>Coliceu</b> é um aplicativo de mapeamento arqueológico feito em <b>Kotlin</b> e <b>Java</b> que permite que o arqueólogo possa mapear <b>sítios arqueológicos</b>
                        diretamente a partir de imagens adicionar <b>pontos-zero</b>, registrar artefatos descobertos e organizar seus detalhes de 
                        forma <b>clara</b> e <b>acessível</b>.
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

            <div className={`${styles.projetosLista} fadeUp`}>
                <div className={styles.projetosFotos}>
                    <a href='https://github.com/LucasMN0/Labirinto' 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img src="labirinto.png"/>
                    </a>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>labirinto</h6>

                    <p><b>Labirinto</b> é um jogo feito 100% em Java para jogar no <b>terminal</b>, onde você anda pelo labirinto e pode encontrar <b>inimigos</b>
                        e <b>armadilhas</b> pelo caminho, além de <b>tesouros</b> o jogo tem classes, nível de dificuldade, saves, loja de itens, consumíveis
                        e muito <b>mais</b>!
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

            <div className={`${styles.projetosLista} fadeUp`}>
                <div className={styles.projetosFotos}>
                    <img src="hackaton.jpeg"/>
                </div>

                <div className={styles.projetosInfo}>
                    <h6>hackathon - extensão em ação</h6>

                    <p>
                        O <b>Hackathon</b> em questão teve foco na comunidade de <b>Santo Amaro</b>, na qual necessitava de projetos que não fossem a curto prazo.
                        Portanto, eu e meu grupo pensamos, conversamos e criamos um projeto, que ainda está sendo desenvolvido, chamado <b>"Mulheres do Amanhã"</b>.
                        Temos a ideia de dar uma visão de futuro para cada <b>mulher</b> da comunidade, sendo no <b>âmbito pessoal e profissional</b>. 
                    </p>

                    <div className={styles.projetosTags}>
                        <span>Em desenvolvimento</span>
                    </div>
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