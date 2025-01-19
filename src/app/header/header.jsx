"use client";
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolderOpen, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../translate/LanguageContext'; // Importa el contexto de lenguaje

export default function Header({ scrollToSection }) {
  const { language, changeLanguage, translations } = useLanguage(); // Usa el contexto

  return (
    <header id="top" className="relative w-full h-screen ">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portfolio.png"
          alt="Logo"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-3">
        <h1 className="text-2xl md:text-3xl font-semibold flex items-center">
          {translations[language].header.title}
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center text-[#4A90E2]">
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-3xl animate-bounce text-[#4A90E2]" />
          {translations[language].header.subtitle}
        </h2>
        <div className="flex items-center mt-6 space-x-6">
          <a 
            href="https://github.com/tu-usuario"
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center px-4 py-2 border-2 border-black rounded-full text-white bg-black hover:bg-gray-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2 text-xl" /> 
            {translations[language].header.github}
          </a>

          <a 
            href="https://www.linkedin.com/in/gonzalo-mancebo-055165150/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center px-4 py-2 border-2 border-[#0077B5] rounded-full text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-xl" /> 
            {translations[language].header.linkedin}
          </a>
        </div>
      </div>

      {/* Navegación */}
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-screen-md p-5 text-white rounded-lg shadow-md z-20 bg-opacity-50 bg-black backdrop-filter backdrop-blur-lg">
        <ul className="flex items-center justify-center space-x-4 md:space-x-8">
          <li className="flex items-center whitespace-nowrap">
            <a onClick={() => scrollToSection('top')} className="hover:underline cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faHome} className="mr-1" /> {translations[language].header.sections.home}
            </a>
          </li>
          <li className="flex items-center whitespace-nowrap">
            <a onClick={() => scrollToSection('proyectos')} className="hover:underline cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faFolderOpen} className="mr-1" /> {translations[language].header.sections.projects}
            </a>
          </li>
          <li className="flex items-center whitespace-nowrap">
            <a onClick={() => scrollToSection('tecnologias')} className="hover:underline cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faLaptopCode} className="mr-1" /> {translations[language].header.sections.technologies}
            </a>
          </li>
          <li className="flex items-center">
            <a onClick={() => scrollToSection('contacto')} className="hover:underline cursor-pointer flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> {translations[language].header.sections.contact}
            </a>
          </li>
        </ul>
      </nav>

      {/* Contenedor del botón para cambiar el idioma */}
      <div className="language-switch-container">
    <button 
      onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
      className="px-4 py-2 bg-[#4A90E2] text-white rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
  >
    {language === 'es' ? 'Switch to English' : 'Cambiar idioma a Español'}
  </button>
</div>

    </header>
  );
}
