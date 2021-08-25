const React = require('react');

export function SearchAndFilterBar(props) {
    const directionList = props.directionList;
    return (
        <div className="row mt-4">
            <select className="form-select">
                <option selected>Все направления</option>
                {directionList.map((direction, index) => (
                    <option value={index}>{direction}</option>
                ))}
            </select>

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Фамилия, имя, отчество врача"></input>
                <div className="input-group-append">
                    <button className="btn btn-violet">Поиск</button>
                </div>
            </div>

        </div>
    );
}