"use client";
import React, { useEffect, useRef } from "react";
import Main from "./main/Main";
import { LanguageProvider } from "./translate/LanguageContext"; // Asegúrate de la ruta correcta

export default function Home() {
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
  
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(hash);
        targetElement?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // Mantener retraso mínimo
    }
  }, []);
  

  return (
    <LanguageProvider>
      <div className="p-0 m-0">
        <Main />
      </div>
    </LanguageProvider>
  );
}
