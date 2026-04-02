'use client'
import styles from '../page.module.css';
import Link from "next/link";

export function toggleTheme(){
    const atual = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', atual === 'dark' ? 'light' : 'dark');
}

export default function Barra(){
    return (
        <>
        <div className={styles.barra}>
            <a href="#">Home</a>
            <a href="#sobre">Sobre mim</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
            <a href="/jogodaforca" rel="noopener noreferrer">Jogo da Forca</a>

            <button onClick={toggleTheme} className={styles.lightDark}>
                <img src="/moon.svg" className="lua" />
                <img src="/sun.svg" className="sol" />
            </button>
        </div>  
        </>
    );
}