import React from 'react';
import {InputBar} from "./InputBar";

export const Header = ({getWeather}) => {
    return (
        <div className="card-header align-items-center">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-4">
                    <h5 className="header-title mt-2">WeatherApp</h5>
                </div>
                <div className="col-lg-7">
                    <InputBar getWeather={getWeather}/></div>
            </div>
        </div>
    )
};