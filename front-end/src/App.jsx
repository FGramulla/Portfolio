import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'; 
import ProjectDetail from './pages/ProjectDetail'; 
import Header from './components/Header'; 
import Footer from './components/Footer';
import Loading from './pages/Loading'; // Importamos el componente

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos un tiempo de carga de 3 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpieza para evitar fugas de memoria
  }, []);

  // Si está cargando, mostramos la pantalla de carga
  if (isLoading) {
    return <Loading />;
  }

  // Una vez que isLoading es false, se renderiza el resto de la App
  return (
    <Router>
      <div className="app-container"> 
        <Header /> 
        
        <main className="content-area ml-20 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} /> 
            <Route path="/projects/:id" element={<ProjectDetail />} /> 
          </Routes>
        </main>
        
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
