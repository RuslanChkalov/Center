import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";

export function SearchAndFilterBar() {

    const [items, setItems] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/requests/directions?page=-1`);
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
    const searchParams = new URLSearchParams(location.search);


    function comboboxHandleClick(e) {
        searchParams.set("directionId", e.target.value);
        history.push(location.pathname + "?" + searchParams.toString());
    }

    function searchbuttonHandleClick(e) {
        const searchData = document.getElementById("searchField").value;
        searchParams.set("fio", searchData);
        history.push(location.pathname + "?" + searchParams.toString());
    }


    return (
        <div className="row searchandfilter">
            <select id="comboBox" className="form-select mt-4" onChange={comboboxHandleClick}>
                <option key={-1} value={-1}>Все направления</option>
                {items.map((direction) => (
                    <option
                        selected={(searchParams.get("directionId") == direction.medicalDirectionId ? "selected" : "")}
                        key={direction.medicalDirectionId}
                        value={direction.medicalDirectionId}>{direction.medicalDirectionName}</option>
                ))}
            </select>
            <div className="input-group mt-4">
                <input id="searchField" defaultValue={searchParams.get("fio")} type="text" className="form-control"
                       placeholder="Фамилия, имя, отчество врача"/>
                <div className="input-group-append">
                    <button onClick={searchbuttonHandleClick} className="btn btn-violet">Поиск</button>
                </div>
            </div>
        </div>
    );
}
