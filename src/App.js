import React, {Component} from 'react';
import './App.css';
import weatherService from "./weatherService";
import "./bootstrap.min.css";
import {WeatherForm} from "./Components/WeatherForm";

class App extends Component {
    weather = new weatherService();
    state = {
        weather: {},
        isLoading: false,
        hasError: false
    };

    weatherLoaded = (weather) => {
        this.setState({weather, isLoading: false})
    };

    onError = () => {
        this.setState({hasError: true, isLoading: false})
    };

    getWeather = (city) => {
        this.setState({isLoading: true, hasError: false});
        this.weather.getCurrentWeather(city)
            .then(this.weatherLoaded)
            .catch(this.onError)
    };

    render() {
        const {weather, isLoading, hasError} = this.state;
        const {getWeather} = this;
        return (
            <div className="App container mt-4 mb-4">
                <div className="col-lg-7">
                    <WeatherForm getWeather={getWeather} isLoading={isLoading} hasError={hasError} weather={weather}
                    />
                </div>
            </div>
        )
    }
}

export default App;
