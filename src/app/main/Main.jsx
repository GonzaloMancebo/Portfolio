"use client"; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Corregido importación de faGithub y faLinkedin
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; // faLaptopCode sigue siendo de solid
import { useLanguage } from '../translate/LanguageContext'; // Importa el contexto de lenguaje
import "./main.css";
import Navigation from '../components/navigation/Navigation';

export default function Main() {
  const { language, changeLanguage, translations } = useLanguage(); // Usa el contexto

  return (
    <main id="top" className="main-container">
      <div className="main-background">
        <Image
          src="/portafoliofondo.jpg"
          alt="Logo"
          fill
          style={{ objectFit: "cover" }}
          className="main-image"
        />
        <div className="main-overlay"></div>
      </div>

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
          <a 
            href="https://github.com/GonzaloMancebo"
            target="_blank" 
            rel="noopener noreferrer" 
            className="main-button main-button-github"
          >
            <FontAwesomeIcon icon={faGithub} className="main-icon" /> 
            {translations[language].header.github}
          </a>
          <a 
            href="https://www.linkedin.com/in/gonzalo-mancebo-055165150/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="main-button main-button-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} className="main-icon" /> 
            {translations[language].header.linkedin}
          </a>
        </div>
      </div>

      {/* Navegación */}
      <Navigation/>

      {/* Botón de cambio de idioma */}
      <div className="language-switch">
        <button 
          onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
          className="language-button"
        >
          {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      </div>

      {/* Redirigir a "contacto" con mailto */}
      <div className="contact-link">
        <a href="mailto:gmancebo.dev@gmail.com" className="contact-button">
          {translations[language].header.contact}
        </a>
      </div>
    </main>
  );
}
