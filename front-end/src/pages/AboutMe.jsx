import React from 'react';
import { Download } from 'lucide-react'; 
import '../styles/AboutMe.css'; 
// Importación de la imagen: ¡LA CORRECCIÓN ESTÁ AQUÍ!
import profilePhoto from '../assets/img/profilePhoto.jpg'; 

function AboutMe() {
  // Enlace de descarga directa de Google Drive
  const cvLink = "https://drive.google.com/uc?export=download&id=1e_kWkG58gop_DEwvmjFF7jtQwOPw7CRi"; 

  return (
    <section className="about-container" id="about">
      <div className="about-content">
                        
        {/* Columna Izquierda: Imagen de Perfil */}
        <div className="profile-image-container">
          <div className="profile-image-circle">
            <img
              // Uso de la variable importada
              src={profilePhoto} 
              alt="Franco Gramulla Profile"
              className="profile-photo"
            />
          </div>
        </div>

        {/* Columna Derecha: Información y Descripción */}
        <div className="profile-info-container">
                            
          <h1 className="profile-name">Franco Gramulla</h1>
          <h2 className="profile-title">Junior Front-End Developer</h2>
          
          <div className="profile-description">
            <p>
              As a <b style={{ color: "#40a4c4" }}>Junior Front-End Developer</b>, I specialize in transforming modern designs into <b style={{ color: "#818cf8" }}> clean, responsive, and highly efficient user interfaces</b>. My foundation is built on <b style={{ color: "#E44D26" }}>HTML</b>, <b style={{ color: "#264DE4" }}>CSS</b>, and <b style={{ color: "#F7DF1E" }}>JavaScript</b>, with a strong
              focus on <b style={{ color: "#40a4c4" }}>React</b> for building scalable and component-based applications.
            </p>
            <p>
              I am driven by a passion for <b style={{ color: "#40a4c4" }}>user experience (UX)</b> and
              thrive in environments where I can learn new technologies and
              contribute actively to team goals. My code is clean, modular, and
              performance-oriented. 
            </p>
            <p className="cv-prompt">
              To see my professional journey and detailed technical skills, please find the download button for my CV below.
            </p>
          </div>

          {/* Botón para el CV */}
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
          >
            Download CV <Download size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;