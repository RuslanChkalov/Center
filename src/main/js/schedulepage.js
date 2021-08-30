import {Link} from "react-router-dom";
import {NavigationMenu} from "./navigationmenu";
import React from 'react';

export function SchedulePage() {
    return (
        <div>
            <NavigationMenu activeElement={4} />
            <div className="row"><h2>Schedule Page</h2></div>
        </div>
    );
}