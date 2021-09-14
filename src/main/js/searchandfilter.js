import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";

export function SearchAndFilterBar() {

    const [items, setItems] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/requests/getmedicaldirections`);
                const json = await response.json();
                setItems(json);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [])

    const location = useLocation();
    let history = useHistory();

    function comboboxHandleClick(e) {
        if (location.search.includes("directionId="))
            history.push(location.pathname + location.search.replace(/(directionId)(=|=-)\d+/, "directionId=" + e.target.value));
        else
            history.push(location.pathname + (location.search == "" ? "?directionId=" : (location.search + "&directionId=")) + e.target.value);
    }

    function searchbuttonHandleClick(e) {
        const searchData = document.getElementById("searchField").value;
        if (location.search.includes("fio=")) {
            history.push(location.pathname + location.search.replace(searchFioInURL(), "=" + searchData));
        } else
            history.push(location.pathname + (location.search == "" ? "?fio=" : (location.search + "&fio=")) + searchData);
    }

    function searchFioInURL() {
        if (location.search != 0 & location.search.includes("fio="))
            return location.search.match(/(fio)(.*?)(&|$)/)[2];
        else
            return null;
    }

    function getFioFromURL() {
        if (searchFioInURL() != null) {
            let cleaner = searchFioInURL().replace("=", "");
            return decodeURI(cleaner);
        } else
            return "";
    }

    let redirectionId = location.search.match(/(directionId)(=|=-)\d+/);
    if (redirectionId != null)
        redirectionId = redirectionId[0].replace(/(directionId)(=|=-)/, "");

    return (
        <div className="row searchandfilter">
            <select id="comboBox" className="form-select mt-4" onChange={comboboxHandleClick}>
                <option key={-1} value={-1}>Все направления</option>
                {items.map((direction) => (
                    <option selected={(redirectionId == direction.id ? "selected" : "")} key={direction.id}
                            id={direction.id} value={direction.id}>{direction.name}</option>
                ))}
            </select>
            <div className="input-group mt-4">
                <input id="searchField" defaultValue={getFioFromURL()} type="text" className="form-control"
                       placeholder="Фамилия, имя, отчество врача"/>
                <div className="input-group-append">
                    <button onClick={searchbuttonHandleClick} className="btn btn-violet">Поиск</button>
                </div>
            </div>
        </div>
    );
}
