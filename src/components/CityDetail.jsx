import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import sunriseIcon from "../assets/sunrise.png";
import sunsetIcon from "../assets/sunset.png";
import windIcon from "../assets/wind.png";
import humidityIcon from "../assets/humidity.png";

const CityDetail = ({ visible, closeModal, city }) => {
  console.log(city);
  const handleOnClose = (e) => {
    if (e.target.id === "container") closeModal();
  };

  // let date = new Date(sec * 1000);
  // let timestr = date.toLocaleTimeString();

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-md p-4 relative">
        <button
          onClick={closeModal}
          className="absolute top-[10px] right-[10px] hover:bg-red-400 rounded-full hover:scale-110 transition-all bg-white"
        >
          <RiCloseCircleLine className="text-2xl text-red-400 hover:text-white transition-colors" />
        </button>
        <div className="border-solid border-2 border-[#6096B4] rounded-md ">
          {city?.map((e) => {
            return (
              <div className="p-3">
                <h2 className="font-nunito text-2xl justify-center flex underline decoration-double decoration-pink-500 p-2 pb-4">
                  {e.name}
                </h2>
                <div>
                  <div className="flex font-nunito justify-around ">
                    <span>Máxima: {e.temp_max} °C</span>
                    <span>Mínima: {e.temp_min} °C</span>
                  </div>
                  <div className="flex font-nunito justify-around">
                    <span>Latitud: {e.lat}</span>
                    <span>Longitud: {e.lon}</span>
                  </div>
                </div>
                <div className="flex font-nunito text-base items-center gap-2  justify-around">
                  <img src={sunriseIcon} alt="iconSunrise" className="h-20" />
                  <span>
                    {new Date(e.sunrise * 1000).toLocaleTimeString()} hs
                  </span>
                  <img src={sunsetIcon} alt="iconSunset" className="h-20" />
                  <span>
                    {new Date(e.sunset * 1000).toLocaleTimeString()} hs
                  </span>
                </div>
                <div className="font-nunito text-base justify-around flex items-center">
                  <div >
                    <img src={windIcon} alt="iconWind" className="h-14" />
                    <span>{e.velocityWind} km/hs</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={humidityIcon}
                      alt="iconHumidity"
                      className="h-14"
                    />
                    <span>{e.humidity} %</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
