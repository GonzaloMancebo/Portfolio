"use client";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faAndroid,
	faCss3Alt,
	faHtml5,
	faNodeJs,
	faGithub,
	faAws,
	faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "@/styles/technologies.css";
import ReturnHome from "@/app/components/return/ReturnHome";
import Slider from "react-slick";

function Technologies() {
	const groupedTechnologies = {
		Frontend: [
			{ id: 1, icon: faHtml5, name: "HTML", color: "html-color" },
			{ id: 2, icon: faCss3Alt, name: "CSS", color: "css-color" },
			{ id: 3, icon: faJs, name: "JavaScript", color: "js-color" },
			{ id: 4, icon: faReact, name: "React", color: "react-color" },
			{
				id: 5,
				icon: faReact,
				name: "React Native",
				color: "react-native-color",
			},
			{ id: 6, icon: faAndroid, name: "Android", color: "android-color" },
		],
		Backend: [
			{ id: 7, icon: faNodeJs, name: "Node.js", color: "nodejs-color" },
			{ id: 8, icon: faJs, name: "Express.js", color: "express-color" },
		],
		"Base de datos": [
			{ id: 9, icon: faDatabase, name: "MySQL", color: "mysql-color" },
			{ id: 10, icon: faDatabase, name: "MongoDB", color: "mongo-color" },
		],
		DevOps: [
			{ id: 11, icon: faAws, name: "AWS", color: "aws-color" },
			{ id: 12, icon: faDatabase, name: "Docker", color: "docker-color" },
		],
		"Control de versiones": [
			{ id: 13, icon: faGithub, name: "GitHub", color: "github-color" },
		],
	};

	useEffect(() => {
		document.body.style.backgroundImage = 'url("/background.jpg")';
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
		document.body.style.backgroundRepeat = "no-repeat";
		return () => {
			document.body.style.backgroundImage = "";
		};
	}, []);

	const settings = {
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
    arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<>
			<ReturnHome />
			<div className="technologies-container">
				{Object.entries(groupedTechnologies).map(([groupTitle, techList]) => (
					<div key={groupTitle} className="tech-section">
						<h2 className="tech-title">{groupTitle}</h2>
						{groupTitle === "Frontend" ? (
							<Slider {...settings}>
								{techList.map((tech) => (
									<div key={tech.id}>
										<div className="technology-item">
											<div className={`tech-icon ${tech.color}`}>
												<FontAwesomeIcon icon={tech.icon} />
											</div>
											<div className="tech-name">{tech.name}</div>
										</div>
									</div>
								))}
							</Slider>
						) : (
							<div className="tech-grid">
								{techList.map((tech) => (
									<div key={tech.id} className="technology-item">
										<div className={`tech-icon ${tech.color}`}>
											<FontAwesomeIcon icon={tech.icon} />
										</div>
										<div className="tech-name">{tech.name}</div>
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
}

export default Technologies;
