import React from 'react';
import {LeftColumn} from "./LeftColumn";
import {RightColumn} from "./RightColumn/RightColumn";

export const Content = ({weather}) => {
    return (
        <div className="card-body weather-body d-flex justify-content-between">
            <LeftColumn weather={weather}/>
            <RightColumn weather={weather}/>
        </div>
    )
};