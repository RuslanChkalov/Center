import {Link} from "react-router-dom";
import {NavigationMenu} from "./navigationmenu";
import {SearchAndFilterBar} from "./searchandfilter";
import React from 'react';
import {InfiniteScroll} from "./infinitescroll";

export function DoctorsPage() {
    return (
        <div>
            <NavigationMenu activeElement={2}/>
            <div className="row with_margin">
                <SearchAndFilterBar/>
                <InfiniteScroll activeElement={2}/>
            </div>
        </div>
    );
}