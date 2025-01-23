"use client";
import React, { useEffect } from 'react';
import Main from './main/Main';
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
    <LanguageProvider>
      <div className="p-0 m-0 overflow-hidden">
        <Main />
      </div>
    </LanguageProvider> 
  );
}
