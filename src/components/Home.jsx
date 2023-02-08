import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Swal from "sweetalert2";
import initialParticles from "../assets/initialParticles";
import AnimatedBackground from "./AnimatedBackground";

const Home = () => {
  const [cities, setCities] = useState([]);

  const loadCity = (infoCity) => {
    cities.some((c) => c.id === infoCity.id)
      ? Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `La ciudad ${infoCity.name} ya fue agregada!`,
          showConfirmButton: false,
          timer: 1500,
        })
      : setCities([...cities, infoCity]);
  };

  const deleteCard = (id) => {
    setCities((prevCities) => {
      return prevCities.filter((c) => c.id !== id);
    });
  };

  return (
    <div>
      <div className="relative z-10 h-screen overflow-hidden bg-[#39B5E0]">
        <AnimatedBackground />
        <div
          className={
            cities.length === 0
              ? "flex items-center justify-center h-screen w-screen transition-all duration-500"
              : " relative flex justify-center transform translate-y-10 transition duration-500 mb-20"
          }
        >
          <SearchBar loadCity={loadCity} />
        </div>
        <div className="flex justify-center overflow-y-auto scrollbar-thin scrollbar-track-red-400 scrollbar-thumb-orange-300 scroll- overscroll-y-auto scroll-smooth h-[60rem] md:h-[60rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[60rem] z-50">
          <Card cities={cities} onClose={deleteCard} />
        </div>
      </div>
    </div>
  );
};

export default Home;
