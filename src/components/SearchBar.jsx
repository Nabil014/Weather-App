import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import Swal from "sweetalert2";
const apiKey = import.meta.env.VITE_APIKEY;

const SearchBar = ({ loadCity }) => {
  const [city, setCity] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  const search = (e) => {
    if (!city) return null;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) return;
        return response.json();
      })
      .then((data) => {
        if (!data) {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `No se encontró la ciudad ${city} 😣`,
            showConfirmButton: false,
            timer: 1500,
          });
        }

        loadCity({
          temp_min: Math.round(data.main.temp_min),
          temp_max: Math.round(data.main.temp_max),
          temp: data.main.temp,
          feelsLike: data.main.feels_like,
          name: data.name,
          icon: data.weather[0].icon,
          id: data.id,
          lat: data.coord.lat,
          lon: data.coord.lon,
          humidity: data.main.humidity,
          velocityWind: data.wind.speed,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        });
      })
      .catch((err) => {
        alert(err, "error catch");
      });
    setCity("");
  };
  return (
    <div className="z-10 group">
      <div className="relative">
        <input
          value={city}
          type="text"
          placeholder="Buscar ciudad..."
          onChange={handleInputChange}
          className="placeholder:text-[#FAECD6] font-nunito transition-all text-xl border-solid border-2 rounded-full p-1 pl-4 pr-9 w-72 text-white outline-none border-white bg-[#61876E]"
          onKeyDown={(e) => {
            e.key === "Enter" ? search() : null;
          }}
        />
        <button
          onClick={search}
          className="absolute items-center top-[10px] right-4"
        >
          <RiSearchLine className="text-white text-xl group-focus-within:text-2xl group-focus-within:-translate-y-1 group-focus-within:text-[#FAECD6] transition-all border-l-[1px] pl-1" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
