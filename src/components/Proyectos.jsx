import React from 'react';
import { listaProyectos } from '../datos/listaProyectos'; 
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Iconos
import { motion } from 'framer-motion';
import '../styles/Proyectos.css'

export const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos-seccion">
      <div className="contenedor-proyectos">
        
        <motion.h2 
          className="titulo-seccion"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mis <span>Proyectos</span>
        </motion.h2>

        {/*Cards*/}
        <div className="grid-proyectos">
          {listaProyectos.map((proyecto) => (
            <motion.div 
              key={proyecto.id}
              className="card-proyecto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: proyecto.id * 0.1 }} 
            >
              
          
              <div className="imagen-container">
                <img src={proyecto.imagen} alt={proyecto.titulo} className="imagen-proyecto" />
                
                
                {proyecto.enDesarrollo && (
                  <span className="badge-desarrollo">
                    🚧 En Desarrollo
                  </span>
                )}
              </div>

              <div className="contenido-card">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                
              
                <div className="tecnologias">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tag">{tech}</span>
                  ))}
                </div>

            
                <div className="botones-proyecto">
                  {!proyecto.enDesarrollo ? (
            
                    <>
                      <a href={proyecto.githubLink} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-github">
                        <FaGithub /> Código
                      </a>
                      <a href={proyecto.demoLink} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-demo">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    </>
                  ) : (
                  
                    <span className="btn-disabled">
                       En Desarrollo
                    </span>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};