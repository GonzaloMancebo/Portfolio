"use client";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolderOpen, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../translate/LanguageContext'; // Importa el contexto de lenguaje
import Link from 'next/link'; 
import "./main.css";

export default function Main({ scrollToSection }) {
  const { language, changeLanguage, translations } = useLanguage(); // Usa el contexto

  // Función para manejar la navegación de los enlaces
  const handleNavigation = (section) => {
    if (section === 'contacto') {
      // Redirigir al correo al hacer clic en "contacto"
      window.location.href = "mailto:gmancebo.dev@gmail.com";
    } else {
      // Llamar la función scrollToSection si no es contacto
      scrollToSection(section);
    }
  };

  return (
    <main id="top" className="main-container">
      <div className="main-background">
        <Image
          src="/portfolio.png"
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
      <nav className="main-navigation">
        <div className="nav-item">
          <button onClick={() => handleNavigation('top')} className="nav-link">
            <FontAwesomeIcon icon={faHome} className="nav-icon" /> 
            {translations[language].header.sections.home}
          </button>
        </div>

        <div className="nav-item">
          <Link href="/pages/projects">
            <div className="nav-link">
              <FontAwesomeIcon icon={faFolderOpen} className="nav-icon" />
              {translations[language].header.sections.projects}
            </div>
          </Link>
        </div>

        <div className="nav-item">
          <Link href="/technologies">
            <div className="nav-link">
              <FontAwesomeIcon icon={faLaptopCode} className="nav-icon" />
              {translations[language].header.sections.technologies}
            </div>
          </Link>
        </div>

        <div className="nav-item">
          <button onClick={() => handleNavigation('contacto')} className="nav-link">
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
            {translations[language].header.sections.contact}
          </button>
        </div>
      </nav>

      {/* Botón de cambio de idioma */}
      <div className="language-switch">
        <button 
          onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
          className="language-button"
        >
          {language === 'es' ? 'Switch to English' : 'Cambiar idioma a Español'}
        </button>
      </div>
    </main>
  );
}
