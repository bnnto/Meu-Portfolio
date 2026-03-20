'use client'
import styles from '../page.module.css'

export default function Barra(){
    function toggleTheme(){
        const atual = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', atual === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
        <div className={styles.barra}>
            <a href="#">Home</a>
            <a href="#sobre">Sobre mim</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
            <a href="/jogodaforca" rel="noopener noreferrer">Jogo da Forca</a>

            <button onClick={toggleTheme} className={styles.lightDark}>
            <img src="/moon.svg" className="moon"></img>
            <img src="/sun.svg" className="sun"></img>
            </button>
        </div>  
        </>
    );
}