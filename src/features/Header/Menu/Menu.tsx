import style from "./Menu.module.css";
import React, {useCallback, useRef, useState} from "react";
import {MenuLink} from "./MenuLink";


export const Menu =() => {
    const [activeWidth, setActiveWidth] = useState<number>(0)
    const [activeLeft, setActiveLeft] = useState<number>(0)
    const indicatorRef = useRef<HTMLSpanElement>(null);

    const moveIndicator = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        const item = e.currentTarget
        const indicator = indicatorRef.current
        if(indicator) {
            setActiveLeft(item.offsetLeft)
            setActiveWidth(item.offsetWidth)
            indicator.style.width = `${activeWidth}px`;
            indicator.style.left = `${activeLeft}px`;
        }

    },[indicatorRef])
    return (
        <nav className={style.menu}>
            <ul className={style.links}>
                <MenuLink moveIndicator={moveIndicator} linkHead={'home'}/>
                <MenuLink moveIndicator={moveIndicator} linkHead={'about'}/>
                <MenuLink moveIndicator={moveIndicator} linkHead={'portfolio'}/>
                <MenuLink moveIndicator={moveIndicator} linkHead={'contact'}/>
                <span ref={indicatorRef} className={style.indicator}></span>
            </ul>


        </nav>
    )
}