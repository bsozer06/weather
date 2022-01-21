import React from 'react';

function WeatherForecast(props) {
    const {weather} = props;

    console.log(props.weather);

    if (!weather) {
        return <p>Loading . . .</p>
    }

  return <>
  <h3>{weather.name} - {weather.coord.lon}, {weather.coord.lon}</h3>
  <h4>{weather.weather.map(data => data.description).join(", ")}</h4>
  <p>{weather.main.temp} °C</p>
  <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
  </>;
}

export default WeatherForecast;