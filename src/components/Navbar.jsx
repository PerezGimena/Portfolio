import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css'; 

export const Navbar = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click); 
    const closeMenu = () => setClick(false);

    return (
        <nav className="navbar">
           
            <div className="logo" onClick={() => window.scrollTo(0,0)}>
             <span>&lt; /&gt;</span> Gimena
            </div>

            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu activo" : "nav-menu"}>
                <li>
                    <a href="#inicio" className="nav-link" onClick={closeMenu}>Inicio</a>
                </li>
                <li>
                    <a href="#sobre-mi" className="nav-link" onClick={closeMenu}>Sobre Mí</a>
                </li>
                <li>
                    <a href="#proyectos" className="nav-link" onClick={closeMenu}>Proyectos</a>
                </li>
                 <li>
                    <a href="#skills" className="nav-link" onClick={closeMenu}>Tecnologías</a>
                </li>
                <li>
                    <a href="#contacto" className="nav-link" onClick={closeMenu}>Contacto</a>
                </li>
            </ul>
        </nav>
    );
};