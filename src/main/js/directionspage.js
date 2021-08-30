import {Link} from "react-router-dom";
import {NavigationMenu} from "./navigationmenu";
import React from 'react';
import {InfiniteScroll} from "./infinitescroll";


export function DirectionsPage() {
    return (
        <div>
            <NavigationMenu activeElement={3} />
            <div className="row with_margin">
                <InfiniteScroll activeElement={3}/>
            </div>
        </div>
    );
}