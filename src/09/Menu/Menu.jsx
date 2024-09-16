import styles from "./styles.module.css";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen);
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
          <span className={styles.label}>Serviços</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Produtos</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Sobre nós</span>
        </a>
        <a href="#" className={styles.menuItem}>
          <span className={styles.label}>Contatos</span>
        </a>
      </nav>
    </header>
  )
}