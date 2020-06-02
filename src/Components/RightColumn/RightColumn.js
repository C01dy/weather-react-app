import React from 'react';
import './RightColumn.css'

export const RightColumn = ({weather}) => {

    const renderList = (obj) => {
        return Object.keys(obj).slice(0, 6).map(key => <li className="list-group-item d-flex">
            <p className="list-item-text m-0"> <span className="text-primary ">{key}</span> &#8212; {obj[key]}</p>
        </li>)
    };

    return (
        <div className="col-lg-9">
            <div className="right-column">
                <ul className="list-group info-list">
                    {renderList(weather)}
                </ul>
            </div>
        </div>
    )
};