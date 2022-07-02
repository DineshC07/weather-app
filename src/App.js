import React, { useState } from "react";

const api = {
  key: "812e07ada397f37ffddee89ed099a189",
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [data, SetData] = useState("");

  const [weather, setWeather] = useState();
  const weatherData = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${api.key}&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);

          SetData("");

          // console.log(result);
        });
    }
  };
  // console.log(weather, "weath");
  // console.log(data, "dataaa");
  console.log(weather);
  return (
    <div
      className={
        typeof weather != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search City"
            onChange={(e) => {
              SetData(e.target.value);
            }}
            value={data}
            onKeyPress={weatherData}
          />
        </div>
        {typeof weather != "undefined" ? (
          <div className="weather-box">
            <div className="temp"> {weather?.main?.temp}</div>
            <div className="climate">{weather?.weather[0]?.description}</div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
