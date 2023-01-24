import styles from "./Project.module.css";
import stylesButton from "../../../common/styles/Button.module.css";
import React from "react";

type SkillPropsType = {
    name: string
    description: string
}

export const Project = (props: SkillPropsType) => {
    return (
        <div className={styles.project}>

            <div className={styles.openProject}>
                <button onClick={() => console.log('click')}
                        className={stylesButton.button + " " + styles.openProjectButton}>
                    {props.name}
                </button>
            </div>

            <div className={styles.projectInfo}>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description} Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit
                </div>
            </div>
        </div>

    )
}