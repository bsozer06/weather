import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usePosition } from 'use-position';
import WeatherForecast from './components/WeatherForecast';

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const App = () => {
    const [weather, setWeather] = useState();
    const {
        latitude,
        longitude,
        // speed,
        // timestamp,
        // accuracy,
        // heading,
        // error,
    } = usePosition();

    const getWeatherData = async (lat, lon) => {
        try {
            const KEY = process.env.REACT_APP_WEATHER_API_KEY;
            const lang = "tr" ?? navigator.language.split("-")[0];
            const unite = "metric";
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&lang=${lang}&units=${unite}`);
            setWeather(data);
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        latitude && longitude && getWeatherData(latitude, longitude);
    }, [latitude, longitude])

    // console.log(latitude, longitude, weather);

    return <>
        <h2>Weather Forecast Based On Your Location</h2>
        <WeatherForecast weather={weather}/>
    </>;
}

export default App;
