import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAndroid, faCss3Alt, faHtml5, faNodeJs, faGithub, faAws, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './technologies.css';
import ReturnHome from '@/app/components/return/ReturnHome';

function Technologies() {
  const technologies = [
    { id: 1, icon: faReact, name: 'React', color: 'react-color' },
    { id: 2, icon: faAndroid, name: 'Android', color: 'android-color' },
    { id: 3, icon: faCss3Alt, name: 'CSS', color: 'css-color' },
    { id: 4, icon: faHtml5, name: 'HTML', color: 'html-color' },
    { id: 5, icon: faNodeJs, name: 'Node.js', color: 'nodejs-color' },
    { id: 6, icon: faGithub, name: 'GitHub', color: 'github-color' },
    { id: 7, icon: faDatabase, name: 'Database', color: 'database-color' },
    { id: 8, icon: faAws, name: 'AWS', color: 'aws-color' },
    { id: 9, icon: faJs, name: 'JavaScript', color: 'js-color' }
  ];

  return (
    <>
    <ReturnHome />
    <div className="technologies-container">
      <div className="technologies-list">
        {technologies.map((tech) => (
          <div key={tech.id} className="technology-item">
            <div className={`tech-icon ${tech.color}`}>
              <FontAwesomeIcon icon={tech.icon} />
            </div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Technologies;
