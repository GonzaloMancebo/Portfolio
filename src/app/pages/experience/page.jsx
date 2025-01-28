"use client";
import { useEffect } from "react";
import ReturnHome from "@/app/components/return/ReturnHome";
import "./experience.css";

function Experience() {
  useEffect(() => {
    document.body.style.backgroundImage = 'url("/background.jpg")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    return () => {
      document.body.style.backgroundImage = ""; // Limpiar el fondo al salir
    };
  }, []);

  return (
    <>
      <ReturnHome />
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-company">
            <h2>Gravitad</h2>
            <p>Madrid, Spain</p>
          </div>
          <div className="experience-details">
            <h3>Full Stack Technical Consultant</h3>
            <p>December 2024 - Present</p>
          </div>
        </div>
        <div className="experience-description">
          <ul>
            <li>Streamlined the workflow of Accommodation Assistants by ensuring a consistent supply of linen and amenities, contributing to operational efficiency and guest satisfaction.</li>
            <li>Proactively identified and resolved logistical challenges related to guest luggage transportation, improving the overall guest experience.</li>
            <li>Enhanced inventory accuracy by conducting regular stocktakes of linen and amenities, implementing more efficient management practices.</li>
            <li>Maintained pristine public areas and operational spaces, ensuring alignment with brand standards and creating a welcoming environment for guests.</li>
            <li>Delivered top-tier customer service by addressing guest needs promptly, contributing to high satisfaction scores and repeat business.</li>
            <li>Collaborated cross-functionally in a fast-paced, high-pressure environment, exceeding operational demands and fostering a culture of teamwork.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experience;
