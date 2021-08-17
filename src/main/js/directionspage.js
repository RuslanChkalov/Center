import {Link} from "react-router-dom";
import {NavigationMenu} from "./navigationmenu";

const React = require('react');

export function DirectionsPage() {
    return (
        <div>
            <NavigationMenu activeElement={3} />
            <div className="row"><h2>Directions Page</h2></div>
        </div>
    );
}