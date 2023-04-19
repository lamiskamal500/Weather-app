import React from "react";

const TodayWeather = ({ data }) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="todayWeather">
      <img className="clouds" src={`icons/${data.weather[0].icon}.png`} />
      <p className="temp">
        {Math.round(data.main.temp)}
        <span className="tempC">°C</span>
      </p>
      <p className="details">{data.weather[0].description}</p>
      <p className="date">{date}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          className="locationImage"
          src={require("../../src/assets/location2.png")}
        />
        <span className="location">{data.city}</span>
      </div>
    </div>
  );
};
export default TodayWeather;
