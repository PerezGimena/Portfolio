import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { SobreMi } from '../components/SobreMi';
import { Proyectos } from '../components/Proyectos';
import { Contacto } from '../components/Contacto';
import { Skills } from '../components/Skills';

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <main>
        <Hero />
           <SobreMi />
            <Proyectos />
            <Skills />
             <Contacto />
            
      </main>
    </div>
  );
};