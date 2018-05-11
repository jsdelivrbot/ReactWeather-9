import axios from 'axios' ;

const API_KEY = '35e797356b8be88dc6fe065813269cf9' ;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ; 

export const FETCH_WEATHER = 'FETCH_WEATHER' ;

export function fetchWeather(city){
	
	const URL = `${ROOT_URL}&q=${city},us` ;
	
	const request = axios.get(URL) ;

	console.log('request', request) ;

	return {
		type: FETCH_WEATHER, 
		payload: request 
	}
}