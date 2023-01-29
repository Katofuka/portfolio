import styles from "./Skills.module.css";
import stylesContainer from "../../common/styles/Container.module.css";
import React from "react";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div id={"Skills"} className={`${stylesContainer.block} ${styles.skillsBlock}`}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>

                <div className={styles.text}>
                    <h2>My skills</h2>
                </div>

                <div className={styles.skills}>
                    <Skill name={"React"} description={"Some text about React"}/>
                    <Skill name={"TypeScript"} description={"Some text about typescript"}/>
                    <Skill name={"Redux"} description={"Some text about Redux"}/>
                    <Skill name={"JS"} description={"Some text about DTT"}/>
                    <Skill name={"HTML"} description={"Some text about HTML"}/>
                    <Skill name={"CSS"} description={"Some text about CSS"}/>
                </div>
            </div>
        </div>
    )
}