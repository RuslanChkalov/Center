import React, {useEffect, useState, useRef} from 'react';
import {useLocation} from "react-router-dom";

export function InfiniteScroll(props) {

    const [postList, setPostList] = useState([]); //concat невозможен с null
    const [page, setPage] = useState(0);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [dataEndReached, setDataEndReached] = useState(false); //Достигнут конец списка
    const [loadingEffectCancelled, setLoadingEffectCancelled] = useState(false); //Запрет отработки эффекта при смене страницы
    const loader = useRef(null);

    async function fetchData(loadedPage) {
        try {
            searchParams.set("page", loadedPage);
            const response = await fetch('/requests' + location.pathname + "?" + searchParams.toString());
            const json = await response.json();
            const bufferList = props.getMoreData(json);

            if (bufferList[0].props.children.length == 0) { //сервер прислал пустой json => данные закончились
                setDataEndReached(true);
            }

            if (loadedPage == 0) {
                setPostList(bufferList);
            } else {
                setPostList(postList.concat(bufferList));
            }
            document.getElementById("spinner").style.visibility = "hidden";

        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        if (props.scrollerId != null) {     //scroller в самый верх, если он есть
            document.getElementById(props.scrollerId).scrollTop = 0;
        }
        setLoadingEffectCancelled(true);
        setDataEndReached(false);
        document.getElementById("content").setAttribute("hidden", "");
        document.getElementById("spinner").style.visibility = "visible";
        setTimeout(function () {    //симуляция задержки отклика сервера для наглядности
            fetchData(0);
            document.getElementById("content").removeAttribute("hidden");
        }, 1000);
    }, [location]);

    useEffect(() => {
        if (loadingEffectCancelled) {
            setLoadingEffectCancelled(false);
            setPage(0);
            return;
        }
        if (page != 0) {
            if (!dataEndReached) {
                document.getElementById("spinner").style.visibility = "visible";
            }
            setTimeout(function () {
                fetchData(page);
            }, 1000);
        }
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
            <div className="row" id="content">
                {postList}
            </div>
            <div className="loading" ref={loader}></div>

            <div className="d-flex justify-content-center mb-5" id="spinner">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    )
}