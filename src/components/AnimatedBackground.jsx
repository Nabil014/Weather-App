import React, { useState, useEffect } from "react";
import initialParticles from "../assets/initialParticles";

const AnimatedBackground = () => {
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


  return (
    <div>
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
    </div>
  );
};

export default AnimatedBackground;
