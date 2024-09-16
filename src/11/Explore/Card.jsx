import styles from "./styles.module.css";

export default function Card(props){
    return(
        <div className={styles.card}>
            <img className={styles.image} src={props.image} alt="" />
            <h4>{props.title}</h4>
            <h5>{props.price}</h5>
        </div>
    )
}