import React from 'react';

export const LeftColumn = ({weather}) => {
    const {weatherIcon, description, temp, city, country} = weather;
    return (
        <div className="col-lg-3 left-column">
            <div className="card pb-3 d-flex flex-column align-items-center"
                 style={{maxWidth: "120px"}}>
                <img src={weatherIcon} style={{maxWidth: "100px", maxHeight: "100px"}}
                     className="card-img-top" alt="..."/>
                <div className="card-body pt-0 d-flex flex-column align-items-center">
                    <p className="card-subtitle">{description}</p>
                    <h5 className="card-title mt-2">{temp}</h5>
                </div>
                <h5 className="card-title" style={{fontSize: "13px"}}>
                    {city}
                </h5>
                <h6 className="card-subtitle text-primary">
                    {country}
                </h6>
            </div>
        </div>
    )
};

