import axios from "axios";
const baseUrl = "http://api.worldweatheronline.com/premium/v1/weather.ashx";

export const fetchWeatherData = (city: string) => {
  let url = `${baseUrl}?key=${process.env.REACT_APP_API_KEY}&q=${city}&format=json&date=today&mca=no&fx24=no&aqi=yes&includelocation=no&tp=24`;
  return axios.get(url, { headers: { "Content-Type": "application/json" } });
};

export const fetchPhoto = (city: string) => {
  let url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?=input=${city}&key=${process.env.REACT_APP_API_PHOTOS_KEY}&inputtype=textquery&fields=name,photos`;
  return axios.get(url, { headers: { "Content-Type": "application/json" } });
};

export const fetchExtendedForecastData = (city: string) => {
  let url = `${baseUrl}?key=${process.env.REACT_APP_API_KEY}&q=${city}&format=json&num_of_days=8&tp=24`;
  return axios.get(url, { headers: { "Content-Type": "application/json" } });
};
