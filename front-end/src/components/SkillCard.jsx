// src/components/SkillCard.jsx

import React from 'react';
import '../styles/SkillCard.css'; // Importa el CSS específico

const SkillCard = ({ skill }) => {
  // CRÍTICO: Si el objeto 'skill' está vacío o le faltan propiedades,
  // devolvemos null. Esto evita que un elemento <a> vacío ocupe un slot en el Grid.
  if (!skill || !skill.link || !skill.icon || !skill.name) {
    // Si la data está mal, no renderizamos nada, resolviendo el problema de la celda invisible.
    return null; 
  }
  
  // Renombramos el componente Icono para el renderizado
  const IconComponent = skill.icon;

  return (
    // El enlace completo (a) es clickeable
    <a 
      href={skill.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="skill-card-link"
    >
      <div className="skill-card">
        {/* El icono es un componente, lo renderizamos dinámicamente */}
        <IconComponent size={56} className="skill-icon" /> 
        {/* Nombre de la habilidad */}
        <p className="skill-name">{skill.name}</p>
      </div>
    </a>
  );
};

export default SkillCard;