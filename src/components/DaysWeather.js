import React from "react";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const DaysWeather = ({ forcastData }) => {
  const currentDay = new Date().getDay();
  const forcastDays = weekDays
    .slice(currentDay, weekDays.length)
    .concat(weekDays.slice(0, currentDay));

  return (
    <div>
      <div className="forcast">
        {forcastData.list.splice(0, 7).map((item, idx) => (
          <div className="days">
            <p className="day">{forcastDays[idx]}</p>
            <img
              src={`icons/${item.weather[0].icon}.png`}
              className="weatherIcon"
            />
            <p className="dayTemp">
              {Math.round(item.main.temp_max)}°C /{" "}
              {Math.round(item.main.temp_min)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DaysWeather;
