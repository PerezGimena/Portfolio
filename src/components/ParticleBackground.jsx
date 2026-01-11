import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, 
      }}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window", 
          events: {
            onHover: {
              enable: true,
              mode: "bubble", 
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 1, 
              size: 5,   
              color: "#a855f7" 
            },
          },
        },
        particles: {
          color: {
            value: ["#3b82f6", "#a855f7"],
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0, 
            width: 1,
          },
          move: {
            enable: true,
            speed: 1, 
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "bounce" },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 100, 
          },
          opacity: {
            value: 0, 
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;