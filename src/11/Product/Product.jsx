import { useState } from "react";
import styles from "./styles.module.css"

export default function Product() {
    const imagesUrl = ["https://imgnike-a.akamaihd.net/768x768/02433151A8.jpg",
        "https://imgnike-a.akamaihd.net/768x768/02433151A1.jpg",
        "https://imgnike-a.akamaihd.net/768x768/02433151A4.jpg",
        "https://imgnike-a.akamaihd.net/768x768/02433151A5.jpg"
    ]

    const [image, setImage] = useState(0);

    function nextImage() {
        setImage((prev) => (prev + 1) % imagesUrl.length);
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerTop}>
                <header className={styles.header}>
                    <h2 className={styles.textAlign}>Tênis Air Jordan 1 Mid Masculino</h2>
                    <h3 className={styles.textAlign}>Casual</h3>
                </header>
                <div onClick={nextImage} className={styles.imageProduct}>
                    <img className={styles.image} src={imagesUrl[image]} alt="" />
                    <span className={styles.click}>Próxima Imagem</span>
                </div>
            </div>
            <div className={styles.description}>
                <h2>R$ 1139,99 no Pix</h2>
                <p>Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama, enquanto a escolha de cores e o couro conferem uma identidade distinta.</p>
                <ul className={styles.specifications}>
                    <li>Material: Couro legítimo</li>
                    <li>Tamanho: 38-44</li>
                    <li>Cores: Branco, Preto, Vermelho</li>
                </ul>
            </div>



        </div>
    )
}