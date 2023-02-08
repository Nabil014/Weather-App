import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import CityDetail from "./CityDetail";

const Card = (props) => {
  const [city, setCity] = useState([]);
  const [showModalDetail, setShowModalDetail] = useState(false);

  const toggleShowModal = () => {
    setShowModalDetail(true);
  };

  const handleOnClose = () => setShowModalDetail(false);

  return (
    <div className="flex flex-wrap justify-evenly scroll-smooth overscroll-y-auto w-[80rem] gap-2 p-3 h-[20rem] ">
      {props.cities &&
        props.cities.map((c) => {
          return (
            <article key={c.id} onClick={() => setCity([c])}>
              <div className="w-[11rem] h-[15rem] border-solid border-2 bg-[#e8d2a6dc] backdrop-blur-md border-white flex flex-col justify-center items-center shadow-xl rounded-md hover:bg-[#B6EADA] hover:text-[#00337C] cursor-pointer hover:rotate-3 hover:origin-bottom-right transition-all duration-300">
                <button
                  className="absolute top-2 right-2 z-10 hover:bg-red-400  rounded-full hover:scale-105 transition-all"
                  onClick={() => props.onClose(c.id)}
                >
                  <RiCloseCircleLine className="text-3xl text-[#00337C] hover:text-white transition-all" />
                </button>
                <div
                  onClick={toggleShowModal}
                >
                  <img
                    src={`http://openweathermap.org/img/wn/${c.icon}@2x.png`}
                    alt="Weather icon"
                    className="w-32"
                  />
                  <h2 className="font-nunito font-semibold flex justify-center text-2xl mb-2">{c.name}</h2>
                  <span className="font-nunito text-lg font-medium justify-center flex">{c.temp} °C</span>
                </div>
              </div>
              <CityDetail
                city={city}
                visible={showModalDetail}
                closeModal={handleOnClose}
              />
            </article>
          );
        })}
    </div>
  );
};

export default Card;
