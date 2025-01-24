"use client"
import  { createContext, useContext, useState } from 'react';
import translations from '../translate/translations'; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Estado para almacenar el idioma actual
  const [language, setLanguage] = useState('es'); 

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Proveer el contexto con los valores que se van a usar en los componentes hijos
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto de idioma en componentes funcionales
export const useLanguage = () => {
  return useContext(LanguageContext);
};
