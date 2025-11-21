// components/ProjectCard.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // IMPORTANTE
import "../styles/ProjectCard.css"

const ProjectCard = ({ project }) => {
  // Asumimos que el objeto 'project' es válido porque fue filtrado en Home.jsx
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // NOTA: Las funciones de carrusel (nextImage/prevImage) fueron removidas
  // ya que la vista de tarjeta es estática y el componente solo se enfoca en presentar
  // el estado actual (currentImageIndex).

  return (
    // Usa Link para envolver la tarjeta y navegar
    <Link to={`/projects/${project.id}`} className="project-card-link"> 
      <div className="project-card">
        <h3>{project.nombre}</h3>
        
        {/* Carrusel de Imágenes (solo visualización estática en la tarjeta) */}
        <div className="carousel-container">
          {/* Usamos el operador de encadenamiento opcional (?) en caso de que project.imagenes sea null o undefined, 
             aunque Home.jsx ya debería haberlo filtrado. */}
          <img 
            src={project.imagenes?.[currentImageIndex]} 
            alt={`Imagen ${currentImageIndex + 1} de ${project.nombre}`} 
            className="project-image"
          />
          {/* Ocultamos botones y puntos en la vista de tarjeta para simplificar la interacción */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;