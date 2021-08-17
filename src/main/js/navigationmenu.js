import {Link} from "react-router-dom";

const React = require('react');

export function NavigationMenu(props) {
    const activeElement = props.activeElement;
    return (
        <div className="row custom">
            <div className="container-custom">
                <div className="row-fluid">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link to="/">
                                <button className={"nav-link py-3" + (activeElement == 1 ? " active" : "")}
                                        data-bs-toggle="pill"><h5>Главная</h5></button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/doctors">
                                <button className={"nav-link py-3" + (activeElement == 2 ? " active" : "")}
                                        data-bs-toggle="pill"><h5>Врачи</h5></button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/directions">
                                <button className={"nav-link py-3" + (activeElement == 3 ? " active" : "")}
                                        data-bs-toggle="pill"><h5>Направления</h5></button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schedule">
                                <button className={"nav-link py-3" + (activeElement == 4 ? " active" : "")}
                                        data-bs-toggle="pill"><h5>Расписание</h5></button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}