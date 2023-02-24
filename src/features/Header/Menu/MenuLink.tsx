import style from "../Header.module.css";
import {NavLink} from "react-router-dom";
import React, {memo} from "react";

type MenuLinkPropsType = {
    linkHead: string
    moveIndicator: (e: React.MouseEvent<HTMLLIElement>) => void
}

export const MenuLink: React.FC<MenuLinkPropsType> = (props) => {
    console.log('rerender Link Meny')
    return (
        <li className={style.linksHoverHome}
            onMouseOver={props.moveIndicator}>
            <NavLink to={`/${props.linkHead}`}>{props.linkHead}</NavLink>
        </li>
    )
}