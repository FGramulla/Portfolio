import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'; 
import ProjectDetail from './pages/ProjectDetail'; 
import Header from './components/Header'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* 🌟 CONTENEDOR FLEXIBLE PRINCIPAL */}
      <div className="app-container"> 
        
        {/* 1. HEADER (PERSISTENT NAVIGATION) */}
        <Header /> 
        
        {/* 2. MAIN CONTENT AREA */}
        {/* La clase 'content-area' debe tener flex-grow: 1 en el CSS global */}
        <main className="content-area ml-20 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} /> 
            <Route path="/projects/:id" element={<ProjectDetail />} /> 
          </Routes>
        </main>
        
        {/* 3. FOOTER (PERSISTENTE) */}
        <Footer /> 
        
      </div> {/* 🌟 Cierre del contenedor */}
    </Router>
  );
}
export default App;
