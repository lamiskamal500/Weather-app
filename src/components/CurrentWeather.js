import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div>
      <div className="currentWeather">
        <p className="details">Details</p>
        <div className="temp-row">
          <span className="temp-label">Feels Like</span>
          <span className="temp-value">
            {Math.round(data.main.feels_like)}°C
          </span>
        </div>
        <div className="temp-row">
          <span className="temp-label">Wind</span>
          <span className="temp-value">{data.wind.speed} m/s</span>
        </div>
        <div className="temp-row">
          <span className="temp-label">Humidity</span>
          <span className="temp-value">{data.main.humidity}%</span>
        </div>
        <div className="temp-row">
          <span className="temp-label">Pressure</span>
          <span className="temp-value">{data.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
