"use client"; 
import React, { useEffect } from 'react';
import Main from './main/Main';
import { LanguageProvider } from './translate/LanguageContext'; // Asegúrate de la ruta correcta

export default function Home() {
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
