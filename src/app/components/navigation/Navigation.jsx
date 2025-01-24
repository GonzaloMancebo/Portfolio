"use client"; 
import { faHome, faFolderOpen, faLaptopCode, faEnvelope, faBriefcase, faUserTie  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '../../translate/LanguageContext';
import Link from 'next/link'; 
import "./Navigation.css";

function Navigation() {
    const { language,  translations } = useLanguage(); // Usa el contexto

  return (
    <nav className="main-navigation">
      <div className="nav-item">
        <Link href="/" passHref>
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            {translations[language].header.sections.home}
        </Link>
      </div>

      <div className="nav-item">
        <Link href="pages/experience">
            <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
            {translations[language].header.sections.experience}
        </Link>
      </div>

      <div className="nav-item">
        <Link href="pages/projects">
            <FontAwesomeIcon icon={faFolderOpen} className="nav-icon" />
            {translations[language].header.sections.projects}
        </Link>
      </div>

      <div className="nav-item">
        <Link href="pages/technologies">
            <FontAwesomeIcon icon={faLaptopCode} className="nav-icon" />
            {translations[language].header.sections.technologies}
        </Link>
      </div>

      <div className="nav-item">
        <Link href="pages/aboutMe">
            <FontAwesomeIcon icon={faUserTie} className="nav-icon" />
            {translations[language].header.sections.about}
        </Link>
      </div>

      <div className="nav-item">
    <Link href="mailto:gmancebo.dev@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
        {translations[language].header.sections.contact}
    </Link>
</div>

    </nav>
  );
}

export default Navigation;
