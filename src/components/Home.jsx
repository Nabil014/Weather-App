import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Swal from "sweetalert2";
import initialParticles from "../assets/initialParticles";

const Home = () => {
  const [particles, setParticles] = useState(initialParticles);
  const colors = [
    "#CB51EE",
    "#0073BC",
    "#38B75E",
    "#DE365C",
    "#C780FA",
    "#ECE8DD",
  ];

  useEffect(() => {
    for (let i = 0; i <= 25; i++) {
      let select = Math.round(colors.length * Math.random());
      let top = innerHeight * Math.random();
      let left = innerWidth * Math.random();
      let background = colors[select >= colors.length ? select - 1 : select];

      particles.push({
        top,
        left,
        background,
      });
    }

    setInterval(() => {
      setParticles(
        particles.map((particle) => ({
          ...particle,
          top: innerHeight * Math.random(),
          left: innerWidth * Math.random(),
        }))
      );
    }, 5000);
  }, []);

  // ------------------------------------------------------------------------------------------------
  const [cities, setCities] = useState([]);

  const loadCity = (infoCity) => {
    cities.some((c) => c.id === infoCity.id)
      ? Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `La ciudad ${infoCity.name} ya fue agregada!`,
          showConfirmButton: false,
          timer: 1200,
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
        {particles.map((particle, index) => (
          <span
            className="particle absolute bg-red-500 rounded-full blur-[2px]"
            style={{
              position: "absolute",
              top: `${particle.top}px`,
              left: `${particle.left}px`,
              background: particle.background,
              width: "40px",
              height: "40px",
              boxShadow: "1px 1px 5px rgba(0, 0, 0, .3)",
              borderRadius: "5px",
              transition: "1s",
            }}
            key={index}
          />
        ))}
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
