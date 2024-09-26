"use client"; 

import { useState } from 'react'; // Importa useState para manejar el estado
import { useRouter } from 'next/navigation'; // Importamos el nuevo router de next/navigation
import resumeData from './resumeData'; // Importamos los datos del CV
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';




export default function Resume() {
    const router = useRouter();
    const [currentLanguage, setCurrentLanguage] = useState('es'); 

    const goBackToHome = () => {
        router.push('/');
    };

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'es' ? 'en' : 'es'); // Cambia entre español e inglés
    };

    return (
        <div className="min-h-screen bg-gray-100">
          
            {/* Header */}
            <header className="flex items-center p-4 text-black shadow-lg">
                <button
                    onClick={goBackToHome}
                    className="text-black hover:text-gray-300 focus:outline-none mr-4 transition duration-300 ease-in-out"
                    aria-label="Volver a la página principal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-3xl font-bold tracking-wide text-black">{resumeData.titleBack[currentLanguage]}</h1>
                <button
                    onClick={toggleLanguage}
                    className="ml-auto text-blue-500 hover:text-blue-700 focus:outline-none transition duration-300"
                    aria-label="Cambiar idioma"
                >
                    {currentLanguage === 'es' ? 'Inglés' : 'Español'}
                </button>
            </header>

            <div className="p-10 bg-[#f0f4f8] mx-auto my-10 shadow-lg max-w-7xl rounded-lg">
    <div className="justify-center w-100 h-full">
    <h1 className="text-3xl font-bold text-[#003366] text-center text-[50px] leading-normal">
        {currentLanguage === 'es' ? resumeData.title.es : resumeData.title.en}
   
    </h1>


    </div>

    <div className="flex h-full">
        {/* Columna Izquierda */}
        <div className="w-1/3 pr-8 border-r border-gray-300 bg-[#e9f5e9] p-6 rounded-l-lg shadow-inner h-full mt-10">
            {/* Contacto */}
            <div className="mb-20">
                <h2 className="text-2xl font-semibold text-[#2a7c3f] mb-2">
                    {currentLanguage === 'es' ? 'Contacto' : 'Contact'}
                </h2>
                <p className="text-[#333333] flex items-center text-lg">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    <strong>{currentLanguage === 'es' ? 'Correo:' : 'Email:'}</strong>
                    <a
                        href={`mailto:${resumeData.personalInfo.email}`}
                        className="text-blue-500 hover:underline ml-2"
                    >
                        {resumeData.personalInfo.email}
                    </a>
                </p>
                <p className="text-[#333333] flex items-center text-lg">
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    <strong>{currentLanguage === 'es' ? 'Teléfono:' : 'Phone:'}</strong>
                    <a
                        href={`tel:${resumeData.personalInfo.phone}`}
                        className="text-blue-500 hover:underline ml-2"
                    >
                        {resumeData.personalInfo.phone}
                    </a>
                </p>
                <a
                    className="text-[#333333] flex items-center text-lg"
                    href={resumeData.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    <strong>{currentLanguage === 'es' ? 'LinkedIn:' : 'LinkedIn:'}</strong> {resumeData.personalInfo.linkedin}
                </a>
            </div>

            {/* Idiomas */}
            <div className="mb-20">
                <h2 className="text-xl font-semibold text-[#2a7c3f] mb-2">
                    {currentLanguage === 'es' ? 'Idiomas' : 'Languages'}
                </h2>
                <ul className="list-disc ml-6 text-[#333333]">
                    {resumeData.languages.map((language, index) => (
                        <li key={index}>
                            {language.language}: {language.proficiency}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Habilidades */}
            <div className="mb-20">
                <h2 className="text-xl font-semibold text-[#2a7c3f] mb-2">
                    {currentLanguage === 'es' ? 'Habilidades' : 'Skills'}
                </h2>
                <ul className="list-disc ml-6 text-[#333333]">
                    {resumeData.skills[currentLanguage].map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            {/* Software */}
            <div className="mb-20">
                <h2 className="text-xl font-semibold text-[#2a7c3f] mb-2">
                    {currentLanguage === 'es' ? 'Software' : 'Software'}
                </h2>
                <ul className="list-disc ml-6 text-[#333333]">
                    {resumeData.software[currentLanguage].map((software, index) => (
                        <li key={index}>{software}</li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Columna Derecha */}
        <div className="w-2/3 pl-8 h-full bg-white mt-10">
            {/* Perfil */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#2a7c3f] mb-2">
                    {currentLanguage === 'es' ? 'Perfil' : 'Profile'}
                </h2>
                <p className="text-[#333333] leading-relaxed">
                    {currentLanguage === 'es'
                        ? 'Soy un profesional con amplia experiencia en la gestión de operaciones, logística y recursos humanos. Me considero una persona organizada, con una gran atención al detalle y habilidades en la resolución de problemas.'
                        : 'I am a professional with extensive experience in operations management, logistics, and human resources. I consider myself an organized person, with great attention to detail and problem-solving skills.'}
                </p>
            </div>

            {/* Experiencia Laboral */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#2a7c3f] mb-2">
                    {currentLanguage === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
                </h2>
                <ul className="list-disc ml-6 text-[#333333] leading-relaxed">
                    {resumeData.experience.map((job, index) => (
                        <li key={index} className="mb-4">
                            <strong>{job.company[currentLanguage]} / {job.location[currentLanguage]} — {job.title[currentLanguage]}</strong><br />
                            {job.startDate} - {job.endDate}<br />
                            {job.responsibilities[currentLanguage].map((responsibility, idx) => (
                                <p key={idx}>{responsibility}</p>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Formación */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#2a7c3f] mb-2">
                    {currentLanguage === 'es' ? 'Formación' : 'Education'}
                </h2>
                <ul className="list-disc ml-6 text-[#333333] leading-relaxed">
                    {resumeData.education.map((edu, index) => (
                        <li key={index} className="mb-4">
                            {edu.degree[currentLanguage]} — {edu.institution} / {edu.location[currentLanguage]}<br />
                            {edu.startDate} - {edu.endDate}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
</div>


        </div>
    );
}
