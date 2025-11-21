import React from 'react';
import '../styles/Footer.css'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container minimal">
      <div className="footer-content">
        <p className="footer-copyright">
          © {currentYear} Hecho por Franco Gramulla Bridarolli. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;