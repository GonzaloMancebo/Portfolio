"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../../translate/LanguageContext'; // Importa el contexto de lenguaje
import initialProjects from '../../data'; // Asegúrate de que la ruta sea correcta

const ReadMore = ({ text }) => {
  const { language, translations } = useLanguage(); // Usa el contexto de lenguaje
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <p className="text-gray-700 mb-4">
        {isExpanded ? text : `${text.substring(0, 150)}...`}
      </p>
      <button onClick={toggleReadMore} className="text-blue-500 underline">
        {isExpanded ? translations[language].readMore.readLess : translations[language].readMore.readMore}
      </button>
    </div>
  );
};

const Projects = () => {
  const { language, translations } = useLanguage(); // Usa el contexto de lenguaje
  const projects = initialProjects; // Obtiene la lista de proyectos desde el archivo de datos
  const [openProjectId, setOpenProjectId] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredProjectId(id);
  };

  const handleMouseLeave = () => {
    setHoveredProjectId(null);
  };

  const handleVideoClick = (id) => {
    setOpenProjectId(id);
  };

  const handleCloseVideo = (e) => {
    e.stopPropagation(); // Prevenir la propagación del evento
    setOpenProjectId(null);
  };

  return (
    <section id="proyectos" className="p-8 mt-8">
      <h2 className="text-3xl font-bold mb-4">{translations[language].header.sections.projects}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div
                className="relative w-full h-48 mb-4 cursor-pointer" >
                  <div className="relative w-full h-48 mb-4 flex items-center justify-center">
                    <Image
                      src={project.imageUrl || "/proyecto1_image.png"}
                      alt={`Proyecto ${project.id}`}
                      width={300}
                      height={200}
                      style={{ width: "auto", height: "auto" }}
                      className="some-class"
                    />
                  </div>
                
              </div>
              <h3 className="text-black font-semibold mb-2">{translations[language].projects[project.id].name}</h3>
              <h3 className="text-black font-semibold mb-2">{translations[language].projects[project.id].credential}</h3>
              <ReadMore text={translations[language].projects[project.id].description} />
              <p className="text-gray-500 mb-2">
                <strong>Tecnologías:</strong> {project.technologies.join(', ')}
              </p>
              <div className="flex items-center justify-end space-x-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xl" />
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>{translations[language].projects.noProjects}</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
