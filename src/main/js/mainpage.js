import {Link} from "react-router-dom";
import {NavigationMenu} from "./navigationmenu";
import React from 'react';

export function MainPage() {
    return (
        <div>
            <NavigationMenu/>
            <div className="row">
                <div className="mt-4"/>
                <img className="image-container" src="/images/mainpage_pic1.png" alt={"Медицинский центр"}/>
                <div className="mt-4"/>
                <img className="image-container" src="/images/mainpage_pic2.png" alt={"Схема проезда"}/>
            </div>
        </div>
    );
}