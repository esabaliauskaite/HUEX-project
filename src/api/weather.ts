import axios from "axios";
const baseUrl = "http://api.worldweatheronline.com/premium/v1/weather.ashx";

export const fetchWeatherData = (city: string) => {
  let url = `${baseUrl}?key=${process.env.REACT_APP_API_KEY}&q=${city}&format=json&date=today&mca=no&fx24=no&aqi=yes&includelocation=no&tp=24`;
  return axios.get(url, { headers: { "Content-Type": "application/json" } });
};

export const fetchPhotoRef = (city: string) => {
  let url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city}&key=AIzaSyDRvZOa-oOOuIb99KHq7bqG2U9f1mpi2m0&inputtype=textquery&fields=name,photos`;
  return axios.get(url);
};

export const fetchPhoto = (ref: string) => {
  let url = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${ref}&key=${process.env.REACT_APP_API_PHOTOS_KEY}&maxwidth=400&maxheight=400`;
  return axios.get(url, { headers: { "Content-Type": "application/json" } });
};

export const fetchCurrentLocation = (latitude: any, longtitude: any) => {
  let url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longtitude}&key=908276be98cb48d9869155e5f255347b
  `;
  return axios.get(url, { headers: { "Content-Type": "application/json" } });
};

export const fetchExtendedForecastData = (city: string) => {
  let url = `${baseUrl}?key=${process.env.REACT_APP_API_KEY}&q=${city}&format=json&num_of_days=8&tp=24`;
  return axios.get(url, { headers: { "Content-Type": "application/json" } });
};
