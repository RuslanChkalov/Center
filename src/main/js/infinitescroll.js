import React, {useEffect, useState, useRef} from 'react';

export function InfiniteScroll(props) {

    const [page, setPage] = useState(1);
    const [postList, setPostList] = useState(props.getMoreData(page));
    const loader = useRef(null);

    useEffect(() => {
        var options = {
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

    useEffect(() => {
        // On scroll data update
       setPostList(postList.concat(props.getMoreData(page)));
    }, [page])

    // Page counter
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }

    return (
        <div className="row mt-5">
            {postList}
            <div className="loading" ref={loader}></div>
        </div>
    )
}