"use client";
import { createContext, useContext, useState, useEffect } from "react";
import translations from "../translate/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Estado para almacenar el idioma actual
  const [language, setLanguage] = useState("es"); // Por defecto 'es'

  // Leer el idioma desde localStorage al cargar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang); // Guardar el idioma seleccionado
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
