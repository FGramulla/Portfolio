// src/components/Home.jsx (o el archivo que contiene la sección de habilidades)

import React, { useRef, useState, useEffect } from "react";
import "../styles/Home.css";
import projectsData from "../data/projects.js";
import skillData from "../data/skillData"; // Importamos la data
import SkillCard from "../components/SkillCard"; // Importamos el componente de la tarjeta
import ProjectCard from "../components/ProjectCard";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const content1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (content1Ref.current) {
      observer.observe(content1Ref.current);
    }

    return () => {
      if (content1Ref.current) {
        observer.unobserve(observer);
      }
    };
  }, []);

  // SOLUCIÓN AL PROBLEMA DE LA TARJETA INVISIBLE:
  // Aplicamos una filtración muy estricta para asegurar que solo objetos válidos
  // (no null, no undefined, y con propiedades esenciales) lleguen al renderizado.
  const filteredSkills = skillData.filter(
    (skill) =>
      skill &&
      typeof skill === "object" &&
      skill.id &&
      skill.name &&
      skill.icon &&
      skill.link
  );

  // Después: (Asegura que usa 'nombre' y también verifica que la array 'imagenes' exista y no esté vacía, tal como lo habíamos definido).
  const filteredProjects = projectsData.filter(
    (project) =>
      project &&
      typeof project === "object" &&
      project.id &&
      project.nombre &&
      project.imagenes &&
      project.imagenes.length > 0
  );
  return (
    <div className="home">
      <section className="content-1" ref={content1Ref}>
        <div className={`welcome-message ${isVisible ? "visible" : "hidden"}`}>
          <h1>Welcome to My Portfolio.</h1>
          <p>
            I'm Franco Gramulla, Jr Front-End Developer. Scroll down to learn
            more about me.
          </p>
        </div>
      </section>

      <section className="content-2 skills-section" id="content2">
        <h2>Abilities</h2>
        <div className="skills-grid">
          {/* Usamos el array filtrado, garantizando que el Grid solo reciba hijos válidos. */}
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="content-3 projects-section" id="content3">
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Usamos el array filtrado, garantizando que el Grid solo reciba hijos válidos. */}
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
