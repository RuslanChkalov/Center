import {NavigationMenu} from "./navigationmenu";
import {SearchAndFilterBar} from "./searchandfilter";
import React from 'react';
import {InfiniteScroll} from "./infinitescroll";
import {DoctorsCard} from "./doctorscard";

export function DoctorsPage() {

    function getMoreData(json) {
        return (
            [
                <>
                    {json.map(block => (<DoctorsCard block={block}/>))}
                </>
            ]
        )
    }

    return (
        <div>
            <NavigationMenu/>
            <div className="row with_margin">
                <SearchAndFilterBar/>
                <div className="scroll-small" id="scroll_small">
                    <InfiniteScroll scrollerId={"scroll_small"} getMoreData={getMoreData}/>
                </div>
            </div>
        </div>
    );
}