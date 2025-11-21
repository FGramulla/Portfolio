// src/data/skillData.js

// Importar los iconos de Devicons (Di)
import { 
  DiHtml5, 
  DiCss3, 
  DiJavascript1, 
  DiReact, 
  DiGit, 
  DiGithubBadge, 
  DiMysql, // Usaremos MySQL como icono representativo de SQL
  DiJava, 
} from 'react-icons/di'; 

// Importar el icono de Figma desde Simple Icons (Si)
import { 
  SiFigma // Icono de Figma corregido
} from 'react-icons/si';

// Nota: Aunque los imports parecen venir de la misma librería, 
// en una aplicación real necesitarías instalar 'react-icons' y usar el prefijo correcto (e.g., 'react-icons/di').

const skillData = [
  { id: 1, name: 'HTML', icon: DiHtml5, link: 'https://www.w3schools.com/html/' }, // Devicon HTML5
  { id: 2, name: 'CSS', icon: DiCss3, link: 'https://www.w3schools.com/css/' }, // Devicon CSS3
  { id: 3, name: 'JavaScript', icon: DiJavascript1, link: 'https://www.w3schools.com/js/' }, // Devicon JavaScript
  { id: 4, name: 'React', icon: DiReact, link: 'https://es.react.dev/' }, // Devicon React
  { id: 5, name: 'Git', icon: DiGit, link: 'https://git-scm.com/' }, // Devicon Git
  { id: 6, name: 'GitHub', icon: DiGithubBadge, link: 'https://github.com/' }, // Devicon GitHub
  { id: 7, name: 'SQL', icon: DiMysql, link: 'https://www.w3schools.com/sql/' }, // Devicon MySQL (representación SQL)
  { id: 8, name: 'Java', icon: DiJava, link: 'https://www.java.com/es/' }, // Devicon Java
  { id: 9, name: 'Figma', icon: SiFigma, link: 'https://www.figma.com/' }, // Simple Icons Figma (CORREGIDO)
];

export default skillData;