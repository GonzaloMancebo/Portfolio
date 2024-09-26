"use client";

import React, { useEffect } from 'react';
import Header from './header/header';
import AboutMe from './main/section/aboutMe'; 
import Projects from './main/section/Projects'; 
import Technologies from './main/section/Technologies'; // Importar el nuevo componente de Tecnologías
import ContactForms from './main/section/contactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LanguageProvider } from './translate/LanguageContext'; // Asegúrate de la ruta correcta

export default function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <LanguageProvider> {/* Coloca LanguageProvider aquí */}
      <Header scrollToSection={scrollToSection} /> 
      
      <main className="p-0 m-0 overflow-hidden">
        <AboutMe />
        <Projects />
        <Technologies /> 
        <ContactForms />
        <ToastContainer />
      </main>
    </LanguageProvider> 
  );
}
