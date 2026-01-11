import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaAngular } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGit, SiGithub,SiExpress } from 'react-icons/si';
import '../styles/Skills.css'

export const Skills = () => {
  const skills = [
    // --- Frontend ---
    { nombre: "React", icono: <FaReact color="#61DAFB"/> },
    { nombre: "Angular", icono: <FaAngular color="#DD0031"/> },
    { nombre: "HTML5", icono: <SiHtml5 color="#E34F26"/> }, 
    { nombre: "CSS3", icono: <SiCss3 color="#1572B6"/> },   
    
    // --- Backend ---
    { nombre: "Node.js", icono: <FaNodeJs color="#339933"/> },
   { nombre: "Express", icono: <SiExpress color="#fff"/> }, 
    { nombre: "Java", icono: <FaJava color="#007396"/> },
    
    // --- Base de Datos ---
    { nombre: "MySQL", icono: <SiMysql color="#4479A1"/> },
    { nombre: "MongoDB", icono: <SiMongodb color="#47A248"/> },
    
    // --- Lenguajes & Herramientas ---
    { nombre: "JavaScript", icono: <SiJavascript color="#F7DF1E"/> },
    { nombre: "TypeScript", icono: <SiTypescript color="#3178C6"/> },
    { nombre: "Git", icono: <SiGit color="#F05032"/> },
    { nombre: "GitHub", icono: <SiGithub color="#000000ff"/> },

  ];

  return (
    
    <section id="skills" className="skills-seccion">
    <section className="skills-seccion">
      <div className="contenedor-skills">
        <motion.h2 
          className="titulo-skills"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Tecnologías</span>
        </motion.h2>

        <div className="grid-skills">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="card-skill"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="icono-skill">{skill.icono}</div>
              <span>{skill.nombre}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
};