import React, {useEffect, useState, useRef} from 'react';
import {useLocation} from "react-router-dom";

export function InfiniteScroll(props) {

    const [postList, setPostList] = useState([null]);
    const [page, setPage] = useState(0);
    const loader = useRef(null);
    const location = useLocation();

    async function fetchData(loadedPage) {
        if (page==0) {return;}
        try {
            const response = await fetch('/requests' + location.pathname +
                (location.search == "" ? "?page=" : (location.search + "&page=")) + loadedPage);
            const json = await response.json();
            setPostList(props.getMoreData(json));
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
            fetchData(1);
    }, [location]);

    useEffect(() => {
        fetchData(page);
    }, [page]);


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        // initialize IntersectionObserver
        // and attaching to Load More div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);

    // Page counter
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1);
        }
    }

    return (
        <div className="row mt-5">
            {postList}
            <div className="loading" ref={loader}></div>
        </div>
    )
}