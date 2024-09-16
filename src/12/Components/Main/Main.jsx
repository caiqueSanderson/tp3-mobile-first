import styles from "./styles.module.css";

import VideoOptions from "../VideoOptions/VideoOptions";

export default function Main() {
    return (
        <>
            <div className={styles.page}>
                <img className={styles.imageVideo} src="https://media.videosolo.com/resources/youtube-video-is-not-available.jpg" alt="" />
                <VideoOptions />
                <h3 className={styles.title}>Title</h3>
                <div className={styles.description}>
                    <img className={styles.avatar} src="src/12/assets/avatar.svg" alt="" />
                    <span>Autor</span>
                </div>
                <h4>Descrição</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo necessitatibus perspiciatis sapiente maxime! Quos exercitationem fugit nulla architecto magni eligendi optio in sint quod dolor. Optio necessitatibus voluptas velit.</p>
            </div>
        </>
    )
}