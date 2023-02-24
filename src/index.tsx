import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppCavani} from "./app/AppCavani";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <AppCavani/>
    </BrowserRouter>
);

