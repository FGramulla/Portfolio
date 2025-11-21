// data/projects.js

// --- Importación de todas las imágenes desde src/assets/img/ ---
// NOTA: La ruta de importación (ej: '../assets/img/...') debe ser precisa 
// con respecto a la ubicación de ESTE archivo (data/projects.js).

// Proyecto 1: AlquiCancha
import AlquiCancha1 from '../assets/img/Alquicancha.png';
import AlquiCancha2 from '../assets/img/Alquicancha2.png';
import AlquiCancha3 from '../assets/img/Alquicancha3.png';

// Proyecto 2: StyleHub
import StyleHub1 from '../assets/img/Stylehub.png';
import StyleHub2 from '../assets/img/Stylehub2.png';
import StyleHub3 from '../assets/img/Stylehub3.png';

// Proyecto 3: Weather By F.G
import ClimaByFG1 from '../assets/img/ClimaByFG.png';
import ClimaByFG2 from '../assets/img/ClimaByFG2.png';
import ClimaByFG3 from '../assets/img/ClimaByFG3.png';

// Proyecto 4: Marketing agency model
import AgenciaMarketing1 from '../assets/img/agenciaMarketing1.png';
import AgenciaMarketing2 from '../assets/img/agenciaMarketing2.png';
import AgenciaMarketing3 from '../assets/img/agenciaMarketing3.png';

// (El proyecto Pokedex no estaba en tu último JSON, pero si existe, impórtalo aquí también)
// import Pokedex1 from '../assets/img/pokedex1.png'; 
// etc.

const projects = [
  {
    id: 1,
    nombre: "AlquiCancha",
    descripcion: "Together with my study team at DigitalHouse, we created this e-commerce using React.js and Firebase. On AlquiCancha, you can rent different sports fields, as well as hire personnel like referees, equipment, and a place to eat afterward.",
    // Se usan las variables importadas, que ahora contienen las URLs públicas
    imagenes: [
      AlquiCancha1,
      AlquiCancha2,
      AlquiCancha3
    ],
    link: "https://alquicancha-d6d01.web.app/"
  },
  {
    id: 2,
    nombre: "StyleHub",
    descripcion: "This was a personal project for an e-commerce selling a wide variety of products.",
    imagenes: [
      StyleHub1,
      StyleHub2,
      StyleHub3
    ],
    link: "https://style-hub-tau.vercel.app"
  },
  {
    id: 3,
    nombre: "Weather By F.G",
    descripcion: "This is a weather app I created using React and an API. In the details section, the background video changes according to the weather conditions.",
    imagenes: [
      ClimaByFG1,
      ClimaByFG2,
      ClimaByFG3
    ],
    link: "https://clima-by-fg.vercel.app/"
  },
  {
    id: 4,
    nombre: "Marketing agency model",
    descripcion: "The website is a model page for a digital marketing agency with a modern, intuitive design, built with React + Vite, and also featuring a 3D model.",
    imagenes: [
      AgenciaMarketing1,
      AgenciaMarketing2,
      AgenciaMarketing3
    ],
    link: "https://agencia-marketing-eight.vercel.app/"
  },
];

export default projects;