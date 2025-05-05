"use client";
import { useEffect, useRef, useState } from "react";
import Main from "./main/Main";
import { LanguageProvider } from "./translate/LanguageContext";
import LoadingScreen from './components/loading/LoadingScreen';
import MaintenanceScreen from './components/maintence/MaintenanceScreen';

export default function Home() {
  const isMaintenanceMode = true; // 🔧 Cambia esto a true para activar el modo mantenimiento

  const isInitialRender = useRef(true);
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);

  const handleAnimationEnd = () => {
    setIsLoadingFinished(true);
    localStorage.setItem("loadingFinished", "true");
  };

  useEffect(() => {
    if (localStorage.getItem("loadingFinished") === "true") {
      setIsLoadingFinished(true);
      return;
    }

    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(hash);
        targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 2000);
    }
  }, []);

  if (isMaintenanceMode) {
    return <MaintenanceScreen />;
  }

  return (
    <LanguageProvider>
      <div className="p-0 m-0">
        {!isLoadingFinished && <LoadingScreen onAnimationEnd={handleAnimationEnd} />}
        {isLoadingFinished && <Main />}
      </div>
    </LanguageProvider>
  );
}
