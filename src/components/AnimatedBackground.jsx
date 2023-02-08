import React, { useState, useEffect } from "react";

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([{top:433, left:291, background:'#CB51EE'},{top:3, left:291, background:'#38B75E'},{top:400, left:281, background:'#DE365C'},{top:3, left:291, background:'#CB51EE'},{top:500, left:300, background:'#CB51EE'},{top:500, left:300, background:'#38B75E'},{top:433, left:300, background:'#0073BC'},{top:433, left:300, background:'#0073BC'},{top:433, left:200, background:'#DE365C'},{top:433, left:200, background:'#0073BC'},{top:433, left:210, background:'#0073BC'},{top:433, left:200, background:'#0073BC'},{top:433, left:100, background:'#0073BC'},{top:433, left:26, background:'#0073BC'},{top:433, left:291, background:'#CB51EE'},{top:50, left:59, background:'#38B75E'},{top:433, left:195, background:'#DE365C'},{top:450, left:195, background:'#0073BC'},{top:450, left:469, background:'#38B75E'},{top:66, left:88, background:'#38B75E'},{top:450, left:291, background:'#38B75E'},{top:450, left:291, background:'#0073BC'},{top:65, left:291, background:'#38B75E'},{top:450, left:25.6, background:'#CB51EE'},{top:450, left:291, background:'#CB51EE'},{top:450, left:291, background:'#DE365C'},{top:450, left:291, background:'#0073BC'},{top:450, left:12, background:'#38B75E'},{top:450, left:895, background:'#0073BC'},{top:200, left:24, background:'#38B75E'},{top:200, left:666, background:'#CB51EE'},{top:450, left:22, background:'#0073BC'},{top:56, left:291, background:'#0073BC'},{top:450, left: 796, background:'#0073BC'},{top:450, left:99, background:'#0073BC'},{top:450, left:1000, background:'#0073BC'},{top:855, left:29, background:'#0073BC'},{top:420, left:15, background:'#0073BC'},{top:430, left:32, background:'#0073BC'},]);
  const colors = ["#CB51EE", "#0073BC", "#38B75E", "#DE365C"];

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
    }, 4000);
  }, []);

  return (
    <div className="relative z-10 h-screen w-screen overflow-hidden bg-[#26bdeb] flex items-center justify-center">
      {particles.map((particle, index) => (
        <span
          className="particle absolute bg-red-500 rounded-full"
          style={{
            position:"absolute",
            top: `${particle.top}px`,
            left: `${particle.left}px`,
            background: particle.background,
            width: "40px",
            height: "40px",
            boxShadow: "1px 1px 5px rgba(0, 0, 0, .3)",
            borderRadius: "5px",
            transition: "1s"
          }}
          key={index}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
