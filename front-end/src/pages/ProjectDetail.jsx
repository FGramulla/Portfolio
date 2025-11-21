import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.js'; 
import '../styles/ProjectDetail.css'; 

const ProjectDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const projectId = parseInt(id); 
  const project = projectsData.find(p => p.id === projectId);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project) {
        navigate('/'); 
    }
  }, [project, navigate]);

  if (!project) {
    return null; 
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % project.imagenes.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + project.imagenes.length) % project.imagenes.length
    );
  };

  const imagePath = project.imagenes[currentImageIndex];

  return (
    <div className="project-detail-container">
      <div className="detail-content">
        
        {/* Lado Izquierdo: Carrusel de Imágenes */}
        <div className="detail-carousel-wrapper">
          <img 
            src={imagePath} 
            alt={`Imagen ${currentImageIndex + 1} de ${project.nombre}`} 
            className="detail-image"
          />
          
          {project.imagenes.length > 1 && (
            <>
              <button className="carousel-btn prev-btn" onClick={prevImage}>{"<"}</button>
              <button className="carousel-btn next-btn" onClick={nextImage}>{">"}</button>
            </>
          )}

          <div className="carousel-dots detail-dots">
            {project.imagenes.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Lado Derecho: Detalles del Proyecto */}
        <div className="detail-info">
          <h1 className="detail-title">{project.nombre}</h1>
          <p className="detail-description">{project.descripcion}</p>
          
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button detail-link-btn primary-btn-full-width" // Nueva clase para estilos
            >
              Go to Website
            </a>
          )}
          {/* El botón "Volver" ha sido eliminado */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
