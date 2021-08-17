import {Link} from "react-router-dom";
import {NavigationMenu} from "./navigationmenu";

const React = require('react');

export function DoctorsPage() {
    return (
        <div>
            <NavigationMenu activeElement={2} />
            <div className="row"><h2>Doctors Page</h2></div>
        </div>
    );
}