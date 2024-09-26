"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../translate/LanguageContext'; // Importa el contexto de lenguaje

const AboutMe = () => {
  const { language, translations } = useLanguage(); // Usa el contexto de lenguaje

  return (
    <section id="sobre-mi" className="p-8 mt-9">
      <h2 className="text-3xl font-bold mb-4">{translations[language].aboutMe.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center">
        <div className="relative w-full h-80 md:h-[500px] flex justify-center items-center">
          <Image
            src="/Fotoperfil.jpg"
            alt="Foto de Perfil"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            className="some-class"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-lg mb-4">
            {translations[language].aboutMe.description1}
          </p>
          <p className="text-lg">
            {translations[language].aboutMe.description2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
