import React, { useState, useEffect } from 'react';
import { FaReact } from 'react-icons/fa'; // Importamos el icono de React
import '../styles/Loading.css'; 

const Loading = () => {
  const [text, setText] = useState('Cargando...');

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setText('Iniciando...');
    }, 1500);
    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className="loading-screen-wrapper">
      <div className="loader-content">
        <div className="icon-container">
          {/* Icono de React-Icons */}
          <FaReact className="react-icon-animated" />
          
          {/* El anillo decorativo se mantiene para dar profundidad */}
          <div className="ring"></div>
        </div>
        
        <p className="loading-status-text">{text}</p>
      </div>
    </div>
  );
};

export default Loading;