import styles from "./Project.module.css";
import React from "react";

type SkillPropsType = {
    name: string
    description: string
}

export const Project = (props: SkillPropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                Some icon
            </div>
            <div className={styles.nameSkill}>
                <h3>{props.name}</h3>
            </div>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>

    )
}