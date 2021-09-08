import {Link, useLocation} from "react-router-dom";
import React from 'react';

export function NavigationMenu() {
    const location = useLocation();
    return (
        <div className="row custom">
            <div className="container-custom">
                <div className="row-fluid">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link to="/">
                                <button className={"nav-link py-3" + (location.pathname == "/" ? " active" : "")}
                                        data-bs-toggle="pill"><h5>Главная</h5></button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/doctors">
                                <button className={"nav-link py-3" + (location.pathname == "/doctors" ? " active" : "")}
                                        data-bs-toggle="pill"><h5>Врачи</h5></button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/directions">
                                <button className={"nav-link py-3" + (location.pathname == "/directions" ? " active" : "")}
                                        data-bs-toggle="pill"><h5>Направления</h5></button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schedule">
                                <button className={"nav-link py-3" + (location.pathname == "/schedule" ? " active" : "")}
                                        data-bs-toggle="pill"><h5>Расписание</h5></button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}