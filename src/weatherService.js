export default class weatherService {
    _API_KEY = "8a4c0b2c69e579d9a2af2710ea616778";
    _base_URL = "http://api.openweathermap.org/data/2.5/weather";
    date = new Date();

    getRequest = async (city) =>  {
        const res = await fetch(`${this._base_URL}?q=${city}&appid=${this._API_KEY}&units=metric`);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(res.status);
        }
    };

    getCurrentWeather = async (city) => {
        const weather = await this.getRequest(city);
        return this.transformWeatherData(weather);
    };

    transformDate = (date) => {
        this.date.setTime(date);
        return `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`
    };

    transformWindSpeed = (value) => { // M/S ===> KM/H
        return Math.floor(value / 1000 * 3600) + " km/h";
    };

    transformTemp = (value) => {
        return `${Math.floor(value)}\u00B0`
    };

    transformWeatherData = (data) => {
        return {
            maxTemp: this.transformTemp(data.main.temp_max),
            minTemp: this.transformTemp(data.main.temp_min),
            sunrise: this.transformDate(data.sys.sunrise),
            sunset: this.transformDate(data.sys.sunset),
            pressure: data.main.pressure,
            wind: this.transformWindSpeed(data.wind.speed),
            description: data.weather[0].description,
            country: data.sys.country,
            city: data.name,
            id: data.weather[0].id,
            weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            temp: this.transformTemp(data.main.temp),
        }
    }
}