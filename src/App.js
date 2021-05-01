import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const searchWeather = async (e) => {
    if (e.key === 'Enter') {
      const responseData = await fetchWeather(query);
      setWeather(responseData);
      setQuery('');
      console.log(responseData);
    }
  };

  return (
    <div className='main-container'>
      <input
        type='text'
        placeholder='Search....'
        className='search'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyPress={searchWeather}
      />
      {weather.main && (
        <div className='city'>
          <h2 className='city-name'>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>

          <div className='city-temp'>
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className='info'>
            <img
              alt={weather.weather[0].description}
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              className='city-icon'
            />
            <p>{weather.weather[0].description}</p> 
          </div>
        </div>
      )}
    </div>
  );
}
