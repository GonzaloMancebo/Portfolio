"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import initialProjects from "../../../../data"; // Asegúrate que cada proyecto tenga un campo "type": "Web" o "Mobile"
import ReturnHome from "../../components/return/ReturnHome";
import "@/styles/projects.css";

function Projects() {
	const [filter, setFilter] = useState("Todos");

	const filteredProjects =
		filter === "Todos"
			? initialProjects
			: initialProjects.filter((project) => project.type === filter);

	useEffect(() => {
		document.body.style.backgroundImage = 'url("/background.jpg")';
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
	}, []);

	return (
		<div className="projects-page">
			<ReturnHome />
			<h2 className="section-title">Proyectos</h2>

			<div className="filters">
				{["Todos", "Web", "Mobile"].map((type) => (
					<button
						key={type}
						className={`filter-button ${filter === type ? "active" : ""}`}
						onClick={() => setFilter(type)}>
						{type}
					</button>
				))}
			</div>

			<div className="projects-grid">
				{filteredProjects.map((project, index) => (
					<div key={index} className="project-card">
						{project?.imageUrl && (
							<Image
								src={project.imageUrl}
								alt={project.name}
								width={200}
								height={200}
								className="project-image"
								loading="lazy"
							/>
						)}

						<h3 className="project-title">{project.name}</h3>
						<p className="project-description">{project.description}</p>

						<div className="project-technologies">
							{project.technologies.map((tech, i) => (
								<span key={i} className="tech-item">
									{tech}
								</span>
							))}
						</div>

						<div className="project-links">
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link">
								Ver Proyecto
							</a>
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link">
								Ver Código
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
