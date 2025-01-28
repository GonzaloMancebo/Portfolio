"use client";
import { useEffect, useRef, useState } from "react";
import Main from "./main/Main";
import { LanguageProvider } from "./translate/LanguageContext";
import LoadingScreen from './components/loading/LoadingScreen';

export default function Home() {
  const isInitialRender = useRef(true);
  const [isLoadingFinished, setIsLoadingFinished] = useState(false); // Estado para controlar cuando la animación termine

  // Función de callback que se pasa a LoadingScreen para que se active cuando termine la animación
  const handleAnimationEnd = () => {
    setIsLoadingFinished(true); // Cambiar el estado para mostrar Main después de la animación
    localStorage.setItem("loadingFinished", "true"); // Almacenar en localStorage que la animación terminó
  };

  useEffect(() => {
    // Verificamos si ya se mostró la pantalla de carga previamente
    if (localStorage.getItem("loadingFinished") === "true") {
      setIsLoadingFinished(true); // Evitar que la pantalla de carga se muestre en recargas
      return;
    }

    // Solo realizar la animación si es la primera vez
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
      }, 2000); // Mantener retraso mínimo
    }
  }, []); // El useEffect se ejecuta solo una vez al montar el componente

  return (
    <LanguageProvider>
      <div className="p-0 m-0">
        {/* Mostrar la pantalla de carga solo si isLoadingFinished es falso */}
        {!isLoadingFinished && <LoadingScreen onAnimationEnd={handleAnimationEnd} />}
        
        {/* Mostrar el contenido principal solo cuando la animación termine */}
        {isLoadingFinished && <Main />}
      </div>
    </LanguageProvider>
  );
}
