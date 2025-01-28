// components/LoadingScreen.js
import { useEffect, useState } from 'react';
import './LoadingScreen.css'; // Si deseas agregar estilos adicionales

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
    <div className={`loading-screen ${isLoading ? 'show' : 'hide'}`}>
      <div className="spinner">✨</div>
      <h1>Bienvenido a mi portafolio</h1>
    </div>
  );
};

export default LoadingScreen;
