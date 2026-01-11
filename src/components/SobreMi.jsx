import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SobreMi.css'

export const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="contenedor-sobre-mi">
        
        <motion.h2 
          className="titulo-seccion"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>Sobre Mí</span>
        </motion.h2>

        <div className="grid-sobre-mi">
          
          <motion.div 
            className="texto-sobre-mi"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          
            <p>
              ¡Hola! Me apasiona transformar ideas en aplicaciones reales. 
              Como desarrolladora Full Stack, tengo la capacidad de moverme entre el Backend y el Frontend
               para dar vida a proyectos completos.
            </p>
            <p>
              Mi metodología de trabajo es clara<strong>"Planificar antes de ejecutar"</strong>. Dedico tiempo a 
              definir la arquitectura y los requerimientos 
              del sistema para escribir código limpio, ordenado y escalable.
            </p>
            <p>
             Nunca dejo de aprender, cada nuevo proyecto es una 
             oportunidad para mejorar y optimizar mi código."
            </p>
          </motion.div>

          {/* FOTO */}
          <motion.div 
            className="foto-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            <img 
              src="./perfil.png" 
              alt="Foto de perfil" 
              className="foto-perfil" 
            />
            
            <div className="marco-foto"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};