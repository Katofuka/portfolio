import stylesContainer from "../../common/styles/Container.module.css";
import styles from "./RemoteWorking.module.css"
import stylesButton from "../../common/styles/Button.module.css";
import React from "react";

export const RemoteWorking = () => {
    return (
        <div id="RemoteWorking" className={`${stylesContainer.block} ${styles.remoteBlock}`}>
            <div className={`${stylesContainer.container} ${styles.remoteContainer}`}>

                <h2 className={styles.remoteH2}>I'm looking opportunities to work</h2>
                <button onClick={() => console.log('click')}
                        className={stylesButton.button}>
                    {'To hire me'}
                </button>
            </div>
        </div>
    )
}