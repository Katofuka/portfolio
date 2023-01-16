import React from "react";
import styles from './Main.module.css'
import stylesContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <span>Hello!</span>
                    <h1>I`m
                        <span>Poliakova Anne</span>
                    </h1>
                    <span>A Front-End Developer</span>

                </div>
                <div className={styles.photo}>Some photo</div>
            </div>
        </div>
    )
}