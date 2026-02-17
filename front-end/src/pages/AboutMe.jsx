import React, { useState } from 'react';
import { FiDownload, FiMail, FiChevronLeft } from 'react-icons/fi'; 
import '../styles/AboutMe.css'; 
import profilePhoto from '../assets/img/profilePhoto.jpg'; 

function AboutMe() {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const cvLink = "https://drive.google.com/file/d/1FXPJxPBY9UNZT8xlOxigltXIDlqesHaC/view?usp=sharing"; 

  const handleOpenEnvelope = () => {
    if (!isOpened) {
      setIsOpened(true);
      
      setTimeout(() => {
        setShowContent(true);
      }, 700); 
    }
  };

  const handleCloseEnvelope = (e) => {
    e.stopPropagation(); 
    
    setShowContent(false);
    
    setTimeout(() => {
      setIsOpened(false);
    }, 300); 
  };

  return (
    <section className="about-container" id="about">
      
      <div 
        className={`envelope-wrapper ${isOpened ? 'open' : ''}`}
        onClick={!isOpened ? handleOpenEnvelope : undefined} 
      >
        
        {!isOpened && (
          <div className="initial-icon-container">
            <FiMail size={80} className="initial-icon" />
            <p className="click-prompt">Click to Open!</p>
          </div>
        )}

        <div className={`about-content-inner ${showContent ? 'show' : ''}`}>
          
          <button 
            className="close-envelope-button icon-only"
            onClick={handleCloseEnvelope}
            title="Put it back in the envelope"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <div className="profile-image-container">
            <div className="profile-image-circle">
              <img
                src={profilePhoto} 
                alt="Franco Gramulla Profile"
                className="profile-photo"
              />
            </div>
          </div>

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

            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button"
            >
              Download CV <FiDownload size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;