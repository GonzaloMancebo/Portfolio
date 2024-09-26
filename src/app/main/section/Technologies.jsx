"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import { technologies } from '../../data';
import { useLanguage } from '../../translate/LanguageContext'; // Importa el contexto de lenguaje

const Technologies = () => {
  const { language, translations } = useLanguage(); // Usa el contexto de lenguaje

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  return (
    <section id="tecnologias" className="p-8 mt-8">
      <h2 className="text-3xl font-bold mb-20">{translations[language].header.sections.technologies}</h2>
      <p className="mb-4 text-lg text-center">
        {translations[language].technologies.intro} 
      </p>
      <p className="mb-5 text-lg text-center">
        {translations[language].technologies.description} {/* Cambia esto según tus traducciones */}
      </p>
      <div className="relative w-full max-h-[100px] max-w-[300px] mx-auto p-4 rounded-lg shadow-lg">
        <Slider {...settings}>
          {technologies.map((tech) => (
            <div key={tech.id} className="flex items-center justify-center p-4">
              <FontAwesomeIcon icon={tech.icon} className={`text-4xl ${tech.color}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Technologies;
