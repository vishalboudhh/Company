import React, { useState } from 'react';
import toast from 'react-hot-toast';

const apikey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const Weather = () => {
  const [weather, setWeather] = useState({
    icon: "https://openweathermap.org/img/wn/10d@2x.png",
    temp: "",
    city: "",
    humidity: "",
    speed: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const city = e.target.city.value;
    if (!city) {
      toast.error("Please provide the city name!");
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();

      setWeather({
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        temp: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        speed: data.wind.speed,
      });
      toast.success("Weather data fetched successfully!");
    } catch (error) {
      toast.error("City not found!");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br px-4">
      <div className="bg-gray-950 w-full max-w-md rounded-3xl shadow-xl text-white p-8 space-y-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center border-b border-blue-500 pb-4">
          🌤 Weather Update
        </h2>

        {/* Search Form */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 rounded-full bg-blue-900 placeholder:text-white/70 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            placeholder="Enter city name"
            name="city"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white font-medium py-2 px-4 rounded-full"
            type="submit"
          >
            Search
          </button>
        </form>

        {/* Weather Info */}
        <div className="flex flex-col items-center space-y-2">
          <img src={weather.icon} alt="Weather Icon" className="w-20 h-20" />
          <h1 className="text-4xl font-bold">{weather.temp}°C</h1>
          <p className="text-xl font-medium text-blue-200">{weather.city}</p>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-2 gap-6 pt-4 text-center border-t border-blue-500">
          <div>
            <h3 className="text-sm text-blue-300">Humidity</h3>
            <h2 className="text-xl font-semibold">{weather.humidity}%</h2>
          </div>
          <div>
            <h3 className="text-sm text-blue-300">Wind Speed</h3>
            <h2 className="text-xl font-semibold">{weather.speed} km/h</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
