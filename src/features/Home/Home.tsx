import style from './Home.module.css'
import {NavLink} from "react-router-dom";

export const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.content}>
                <h3 className={style.name}>Anna Poliakova</h3>
                <span className={style.line}></span>
                <h3 className={style.job}>
                    <span className={style.headline}>
                        <span className={style.blc}></span>
                        <span className={style.wordsWrapper}></span>
                    </span>
                </h3>
                <div className={style.tmButton}>
                    <NavLink to={'/about'}>Learn More</NavLink>
                </div>
            </div>

        </div>
    )
}