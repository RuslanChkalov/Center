import {NavigationMenu} from "./navigationmenu";
import {InfiniteScroll} from "./infinitescroll";
import {DirectionsCard} from "./directionscard";
import React from 'react';

export function DirectionsPage() {

    function getMoreData(json) {
        return (
            [
                <>
                    {json.map(block => (<DirectionsCard block={block}/>))}
                </>
            ]
        )
    }


    return (
        <div>
            <NavigationMenu/>
            <div className="row with_margin">
                <div className="scroll-full">
                    <InfiniteScroll getMoreData={getMoreData}/>
                </div>
            </div>
        </div>
    );
}