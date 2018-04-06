
import axios from 'axios'

const API_KEY='c68feb38ea4dd5cff349fecd31e6ca9d';
const NEW_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER='FETCH_WEATHER'
export function fetchWeather(city){
    

    
    const url=`${NEW_URL}&q=${city},us`;
    const request=axios.get(url) 
    return{
    type:FETCH_WEATHER,
    payload:request
    }
}