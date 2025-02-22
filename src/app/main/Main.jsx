"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../translate/LanguageContext'; 
import "@/styles/Main.css";
import Navigation from '../components/navigation/Navigation';

export default function Main() {
  const { language, changeLanguage, translations } = useLanguage(); // Usa el contexto

  useEffect(() => {
    // Cambia el fondo cuando el componente se monta
    document.body.style.backgroundImage = 'url("/portafoliofondo.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  }, []); // Solo se ejecuta una vez al cargar el componente

  return (
    <main className="main-container">
      {/* Contenido principal */}
      <div className="main-content">
        <div className="main-container-titles">
          <h1 className="main-title">{translations[language].header.title}</h1>
          <h2 className="main-subtitle">
            <FontAwesomeIcon icon={faLaptopCode} className="main-icon-bounce" />
            {translations[language].header.subtitle}
          </h2>
        </div>

        <div className="main-links">
          <div className="github-section">
            <p className="p-seemore">{translations[language].header.sections.seemore}</p>
            <a
              href="https://github.com/GonzaloMancebo"
              target="_blank"
              rel="noopener noreferrer"
              className="main-button main-button-github"
            >
              <FontAwesomeIcon icon={faGithub} className="main-icon" />
              GitHub
            </a>
          </div>
        </div>

        {/* Navegación */}
        <Navigation />

        {/* Botón de cambio de idioma */}
        <div className="language-switch">
          <button
            onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
            className="language-button"
          >
            {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
        </div>
      </div>
    </main>
  );
}
