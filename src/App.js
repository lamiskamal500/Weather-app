import CurrentWeather from "./components/CurrentWeather";
import DaysWeather from "./components/DaysWeather";
import "./index.css";
import TodayWeather from "./components/TodayWeather";
import Search from "./components/Search";
import { useState } from "react";
import { WeatherApiUrl, WeatherApiKey } from "./Api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForcast] = useState(null);

  const handleOnSearchChange = (search) => {
    const [lat, lon] = search.value.split("");

    const currentWeatherFetch = fetch(
      `${WeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`
    );

    const forecastFetch = fetch(
      `${WeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: search.label, ...weatherResponse });
        setForcast({ city: search.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="App">
      <div>
        <div>
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        {currentWeather && <TodayWeather data={currentWeather} />}
      </div>
      <div>
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <DaysWeather forcastData={forecast} />}
      </div>
    </div>
  );
}

export default App;
