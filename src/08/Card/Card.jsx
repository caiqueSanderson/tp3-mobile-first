import styles  from "./styles.module.css";

export default function Card(props){
    return(
        <div className={styles.container}>
            <img className={styles.image} src={props.image}/>
            <div className={styles.containerText}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.text}>{props.text}</p>
                <p className={styles.text}>{props.footer}</p>
            </div>
        </div>
    )
}