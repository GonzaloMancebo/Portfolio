
"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono
import "./ReturnHome.css";


function ReturnHome() {
    return (
        <div className="return-home-container">
        <Link href="/" >
            <FontAwesomeIcon icon={faArrowLeft} className="return-home-button" />
            <div className="return-home-button">Return Home</div>
        </Link>
        </div>
    );
};

export default ReturnHome;