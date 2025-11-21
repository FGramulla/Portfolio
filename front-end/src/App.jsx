import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'; // Imported the AboutMe page
import ProjectDetail from './pages/ProjectDetail'; 
import Header from './components/Header'; 

function App() {
  // NOTE: The main content area must compensate for the sidebar's width (ml-20).
  
  return (
    <Router>
      {/* 1. HEADER (PERSISTENT NAVIGATION) */}
      <Header /> 
      
      {/* 2. MAIN CONTENT AREA */}
      <main className="content-area ml-20 transition-all duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} /> {/* New route for AboutMe */}
          <Route path="/projects/:id" element={<ProjectDetail />} /> 
        </Routes>
      </main>
    </Router>
  );
}
export default App;
