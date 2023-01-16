import React from "react";
import styles from './Header.module.css'
import {Navigate} from "../navigate/Navigate";

export const Header = () => {
    return (
        <div className={styles.header}>
            <Navigate />
        </div>
    )
}