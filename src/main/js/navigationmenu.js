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
                                {activeElement==1
                                    ? <button className="nav-link active py-3" data-bs-toggle="pill"><h5>Главная</h5></button>
                                    : <button className="nav-link py-3" data-bs-toggle="pill"><h5>Главная</h5></button>
                                }
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/doctors">
                                {activeElement==2
                                    ? <button className="nav-link active py-3" data-bs-toggle="pill"><h5>Врачи</h5></button>
                                    : <button className="nav-link py-3" data-bs-toggle="pill"><h5>Врачи</h5></button>
                                }
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/directions">
                                {activeElement==3
                                    ? <button className="nav-link active py-3" data-bs-toggle="pill"><h5>Направления</h5></button>
                                    : <button className="nav-link py-3" data-bs-toggle="pill"><h5>Направления</h5></button>
                                }
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schedule">
                                {activeElement==4
                                    ? <button className="nav-link active py-3" data-bs-toggle="pill"><h5>Расписание</h5></button>
                                    : <button className="nav-link py-3" data-bs-toggle="pill"><h5>Расписание</h5></button>
                                }
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}