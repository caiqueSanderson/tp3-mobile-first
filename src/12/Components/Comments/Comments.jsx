import styles from "./styles.module.css";

export default function Comments(){
    return(
          <div className={styles.comments}>
            <div className={styles.description}>
              <img className={styles.avatar} src="/16/public/avatar.svg" alt="" />
              <span>Autor</span>
            </div>
            <span>12/06/2018</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              doloremque dolore culpa quam voluptate beatae eaque corrupti sit
              est commodi rerum quasi, necessitatibus rem in! Ullam inventore
              quam accusantium placeat!
            </p>
          </div>
    )
}