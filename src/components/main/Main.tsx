import React from "react";
import styles from './Main.module.css'
import stylesContainer from "../../common/styles/Container.module.css"


export const Main = () => {
    return (
        <div id={"Main"} className={`${stylesContainer.block} ${styles.mainBlock}`}>
            <div className={`${stylesContainer.container} ${styles.mainContainer}`}>
                <div className={styles.text}>
                    <span>Hello!</span>
                    <h1>I`m
                        <span>Anne Poliakova</span>
                    </h1>
                    <span>A Front-End Developer</span>

                </div>
                <div className={styles.photo}>
                    {/*<img src={"../../common/images/myPhoto.jpg"} alt={'AnnePoliakova'}/>*/}
                </div>
            </div>
        </div>
    )
}