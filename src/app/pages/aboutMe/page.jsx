"use client";
import { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import "@/styles/aboutMe.css";
import ReturnHome from "@/app/components/return/ReturnHome";

function AboutMe() {
  useEffect(() => {
    document.body.style.backgroundImage = 'url("/portafoliofondo.jpg")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    return () => {
      document.body.style.backgroundImage = ""; // Limpiar el fondo al salir
    };
  }, []);

  return (
    <>
      <ReturnHome />
      <div className="about-me-container">
        <div className="about-me-image">
          <Image 
            src="/Fotoperfil.jpg" 
            alt="Profile" 
            width={200} 
            height={200} 
            className="profile-image"
            loading="lazy"
          />
        </div>
        <p className="about-me-description">
          Hi, I am Gonzalo Mancebo, a passionate software developer with a strong focus on web development.
          With a background in computer science and a deep interest in technology, 
          I thrive on the challenges of building innovative solutions. 
          My expertise spans programming languages, frameworks,
          and databases, empowering me to create robust, efficient web applications.
        </p>

        <div className="about-me-icon">
          <Link href="https://www.linkedin.com/in/gonzalo-mancebo-055165150/">
            <FontAwesomeIcon icon={faLinkedin} className="nav-icon" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
