import axios from "axios";

//API_BASE='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
const API_KEY=import.meta.env.VITE_KEY_API;
const FORECAST_BASE="https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}"

export const getWeatherCity=async(city)=>{
try {
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    return result.data
} catch (error) {
    return error.response.status
}
    
}
