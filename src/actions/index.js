import axios from 'axios';

const API_KEY = 'a6731879d3137bb54c920cc7871e899c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FEATCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);

  return {
    type: FEATCH_WEATHER,
    payload: request
  }
}
