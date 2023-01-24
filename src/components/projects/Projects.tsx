import styles from "./Projects.module.css";
import stylesContainer from "../../common/styles/Container.module.css";
import React from "react";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>

                <div className={styles.text}>
                    <h2>My projects</h2>
                </div>

                <div className={styles.projects}>
                    <Project name={"Todo"} description={"Some text about Todo"}/>
                    <Project name={"Social"} description={"Some text about Social"}/>
                    <Project name={"Counter"} description={"Some text about Counter"}/>
                </div>
            </div>
        </div>
    )
}