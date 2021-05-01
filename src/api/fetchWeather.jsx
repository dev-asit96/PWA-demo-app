import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '6694de09ccfdf009ffa309749b6456ae';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: { q: query, units: 'metric', APPID: API_KEY },
  });
  return data;
};
