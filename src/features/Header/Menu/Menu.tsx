import style from "./Menu.module.css";
import React, {useCallback, useRef, useState} from "react";
import {MenuLink} from "./MenuLink";


export const Menu = () => {
    const indicatorRef = useRef<HTMLSpanElement>(null);
    const [activeLink, setActiveLink] = useState<EventTarget & HTMLLIElement | null>(null)

    const moveIndicator = (item: EventTarget & HTMLLIElement) => {
        const indicator = indicatorRef.current
        if (indicator) {
            const activeLeft = item.offsetLeft
            const activeWidth = item.offsetWidth
            indicator.style.width = `${activeWidth}px`;
            indicator.style.left = `${activeLeft}px`;
        }
    }

    // const handleMouseEnter = () => {
    //     console.log('mouse Enter: ', activeLink)
    //     if(activeLink) {
    //         const activeItem = document.querySelector(`li a[href="/${activeLink}"]`)
    //         if(activeItem){
    //             moveIndicator(activeItem.parentNode as HTMLLIElement)
    //         }
    //     }
    // }

    const moveIndicatorToActive = () => {
        console.log('mouse leave: ', activeLink)
        const indicator = indicatorRef.current
        if (indicator && activeLink) {
            const activeLeft = activeLink.offsetLeft
            const activeWidth = activeLink.offsetWidth
            indicator.style.width = `${activeWidth}px`;
            indicator.style.left = `${activeLeft}px`;
            console.log('mouse leave: ', `${activeWidth}px`, `${activeLeft}px`)
        }
    }

    return (
        <nav className={style.menu} onMouseLeave={moveIndicatorToActive} >
            <ul className={style.links}>
                <MenuLink
                    setActiveLink={setActiveLink}
                    moveIndicator={moveIndicator}
                    linkHead={'home'}/>
                <MenuLink
                    setActiveLink={setActiveLink}
                   moveIndicator={moveIndicator}
                    linkHead={'about'}/>
                <MenuLink
                    setActiveLink={setActiveLink}
                     moveIndicator={moveIndicator}
                    linkHead={'portfolio'}/>
                <MenuLink
                    setActiveLink={setActiveLink}
                    moveIndicator={moveIndicator}
                    linkHead={'contact'}/>
                <span ref={indicatorRef} className={style.indicator}></span>
            </ul>


        </nav>
    )
}