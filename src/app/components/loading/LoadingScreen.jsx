"use client";
import { useEffect, useState } from 'react';
import '@/styles/LoadingScreen.css';

const LoadingScreen = ({ onAnimationEnd }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onAnimationEnd(); // Llamar a la función de finalización
    }, 3000); // 3 segundos de animación (puedes modificar este tiempo)

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className={`loading-screen ${!isLoading ? 'hide' : ''}`}>
      <div className="spinner">✨</div>
      <h1 className="loading-title">Bienvenido a mi portafolio</h1>
      <p className="loading-subtitle">Cargando contenido...</p>
      <p className="loading-blink">¡Gracias por tu paciencia!</p>
    </div>
  );
};

export default LoadingScreen;
