import React from "react";
import {motion} from 'framer-motion'
import { FaFileDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground';
import '../styles/Hero.css'

export const Hero = () => {
    return (
    <section id="inicio" className="hero">
      <ParticleBackground />
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="hero-greeting">Hola, soy</span>
        <h1 className="hero-title">
          Gimena Pérez <br />
         <span style={{ color: '#a855f7' }}>
  <TypeAnimation
    sequence={[
      'Desarrolladora Full Stack',
      1000 
    ]}
    wrapper="span"
    speed={20} 
    repeat={0} 
    style={{ display: 'inline-block' }} 
  />
</span>
        </h1>
        <p className="hero-desc">
          <strong>+3 años de experiencia.</strong> Técnica en Programación y Desarrolladora Full Stack de Argentina 🇦🇷. 
  Transformo ideas complejas en soluciones web modernas y funcionales.
        </p>
        
        <a href="/Gimena_PerezCV.pdf" download="Gimena_PerezCV.pdf" className="btn-cv">
                <FaFileDownload /> Descargar CV
            </a>
      </motion.div>
    </section>
    );
};