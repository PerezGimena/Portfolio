import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Contacto.css'

export const Contacto = () => {
  return (
    <section id="contacto" className="contacto-seccion">
      <div className="contenedor-contacto">
        
        <motion.h2 
          className="titulo-seccion"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Contáctame</span>
        </motion.h2>

        <p className="texto-contacto">
          ¿Tienes un proyecto en mente? 
          <br />
          Actualmente estoy abierto a nuevas oportunidades laborales.
        </p>

        {/* Tarjetas de contacto*/}
        <div className="contacto-cards">
          <a href="mailto:perezgimena295@gmail.com" className="card-info">
            <div className="icono-contacto"><FaEnvelope /></div>
            <div className="info-texto">
              <h4>Email</h4>
              <span>perezgimena295@gmail.com</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/mariagimenaperez/" target="_blank" rel="noopener noreferrer" className="card-info">
            <div className="icono-contacto"><FaLinkedin /></div>
            <div className="info-texto">
              <h4>LinkedIn</h4>
              <span>/in/mariagimenaperez</span>
            </div>
          </a>
        </div>

        <footer className="footer-copy">
          <p>© {new Date().getFullYear()} Gimena Pérez. Todos los derechos reservados.</p>
        </footer>

      </div>
    </section>
  );
};