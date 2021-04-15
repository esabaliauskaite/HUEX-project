import "./App.css";
import { useState } from "react";
import { Cards } from "./Components/Cards";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  fetchWeatherData,
  fetchExtendedForecastData,
  fetchCurrentLocation,
} from "./api/weather";
import sunsetSvg from "./img/sunset.svg";
import sunriseSvg from "./img/sunrise.svg";
import windSvg from "./img/wind.svg";
import rainPosSvg from "./img/partly-cloudy-day-rain.svg";
import uvSvg from "./img/uv.svg";
import visibilitySvg from "./img/visibility.svg";
import airqSvg from "./img/airq.svg";
import humiditySvg from "./img/humidity.gif";
import WeatherSvg from "./Components/WeatherSvg";
import { WeekCard } from "./Components/WeekCard";
import PlacesAutocomplete from "react-places-autocomplete";

function App() {
  const [city, setCity] = useState("Linz, Austria");
  const [temperature, setTemperature] = useState("10");
  const [temperatureF, setTemperatureF] = useState("50");
  const [showTemperature, setShowTemperature] = useState(true);
  const [showWeek, setShowWeek] = useState(false);
  const [desc, setDesc] = useState("Partly Cloudy");
  const [chanceOfRain, setChanceOfRain] = useState("30");
  const [UVValue, setUVValue] = useState("4");
  const [wind, setWind] = useState("6.8 km/h");
  const [sunrise, setSunrise] = useState("6:35 AM");
  const [sunset, setSunset] = useState("5:47 PM");
  const [humidity, setHumidity] = useState("15");
  const [visibility, setVisibility] = useState("5.2");
  const [airQuality, setAirQuality] = useState("82");
  const [dir, setDir] = useState("Direction: 25 (NNE)");
  const [code, setCode] = useState("116");
  const [value, setValue] = useState("");

  const [firstDate, setFirstDate] = useState("");
  const [firstID, setFirstID] = useState("");
  const [firstMax, setFirstMax] = useState("");
  const [firstMin, setFirstMin] = useState("");
  const [firstMaxF, setFirstMaxF] = useState("");
  const [firstMinF, setFirstMinF] = useState("");

  const [secondDate, setSecondDate] = useState("");
  const [secondID, setSecondID] = useState("");
  const [secondMax, setSecondMax] = useState("");
  const [secondMin, setSecondMin] = useState("");
  const [secondMaxF, setSecondMaxF] = useState("");
  const [secondMinF, setSecondMinF] = useState("");

  const [thirdDate, setThirdDate] = useState("");
  const [thirdID, setThirdID] = useState("");
  const [thirdMax, setThirdMax] = useState("");
  const [thirdMin, setThirdMin] = useState("");
  const [thirdMaxF, setThirdMaxF] = useState("");
  const [thirdMinF, setThirdMinF] = useState("");

  const [forthDate, setForthDate] = useState("");
  const [forthID, setForthID] = useState("");
  const [forthMax, setForthMax] = useState("");
  const [forthMin, setForthMin] = useState("");
  const [forthMaxF, setForthMaxF] = useState("");
  const [forthMinF, setForthMinF] = useState("");

  const [fifthDate, setFifthDate] = useState("");
  const [fifthID, setFifthID] = useState("");
  const [fifthMax, setFifthMax] = useState("");
  const [fifthMin, setFifthMin] = useState("");
  const [fifthMaxF, setFifthMaxF] = useState("");
  const [fifthMinF, setFifthMinF] = useState("");

  const [sixthDate, setSixthDate] = useState("");
  const [sixthID, setSixthID] = useState("");
  const [sixthMax, setSixthMax] = useState("");
  const [sixthMin, setSixthMin] = useState("");
  const [sixthMaxF, setSixthMaxF] = useState("");
  const [sixthMinF, setSixthMinF] = useState("");

  const [seventhDate, setSeventhDate] = useState("");
  const [seventhID, setSeventhID] = useState("");
  const [seventhMax, setSeventhMax] = useState("");
  const [seventhMin, setSeventhMin] = useState("");
  const [seventhMaxF, setSeventhMaxF] = useState("");
  const [seventhMinF, setSeventhMinF] = useState("");

  const [country, setCountry] = useState("");
  const [town, setTown] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [village, setVillage] = useState("");

  let time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
  });

  let day = new Date().toLocaleDateString([], {
    weekday: "long",
  });

  const getInfo = (city: string) => {
    fetchWeatherData(city).then((response) => {
      let data = response.data.data;
      setCity(data.request[0].query);
      setTemperature(data.current_condition[0].temp_C);
      setTemperatureF(data.current_condition[0].temp_F);
      setDesc(data.current_condition[0].weatherDesc[0].value);
      setChanceOfRain(data.weather[0].hourly[0].chanceofrain);
      setSunrise(data.weather[0].astronomy[0].sunrise);
      setSunset(data.weather[0].astronomy[0].sunset);
      setUVValue(data.current_condition[0].uvIndex);
      setWind(data.current_condition[0].windspeedKmph + " km/h");
      setHumidity(data.current_condition[0].humidity);
      setAirQuality(data.weather[0].hourly[0].air_quality.co.substring(0, 3));
      setVisibility(data.current_condition[0].visibility);
      setDir(
        "Direction: " +
          data.current_condition[0].winddirDegree +
          "( " +
          data.current_condition[0].winddir16Point +
          ")"
      );
      setCode(response.data.data.weather[0].hourly[0].weatherCode);
    });

    fetchExtendedForecastData(city).then((response) => {
      let data = response.data.data;
      setFirstDate(data.weather[1].date);
      setFirstMax(data.weather[1].maxtempC);
      setFirstMin(data.weather[1].mintempC);
      setFirstMaxF(data.weather[1].maxtempF);
      setFirstMinF(data.weather[1].mintempF);
      setFirstID(data.weather[1].hourly[0].weatherCode);

      setSecondDate(data.weather[2].date);
      setSecondMax(data.weather[2].maxtempC);
      setSecondMin(data.weather[2].mintempC);
      setSecondMaxF(data.weather[2].maxtempF);
      setSecondMinF(data.weather[2].mintempF);
      setSecondID(data.weather[2].hourly[0].weatherCode);

      setThirdDate(data.weather[3].date);
      setThirdMax(data.weather[3].maxtempC);
      setThirdMin(data.weather[3].mintempC);
      setThirdMaxF(data.weather[3].maxtempF);
      setThirdMinF(data.weather[3].mintempF);
      setThirdID(data.weather[3].hourly[0].weatherCode);

      setForthDate(data.weather[4].date);
      setForthMax(data.weather[4].maxtempC);
      setForthMin(data.weather[4].mintempC);
      setForthMaxF(data.weather[4].maxtempF);
      setForthMinF(data.weather[4].mintempF);
      setForthID(data.weather[4].hourly[0].weatherCode);

      setFifthDate(data.weather[5].date);
      setFifthMax(data.weather[5].maxtempC);
      setFifthMin(data.weather[5].mintempC);
      setFifthMaxF(data.weather[5].maxtempF);
      setFifthMinF(data.weather[5].mintempF);
      setFifthID(data.weather[5].hourly[0].weatherCode);

      setSixthDate(data.weather[6].date);
      setSixthMax(data.weather[6].maxtempC);
      setSixthMin(data.weather[6].mintempC);
      setSixthMaxF(data.weather[6].maxtempF);
      setSixthMinF(data.weather[6].mintempF);
      setSixthID(data.weather[6].hourly[0].weatherCode);

      setSeventhDate(data.weather[7].date);
      setSeventhMax(data.weather[7].maxtempC);
      setSeventhMin(data.weather[7].mintempC);
      setSeventhMaxF(data.weather[7].maxtempF);
      setSeventhMinF(data.weather[7].mintempF);
      setSeventhID(data.weather[7].hourly[0].weatherCode);
    });
  };

  const descUVvalue = () => {
    const value = parseFloat(UVValue);
    if (value < 3) {
      return "Low 🙂";
    } else if (value >= 3 && value < 6) {
      return "Normal 😐";
    } else if (value >= 6 && value < 8) {
      return "High 🙁";
    } else if (value >= 8 && value < 11) {
      return "Very High 😮";
    }
  };

  const descAirQ = () => {
    const value = parseFloat(airQuality);
    if (value < 701) {
      return "Excellent 🙂";
    } else if (value >= 701 && value < 1001) {
      return "Normal 😐";
    } else if (value >= 1001 && value < 1501) {
      return "Mediocre 🙁";
    } else if (value >= 1501) {
      return "Bad 😮";
    }
  };

  const descHumidity = () => {
    const value = parseFloat(humidity);
    if (value < 5) {
      return "Excellent 🙂";
    } else if (value >= 5 && value < 25) {
      return "Normal 😐";
    } else if (value >= 25 && value < 75) {
      return "Mediocre 🙁";
    } else if (value >= 75) {
      return "Bad 😮";
    }
  };

  const showPosition = (position: any) => {
    var crd = position.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    fetchCurrentLocation(crd.latitude, crd.longitude).then((response) => {
      setCountry(response.data.results[0].components.country);
      setCurrentCity(response.data.results[0].components.city);
      setTown(response.data.results[0].components.town);
      setVillage(response.data.results[0].components.village);
      console.log(response.data.results[0].components.country);
      const currCity = [village, town, currentCity, country];
      console.log(currCity.join(", "));
      getInfo(currCity.join(", "));
    });
  };
  const descVisibility = () => {
    const value = parseFloat(visibility);
    if (value > 1) {
      return "Excellent 🙂";
    } else if (value >= 10 && value < 1) {
      return "Normal 😐";
    } else if (value > 10) {
      return "Bad 🙁";
    }
  };

  return (
    <div className="App">
      <header className="Header">
        <span>
          <p id="Menu">
            <FavoriteBorderIcon />
            &nbsp;&nbsp;
            <span>Favorites</span>
          </p>
        </span>
        <div className="FullSearchDiv">
          {" "}
          <span>
            <GpsFixedIcon
              style={{ fontSize: 30, float: "left", paddingTop: "3%" }}
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(showPosition);
                } else {
                  alert("Geolocation is not supported by this browser.");
                }
              }}
            />{" "}
          </span>
          <span>
            <div className="SearchInputDiv">
              <PlacesAutocomplete
                value={value}
                onChange={setValue}
                onSelect={(value) => {
                  getInfo(value);
                }}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Search Places ...",
                        className: "location-search-input",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        const style = suggestion.active
                          ? { backgroundColor: "#707070", cursor: "pointer" }
                          : { backgroundColor: "#606060", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
          </span>
        </div>
        <span>
          <button
            id="TempBtnF"
            type="button"
            onClick={() => setShowTemperature(!showTemperature)}
          >
            °F
          </button>
          <button
            id="TempBtnC"
            type="button"
            onClick={() => setShowTemperature(!showTemperature)}
          >
            °C
          </button>
        </span>
      </header>

      <div className="SidePanel">
        <div className="MainWeatherIcon">
          <WeatherSvg code={code} />
        </div>
        <p className="CurrTemp">
          {showTemperature ? (
            <span>
              {temperature}
              <span className="C">°C</span>
            </span>
          ) : (
            <span>
              {temperatureF} <span className="F">°F</span>
            </span>
          )}
        </p>
        <p className="Date">
          {day}, {time}
        </p>
        <div className="HrLine"></div>

        <div className="Inline">
          <div className="DescWeatherIcon">
            <WeatherSvg code={code} />
          </div>
          <p className="Desc">{desc}</p>
        </div>

        <div className="Inline">
          <img src={rainPosSvg} alt="Chance of rain" className="ChanceOfRain" />
          <p className="Rain">Rain - {chanceOfRain} %</p>
        </div>

        <div className="CityDiv">
          <p className="City">{city}</p>
          <FavoriteIcon
            style={{
              fontSize: 40,
              color: "red",
              bottom: "0",
              right: "0",
              float: "right",
              position: "absolute",
            }}
          />
        </div>
      </div>

      <div className="InfoSide">
        <div className="ForecastMenu">
          <span
            id="Today"
            onClick={() => setShowWeek(!showWeek)}
            style={
              !showWeek
                ? { color: "#ffffff", textDecoration: "underline" }
                : { color: "#707070", textDecoration: "none" }
            }
          >
            Today
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span
            id="Week"
            onClick={() => setShowWeek(!showWeek)}
            style={
              showWeek
                ? { color: "#ffffff", textDecoration: "underline" }
                : { color: "#707070", textDecoration: "none" }
            }
          >
            Week
          </span>
        </div>
        {showWeek && showTemperature && (
          <div className="WeekCardsLayout">
            <WeekCard
              date={firstDate}
              maxC={firstMax + "° /"}
              minC={firstMin + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={firstID} />
              </div>
            </WeekCard>
            <WeekCard
              date={secondDate}
              maxC={secondMax + "° /"}
              minC={secondMin + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={secondID} />
              </div>
            </WeekCard>
            <WeekCard
              date={thirdDate}
              maxC={thirdMax + "° /"}
              minC={thirdMin + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={thirdID} />
              </div>
            </WeekCard>
            <WeekCard
              date={forthDate}
              maxC={forthMax + "° /"}
              minC={forthMin + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={forthID} />
              </div>
            </WeekCard>
            <WeekCard
              date={fifthDate}
              maxC={fifthMax + "° /"}
              minC={fifthMin + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={fifthID} />
              </div>
            </WeekCard>
            <WeekCard
              date={sixthDate}
              maxC={sixthMax + "° /"}
              minC={sixthMin + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={sixthID} />
              </div>
            </WeekCard>
            <WeekCard
              date={seventhDate}
              maxC={seventhMax + "° /"}
              minC={seventhMin + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={seventhID} />
              </div>
            </WeekCard>
          </div>
        )}
        {showWeek && !showTemperature && (
          <div className="WeekCardsLayout">
            <WeekCard
              date={firstDate}
              maxF={firstMaxF + "° /"}
              minF={firstMinF + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={firstID} />
              </div>
            </WeekCard>
            <WeekCard
              date={secondDate}
              maxF={secondMaxF + "° /"}
              minF={secondMinF + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={secondID} />
              </div>
            </WeekCard>
            <WeekCard
              date={thirdDate}
              maxF={thirdMaxF + "° /"}
              minF={thirdMinF + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={thirdID} />
              </div>
            </WeekCard>
            <WeekCard
              date={forthDate}
              maxF={forthMaxF + "° /"}
              minF={forthMinF + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={forthID} />
              </div>
            </WeekCard>
            <WeekCard
              date={fifthDate}
              maxF={fifthMaxF + "° /"}
              minF={fifthMinF + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={fifthID} />
              </div>
            </WeekCard>
            <WeekCard
              date={sixthDate}
              maxF={sixthMaxF + "° /"}
              minF={sixthMinF + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={sixthID} />
              </div>
            </WeekCard>
            <WeekCard
              date={seventhDate}
              maxF={seventhMaxF + "° /"}
              minF={seventhMinF + "°"}
            >
              {" "}
              <div className="WeekWeatherIcon">
                <WeatherSvg code={seventhID} />
              </div>
            </WeekCard>
          </div>
        )}
        <div className="Title">
          <p>Today's Highlights</p>
        </div>
        <div className="ConditionCards">
          <Cards
            title="UV Index"
            value={UVValue}
            src={uvSvg}
            value4={descUVvalue()}
          ></Cards>
          <Cards
            title="Wind Status"
            value={wind}
            value4={"🧭 " + dir}
            src={windSvg}
          ></Cards>
          <div className="Card">
            {" "}
            <p className="CardTitle">Sunrise & Sunset</p>
            <div>
              <span></span>
              <span>
                {" "}
                <p className="Sun">
                  <img className="SunSvg" src={sunriseSvg} alt="sunrise"></img>
                  {sunrise}
                </p>
              </span>
            </div>
            <span>
              <p className="Sun">
                <img className="SunSvg" src={sunsetSvg} alt="sunset"></img>
                {sunset}
              </p>
            </span>
          </div>
          <Cards
            title="Humidity"
            value={humidity + " %"}
            src={humiditySvg}
            value4={descHumidity()}
          ></Cards>
          <Cards
            title="Visibility"
            value={visibility + " km"}
            src={visibilitySvg}
            value4={descVisibility()}
          ></Cards>
          <Cards
            title="Air Quality"
            value={airQuality}
            src={airqSvg}
            value4={descAirQ()}
          ></Cards>
        </div>
      </div>
    </div>
  );
}

export default App;
