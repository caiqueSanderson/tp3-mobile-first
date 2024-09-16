import styles from "./styles.module.css";
import Card from "./Card";

export default function Explore() {
    const images = ["https://imgnike-a.akamaihd.net/768x768/02987051A12.jpg", "https://imgnike-a.akamaihd.net/768x768/02865551A9.jpg","https://imgnike-a.akamaihd.net/768x768/02634451A4.jpg","https://imgnike-a.akamaihd.net/768x768/029166NXA21.jpg"];
    const titles = ["Women's Air Jordan 1 High OG", "Tênis Jordan Tatum 2 Masculino","Camiseta Jordan Jumpman Masculina","Women's Air Jordan 1 Low"];
    const prices = ["R$ 1599,99", "R$ 1073,49","R$ 132,99","R$ 1199,99"]
    return (
        <>
            <h4>Produtos relacionados</h4>
            <div className={styles.products}>
                <Card image={images[0]} title={titles[0]} price={prices[0]} />
                <Card image={images[1]} title={titles[1]} price={prices[1]} />
                <Card image={images[2]} title={titles[2]} price={prices[2]} />
                <Card image={images[3]} title={titles[3]} price={prices[3]} />
            </div>

        </>
    )
}