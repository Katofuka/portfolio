import React from 'react';
import style from './AppCavani.module.css';
import {Photo} from "../features/Photo/Photo";
import {Portfolio} from "../features/Portfolio/Portfolio";
import {Header} from "../features/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Main} from '../components/main/Main';
import {Home} from "../features/Home/Home";


export const AppCavani = () => {
    return (

        <div className={style.app}>
            <div className={style.leftBorder}></div>
            <div className={style.rightBorder}></div>
            <div className={style.topbar}></div>
            <div className={style.mobileMunu}></div>
            <Header/>
            <div className={style.main}>
                <Photo/>
                <Portfolio/>
            </div>


        </div>

    )
}


