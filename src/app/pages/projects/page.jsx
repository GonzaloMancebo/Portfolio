"use client";
import React, { useState, useEffect } from "react";
import initialProjects from '../../../../data'; // Importa desde el archivo data.js
import Image from "next/image";
import ReturnHome from "../../components/return/ReturnHome";
import "@/styles/projects.css";

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

  useEffect(() => {
    // Cambia el fondo cuando el componente se monta
    document.body.style.backgroundImage = 'url("/background.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }, []); // Solo se ejecuta una vez al cargar el componente

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
        
        {/* Aquí usamos Image de Next.js para la imagen del proyecto */}
        <Image
          src="/e-commerce.png"
          alt="ecommerce"
          width={200}
          height={200}
          className="project-image"
          srcSet="/e-commerce.png 200w, /e-commerce@2x.png 400w"
          sizes="(max-width: 600px) 200px, 400px"
          loading="lazy"
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
