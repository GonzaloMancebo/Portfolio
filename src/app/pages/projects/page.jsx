"use client";
import React, { useState } from "react";
import initialProjects from '../../../../data'; // Importa desde el archivo data.js
import ReturnHome from "../../components/return/ReturnHome";
import "./projects.css";

function ProjectsCarousel() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Función para pasar al siguiente proyecto
  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % initialProjects.length);
  };

  // Función para volver al proyecto anterior
  const prevProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + initialProjects.length) % initialProjects.length
    );
  };

  const project = initialProjects[currentProjectIndex]; // Obtener el proyecto actual

  return (
    <div className="projects-carousel-container">
      <div>
        <ReturnHome />
      </div>

      <div className="carousel-controls">
        <button onClick={prevProject} className="carousel-btn left">{"<"}</button>
        <button onClick={nextProject} className="carousel-btn right">{">"}</button>
      </div>

      <div className="project-card">
        <h3 className="project-title">{project.name}</h3>
        <img
          src={project.imageUrl}
          alt={project.name}
          className="project-image"
        />

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-item">{tech}</span> // Solo mostramos el nombre de la tecnología
          ))}
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-links">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">Ver Proyecto</a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">Ver Código</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
