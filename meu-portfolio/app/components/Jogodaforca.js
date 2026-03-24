import styles from "../page.module.css";
import Link from "next/link";

export default function Jogodaforca(){
    return (
        <>
        <section id="jogodaforca" className={styles.jogodaforca}>
        
        <h1>jogo da forca</h1>

        <p>Clique no botão abaixo para ver um jogo da forca no site!!!</p>

        <Link href="/jogodaforca" rel="noopener noreferrer" className={styles.jogoLink}>Clique aqui!!!</Link>
    
        </section>
        </>
    );
}