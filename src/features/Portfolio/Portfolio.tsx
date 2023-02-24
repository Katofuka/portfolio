import { Home } from '../Home/Home'
import style from './Portfolio.module.css'
import {Route, Routes} from "react-router-dom";
import {Main} from "../../components/main/Main";
import React from "react";


export const Portfolio =() => {
    return (
        <div className={style.portfolioBlock}>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<Main/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Main/>}/>
            </Routes>
        </div>
    )

}