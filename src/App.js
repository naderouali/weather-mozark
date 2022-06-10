import React from 'react';
import './style.app.css';

// THE API PARAMETERS
const api = {
  key: "b25b6a800dfd115c346f8eee209124ce",
  url: "https://api.openweathermap.org/data/2.5/"
}

/**
 * App: The application main component
 * @return {JSX.Element} The JSX Code for app
 */

function App() {

  // USESTATES
  const [query, setQuery] = React.useState('');
  const [weather, setWeather] = React.useState('');

  // THE SEARCH FUNCTION
  // IT TAKES THE API LINK AS INPUT
  // IT RETURNS JSON FILE WITH WEATHER DATA
  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(resp => resp.json())
        .then(result => { setWeather(result); setQuery(''); console.log(result) });
    }
  }

  // THE DATEBUILDER FUNCTION
  // IT TAKES A DATE AS AN INPUT
  // IT RETURNS SPLITTED DATE
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day}, ${date} ${month}, ${year}`
  }


  // THE RETURNED JSX ELEMENT
  return (
    <div className="app">
      <main>
        {/* SEARCH */}
        <div className="search-bar">
          <input className="search-box" type="text" placeholder="Search city ..."
            onChange={(e) => setQuery(e.target.value)} value={query}>
          </input>
          <button type="submit" className="search-btn" onClick={handleSearch}>
            <img src="https://img.icons8.com/ios-filled/50/000000/search--v2.png" alt="" />
          </button>
        </div>

        {(typeof weather.main != "undefined") ? (
          // WEATHER RESULT DATA
          <div>
            <div className="location-box">
              <h2 className="location">{weather.name}, {weather.sys.country}</h2>
              <p className="date">{dateBuilder(new Date())}</p>
              <div className="temp">{weather.main.temp}°C</div>
              <p className="type">{weather.weather[0].main}</p>
              <div className="other-dets">
                <h4 style={{ fontSize: "30px", fontWeight: "100", marginBottom: "30px" }}>Other details :</h4>
                <p className="others">Pressure: {weather.main.pressure} hPa</p>
                <p className="others">Humidity: {weather.main.humidity} %</p>
                <p className="others">Wind speed: {weather.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        ) : (
          // HOME PAGE
          <div>
            <div className="welcome-box">
              <div className="welcome-text">
                <h1>welcome</h1>
                <p>
                  Mozark Weather App
                </p>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}

export default App;
