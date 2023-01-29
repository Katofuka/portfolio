import React from "react";
import styles from './Navigate.module.css'

export const Navigate = () => {
    return (

        <div className={styles.navigate}>
            <a href="#Main">Главная</a>
            <a href="#Skills">Скилы</a>
            <a href="#Projects">Работы</a>
            <a href="#Contacts">Контакты</a>

        </div>


    )
}