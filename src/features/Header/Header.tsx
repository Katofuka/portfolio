import style from "./Header.module.css";
import React from "react";
import {Menu} from "./Menu/Menu";


export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}></div>
            <Menu />
        </div>
    )
}