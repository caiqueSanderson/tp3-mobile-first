import styles from "./styles.module.css";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLigth, setIsLigth] = useState('.ligthTheme')

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen);
  };

  function toggleTheme(){
    setIsLigth('.darkTheme');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          className={styles.image}
          src="https://img.myloview.com.br/adesivos/foto-nao-encontrada-icone-vector-simbolo-sinal-400-133715057.jpg"
          alt="Logo"
        />
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>☰</div>
      <nav className={`${styles.menu} ${isMenuOpen ? styles.show : ""}`}>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Home</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Videos</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Contatos</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label} onClick={toggleTheme}>Modo Dark</span>
        </a>
      </nav>
    </header>
  )
}