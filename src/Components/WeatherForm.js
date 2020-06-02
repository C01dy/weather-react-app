import React from 'react';
import {Header} from "./Header";
import {Content} from "./Content";
import {LoadingSpinner} from "./LoadingSpinner/LoadingSpinner";
import {Preview} from "./Preview";
import {ErrorMessage} from "./ErrorMessage";

export const WeatherForm = ({getWeather, weather, isLoading, hasError}) => {

    const contentView = !isLoading && !hasError && JSON.stringify(weather) !== "{}" ?
        <Content weather={weather}/> : null;
    const loadingIndicator = isLoading ? <LoadingSpinner/> : null;
    const preview = !isLoading && !hasError && JSON.stringify(weather) === "{}" ? <Preview/> : null;
    const errorMessage = hasError ? <ErrorMessage/> : null;

    return (
        <div className="card">
            <Header getWeather={getWeather}/>
            {contentView}
            {loadingIndicator}
            {preview}
            {errorMessage}
        </div>
    )
};