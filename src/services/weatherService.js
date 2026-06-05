import axios from "axios";

console.log("API KEY =", import.meta.env.VITE_WEATHER_KEY);

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export const getWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};