import style from "../Header.module.css";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";

type MenuLinkPropsType = {
    linkHead: string
    moveIndicator: (e: EventTarget & HTMLLIElement) => void
    setActiveLink: (e: EventTarget & HTMLLIElement) => void
}

export const MenuLink: React.FC<MenuLinkPropsType> = (props) => {
    const {
        linkHead,
        moveIndicator,
        setActiveLink
    } = props

    const [activeItem, setActiveItem] = useState<string>('')

    const activeStyle = {color: "#fff"}

    const handleMouseOver = (e: React.MouseEvent<HTMLLIElement>) => {
        moveIndicator(e.currentTarget)
        if(activeItem === linkHead) {
            setActiveLink(e.currentTarget)
            console.log('handleMouseOver', e.currentTarget)
        }
    }

    return (
        <li className={style.linksHoverHome} onMouseOver={handleMouseOver}>
            <NavLink
                to={`/${linkHead}`}
                style={({isActive}) => {
                    if (isActive)
                        setActiveItem(linkHead)
                    return (isActive ? activeStyle : undefined)
                }}
            >
                {linkHead}
            </NavLink>
        </li>
    )
}