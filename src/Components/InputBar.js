import React, {Component} from 'react';

export class InputBar extends Component {

    state = {
        cityName: null
    };

    onGetWeather = e => {
        e.preventDefault();
        return this.props.getWeather(this.state.cityName);
    };

    onChangeCityName = e => {
        this.setState({
            cityName: e.currentTarget.value
        })
    };

    render(){

        return (
            <form onSubmit={this.onGetWeather} className="input-group">
                <input onChange={this.onChangeCityName} type="text" className="form-control" placeholder="Enter the city name"
                       aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-primary"  id="button-addon2">Get weather</button>
                </div>
            </form>
        )
    }
}