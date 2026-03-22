'use client'
import styles from '../page.module.css'
import Link from "next/link"

export default function Barra(){
    function toggleTheme(){
        const atual = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', atual === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
        <div className={styles.barra}>
            <Link href="#">Home</Link>
            <Link href="#sobre">Sobre mim</Link>
            <Link href="#projetos">Projetos</Link>
            <Link href="#contato">Contato</Link>
            <Link href="/jogodaforca" rel="noopener noreferrer">Jogo da Forca</Link>

            <button onClick={toggleTheme} className={styles.lightDark}>
                <img src="/moon.svg" className="lua" />
                <img src="/sun.svg" className="sol" />
            </button>
        </div>  
        </>
    );
}