import styles from "./styles.module.css";

export default function VideoOptions(){
    return(
        <div className={styles.container}>
            <span className={styles.click}>Curtir</span>
            <span className={styles.click}>Compartilhar</span>
            <span className={styles.click}>Salvar</span>
            <span className={styles.click}>Denunciar</span>
        </div>
    )
}